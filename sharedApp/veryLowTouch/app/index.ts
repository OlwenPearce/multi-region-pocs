import {buyADogRoute} from "./routes/buy-a-dog/route";
import {clientValidationPlugin} from "./plugins/clientValidation";

export async function buildApp(context: {}): Promise<FastifyInstance> {
    const app = Fastify();

    //set up
    //e.g.
    // app.addHook('onResponse', (_, reply, done) => {
    //     done some stuff
    //     done();
    // });

    await app.register(postgresPlugin, context);

    app.register(clientValidationPlugin);

    //app.setValidatorCompiler(validatorCompiler);
    //app.setSerializerCompiler(serializerCompiler);

    const routes = [ buyADogRoute ]

    // Routes
    await app.server.register(routes, { prefix: 'v0/' });

    return app;
}

export async function start(): Promise<void> {
    const config = loadConfig();

    const context = await buildSetupContext(config);

    try {
        const app = await buildApp(context);

        app.listen({ host: '0.0.0.0', port: config.httpServer.port }, (err) => {
            if (err) {
                logger.error({ message: `Fastify error`, error: err.message });
                throw err;
            }
        });
    } finally {
        await context.close();
    }
}

start()

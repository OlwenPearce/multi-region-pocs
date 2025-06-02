export async function buildApp(context: unknown, routes: unknown): Promise<FastifyInstance> {
    const app = Fastify();

    //common set up
    //e.g.
    // app.addHook('onResponse', (_, reply, done) => {
    //     done some stuff
    //     done();
    // });

    //await app.register(allMyPlugins);

    //app.setValidatorCompiler(validatorCompiler);
    //app.setSerializerCompiler(serializerCompiler);

    // Routes
    await app.server.register(routes, { prefix: 'v0/' });

    return app;
}

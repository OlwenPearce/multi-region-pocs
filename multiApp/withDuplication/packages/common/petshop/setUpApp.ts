import {buildApp} from "../app";

export async function start(context: unknown, routes: unknown): Promise<void> {
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

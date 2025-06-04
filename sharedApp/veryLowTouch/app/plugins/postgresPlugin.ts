import {ServiceDatabase} from "../database";
import {canSellDogPets4U, canSellDogPetsAtHome} from "../routes/buy-a-dog/validation";

declare module 'fastify' {
    interface FastifyInstance {
        postgres: ServiceDatabase;
    }
}

type PluginOptions = { db: ServiceDatabase };

const plugin: FastifyPluginAsync<PluginOptions> = async (
    fastify: FastifyInstance,
    { db }: PluginOptions
    // eslint-disable-next-line @typescript-eslint/require-await
) => {
    if (fastify.postgres) {
        return;
    }

    fastify.decorate('postgres', db);
};

export const postgresPlugin = fastifyPlugin(plugin, { name: 'postgres-plugin' });

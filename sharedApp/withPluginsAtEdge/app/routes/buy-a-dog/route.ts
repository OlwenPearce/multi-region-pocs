import {buyADog} from "./service";
import {Dog} from "./types";

export const buyADogRoute = (
    server: FastifyInstance
) => {
    server.withTypeProvider<ZodTypeProvider>().get(
        'v1/dogs/:id/buy',
        {

            schema: {
                querystring: QueryParams,
                response: {
                    '200': Dog
                },
            },
        },
        async (req, res) =>
            buyADog(
                {
                    database: server.postgres,
                    repositories: server.repositories,
                    validation: server.clientValidation,
                },
                req,
                res
            )
    );
};

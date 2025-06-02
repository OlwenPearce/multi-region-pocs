import {PetsAtHomeDog} from "../types";
import {buyADog} from "./service";

export const buyADogRoute = (
    server: FastifyInstance
) => {
    server.withTypeProvider<ZodTypeProvider>().get(
        'v1/dogs/:id/buy',
        {

            schema: {
                querystring: QueryParams,
                response: {
                    '200': PetsAtHomeDog
                },
            },
        },
        async (req, res) =>
            buyADog(
                {
                    database: server.postgres,
                    repositories: server.repositories,
                },
                req,
                res
            )
    );
};

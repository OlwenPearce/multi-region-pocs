import {canSellDogPetsAtHome} from "../validation";
import {Dog} from "./types";

export async function buyADog(
    context: { database: ServiceDatabase; repositories: DatabaseManager; validate: unknown },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<Dog> {
    const id = request.params.id;

    const dog = await context.repositories.dogs.getById({
        id
    });

    validate.canSellDog(dog)

    return reply.status(200).send(dog);
}

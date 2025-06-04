import {canSellDogPets4U} from "./validation";
import {Pets4UDog} from "./types";
import {ServiceDatabasePets4U} from "../database";

export async function buyADog(
    context: { database: ServiceDatabasePets4U },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<Pets4UDog> {
    const id = request.params.id;

    const dog = await context.database.dog.getById({
        id
    });

    canSellDogPets4U(dog)

    return reply.status(200).send(dog);
}

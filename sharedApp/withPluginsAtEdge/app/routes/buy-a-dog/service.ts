import {canSellDogPetsAtHome} from "../validation";
import {Dog} from "./types";

export async function buyADog(
    context: { database: ServiceDatabase; repositories: DatabaseManager; validatation: unknown },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<Dog> {
    const id = request.params.id;

    const dog = await context.repositories.dogs.getById({
        id
    });

    validatation.canSellDog(dog)

    if (dog.rescueId) {
        const rescueData = await context.repositories.rescueData.getById({id: dog.rescueId})
        dog.rescueData = rescueData;
    }

    return reply.status(200).send(dog);
}

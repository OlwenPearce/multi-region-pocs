import {PetsAtHomeDog} from "../types";
import {canSellDogPetsAtHome} from "../validation";
import {ServiceDatabasePetsAtHome} from "../database";

export async function buyADog(
    context: { database: ServiceDatabasePetsAtHome },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<PetsAtHomeDog> {
    const id = request.params.id;

    const dog = await context.database.dog.getById({
        id
    });

    canSellDogPetsAtHome(dog)

    if (dog.rescueId) {
        const rescueData = await context.database.rescueData.getById({id: dog.rescueId})
        dog.rescueData = rescueData;
    }

    return reply.status(200).send(dog);
}

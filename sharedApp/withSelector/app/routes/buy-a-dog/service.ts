import {canSellDogPetsAtHome} from "../validation";
import {Dog} from "./types";
import {ValidationBuyADog } from "./validation";
import {ServiceDatabase} from "../../database";

export async function buyADog(
    context: { database: ServiceDatabase; validation: ValidationBuyADog },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<Dog> {
    const id = request.params.id;

    const dog = await context.database.dog.getById({
        id
    });

    context.validation.canSellDog(dog)

    if (dog.rescueId) {
        const rescueData = await context.database.rescueData.getById({id: dog.rescueId})
        dog.rescueData = rescueData;
    }

    return reply.status(200).send(dog);
}

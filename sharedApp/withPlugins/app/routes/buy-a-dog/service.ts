import {canSellDogPetsAtHome} from "../validation";
import {Dog} from "./types";
import {canSellDog} from "./validation";

export async function buyADog(
    context: { database: ServiceDatabase; repositories: DatabaseManager },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<Dog> {
    const id = request.params.id;

    const dog = await context.repositories.dogs.getById({
        id
    });

    canSellDog(dog)

    return reply.status(200).send(dog);
}

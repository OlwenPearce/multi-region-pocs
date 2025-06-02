import {PetsAtHomeDog} from "../types";
import {canSellDogPetsAtHome} from "../validation";

export async function buyADog(
    context: { database: ServiceDatabase; repositories: DatabaseManager },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<PetsAtHomeDog> {
    const id = request.params.id;

    const dog = await context.repositories.dogs.getById({
        id
    });

    canSellDogPetsAtHome(dog)

    return reply.status(200).send(dog);
}

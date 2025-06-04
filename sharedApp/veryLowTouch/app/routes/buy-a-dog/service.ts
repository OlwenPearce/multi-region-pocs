import {BuyADogRes} from "./types";

export async function buyADog(
    context: { database: ServiceDatabase; repositories: DatabaseManager },
    request: {
        params: UrlParams;
    },
    reply: FastifyReply
): Promise<BuyADogRes> {
    const id = request.params.id;

    const dog = await context.repositories.dogs.getById({
        id
    });

    //this method is very low touch - it basically relies on the type
    //to attach validation, system logic and errors to
    //and probably has a "go boom if the type is wrong for this deployment" safety switch

    if (dog.rescueId) {
        const rescueData = await context.repositories.rescueData.getById({id: dog.rescueId})
        dog.rescueData = rescueData;
    }

    const mappedDog = BuyADogRes.safeParse(dog);

    if (mappedDog.err) {
        return mapParsingErrorToRes(mappedDog.err)
    }

    return reply.status(200).send(mappedDog.success);
}

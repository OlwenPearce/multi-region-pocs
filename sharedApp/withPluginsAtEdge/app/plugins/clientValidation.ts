import fp from "fastify-plugin";
import {canSellDogPets4U, canSellDogPetsAtHome} from "../routes/buy-a-dog/validation";

const getClientValidation = () => {
    switch (system.env.CLIENT) {
        case "PetsAtHome":
            return canSellDogPetsAtHome;
        case "Pets4U":
            return canSellDogPets4U;
        default:
            throw new Error("Invalid CLIENT environment variable");
    }
}
export const clientValidationPlugin = fp(async (server, opts) => {
    server.decorate("clientValidation", getClientValidation());
});

import fp from "fastify-plugin";
import {canSellDogPets4U, canSellDogPetsAtHome} from "../routes/buy-a-dog/validation";

const getClientValidation = () => {
    switch (system.env.CLIENT_VALIDATION) {
        case "PetsAtHome":
            return canSellDogPetsAtHome;
        case "Pets4U":
            return canSellDogPets4U;
        default:
            throw new Error("Invalid CLIENT_VALIDATION environment variable");
    }
}
export const clientValidationPlugin = fp(async (server, opts) => {
    server.decorate("clientValidation", getClientValidation());
});

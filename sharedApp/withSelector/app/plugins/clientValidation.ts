import fp from "fastify-plugin";
import {
    validationPets4U,
    validationPetsAtHome
} from "../routes/buy-a-dog/validation";

export const clientValidationPlugin = fp(async (server, opts) => {
    server.decorate("clientValidation", getForRetailer([validationPetsAtHome, validationPets4U]));
});

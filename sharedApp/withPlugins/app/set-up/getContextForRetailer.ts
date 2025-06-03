import {canSellDogPets4U, canSellDogPetsAtHome} from "../routes/buy-a-dog/validation";

//this is an altertive to repeating all the switch logic
//it ends up being no different to loading different context based on a logic switch
//though decorators can use the common function to get and then set-up each part
const getContextForRetailer = () => {
    switch (system.env.CLIENT) {
        case "PetsAtHome":
            return {validation: canSellDogPetsAtHome, database: "ServiceDatabasePetsAtHome"}; ;
        case "Pets4U":
            return {validation: canSellDogPets4U, database: "ServiceDatabasePets4U"};
        default:
            throw new Error("Invalid CLIENT environment variable");
    }
}

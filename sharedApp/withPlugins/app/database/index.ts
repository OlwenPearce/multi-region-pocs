import {Dog, Pets4UDog, PetsAtHomeDog} from "../routes/buy-a-dog/types";

//assume here that part sof the model the client doesn't use are empty tables
// type DogTable = Dog & { createdAt: Date; updatedAt: Date };
//
// export interface ServiceDatabase {
//     dog: DogTable
// }

//alternative
type DogTablePetsAtHome = PetsAtHomeDog & { createdAt: Date; updatedAt: Date };
type DogTablePets4U = Pets4UDog & { createdAt: Date; updatedAt: Date };
export interface ServiceDatabasePetsAtHome {
    dog: DogTablePetsAtHome
}

export interface ServiceDatabasePets4U {
    dog: DogTablePets4U
}

export interface ServiceDatabase {
    dog: DogTablePetsAtHome | DogTablePets4U
};

import {Dog, Pets4UDog, PetsAtHomeDog} from "../routes/buy-a-dog/types";

//assume here that part sof the model the client doesn't use are empty tables
// type DogTable = Dog & { createdAt: Date; updatedAt: Date };
//
// export interface ServiceDatabase {
//     dog: DogTable
// }

type TableMetadata = { createdAt: Date; updatedAt: Date };

//alternative
type DogTablePetsAtHome = Omit<PetsAtHomeDog, "rescueData"> & TableMetadata & { rescueId: string | null };
type DogTablePets4U = Pets4UDog & TableMetadata;
type RescueDataTable = {
    id: string;
    rescueName: string;
    rescueContact: string;
    foundAt: Date;
} & TableMetadata
export interface ServiceDatabasePetsAtHome {
    dog: DogTablePetsAtHome,
    rescueData: RescueDataTable
}

export interface ServiceDatabasePets4U {
    dog: DogTablePets4U
}

export interface ServiceDatabase {
    dog: DogTablePetsAtHome | DogTablePets4U
};

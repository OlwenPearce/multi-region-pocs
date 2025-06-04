import {Pets4UDog, PetsAtHomeDog} from "../routes/buy-a-dog/types";


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
    retailer: "PetsAtHome",
    dog: DogTablePetsAtHome,
    rescueData: RescueDataTable
}

export interface ServiceDatabasePets4U {
    retailer: "Pets4U",
    dog: DogTablePets4U
}

export type ServiceDatabase = ServiceDatabasePetsAtHome | ServiceDatabasePets4U

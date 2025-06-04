import {PetsAtHomeDog} from "./buy-a-dog/types";
import {RescueDataTable, TableMetadata} from "../../packages/common/database";

type DogTablePetsAtHome = Omit<PetsAtHomeDog, "rescueData"> & TableMetadata & { rescueId: string | null };

export interface ServiceDatabasePetsAtHome {
    dog: DogTablePetsAtHome,
    rescueData: RescueDataTable
}

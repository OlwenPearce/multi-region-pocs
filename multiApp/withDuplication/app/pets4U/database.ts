import {TableMetadata} from "../../packages/common/database";
import {Pets4UDog} from "./buy-a-dog/types";

type DogTablePets4U = Pets4UDog & TableMetadata;

export interface ServiceDatabasePets4U {
    dog: DogTablePets4U
}

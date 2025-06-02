import {Dog} from "../routes/buy-a-dog/types";

//assume here that part sof the model the client doesn't use are empty tables
type DogTable = Dog & { createdAt: Date; updatedAt: Date };
export interface ServiceDatabase {
    dog: DogTable
}


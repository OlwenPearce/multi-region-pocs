import {Dog} from "../../packages/common/petshop/types";

export type Pets4UDog = Dog & {
    breed: "LAB" | "RETRIEVER" | "PUG";
    vetChecked: boolean;
}

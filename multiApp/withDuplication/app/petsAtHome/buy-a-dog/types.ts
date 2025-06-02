import {Dog} from "../../packages/common/petshop/types";

export type PetsAtHomeDog = Dog & {
    breed: "LAB" | "PUG" | "BULLDOG";
    isRescue: boolean;
}

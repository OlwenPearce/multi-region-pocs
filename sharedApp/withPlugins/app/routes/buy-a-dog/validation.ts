import {Dog} from "../../../../../multiApp/withDuplication/packages/common/petshop/buy-a-dog/types";
import {Pets4UDog, PetsAtHomeDog} from "./types";

export const canSellDog = (dog: Dog): boolean => {
   //shared service logic
   return dog.name.length > 0
}


export const canSellDogPetsAtHome = (dog: PetsAtHomeDog): boolean => {
   return dog.dateOfBirth > "six-weeks-ago"
}

export const canSellDogPets4U = (dog: Pets4UDog): boolean => {
   return dog.dateOfBirth > "eight-weeks-ago" && dog.vetChecked
}

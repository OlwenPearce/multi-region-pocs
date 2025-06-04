import {Dog} from "../../../../../multiApp/withDuplication/packages/common/petshop/buy-a-dog/types";
import {Pets4UDog, PetsAtHomeDog} from "./types";

export const canSellDogBaseValidation = (dog: Dog): boolean => {
   //shared service logic
   return dog.name.length > 0
}


export const canSellDogPetsAtHome = (dog: PetsAtHomeDog): boolean => {
   return canSellDogBaseValidation(dog) && dog.dateOfBirth > "six-weeks-ago"
}

export const canSellDogPets4U = (dog: Pets4UDog): boolean => {
   return canSellDogBaseValidation(dog) && dog.dateOfBirth > "eight-weeks-ago" && dog.vetChecked
}

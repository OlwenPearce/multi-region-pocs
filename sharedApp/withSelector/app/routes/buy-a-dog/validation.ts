import {Dog} from "../../../../../multiApp/withDuplication/packages/common/petshop/buy-a-dog/types";
import {Pets4UDog, PetsAtHomeDog} from "./types";
import {Retailer} from "../../context/types";

export const canSellDogBaseValidation = (dog: Dog): boolean => {
   //shared service logic
   return dog.name.length > 0
}


const canSellDogPetsAtHome = (dog: PetsAtHomeDog): boolean => {
   return canSellDogBaseValidation(dog) && dog.dateOfBirth > "six-weeks-ago"
}


export type ValidationBuyADog = typeof validationPetsAtHome | typeof validationPets4U

export const validationPetsAtHome = {
   retailer: "PetsAtHome",
   canSellDog: (dog: PetsAtHomeDog): boolean => {
      return canSellDogBaseValidation(dog) && dog.dateOfBirth > "six-weeks-ago"
   },
   rescuseIsAllow: (rescueData: PetsAtHomeDog["rescueData"]): boolean => rescueData.foundAt > "one-week-ago"
}

export const validationPets4U = {
   retailer: "Pets4U",
   canSellDog: (dog: Pets4UDog): boolean => {
      return canSellDogBaseValidation(dog) && dog.dateOfBirth > "eight-weeks-ago" && dog.vetChecked
   }
}


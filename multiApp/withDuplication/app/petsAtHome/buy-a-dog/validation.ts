import {Dog} from "../../packages/common/petshop/types";
import {canSellDog} from "../../packages/common/petshop/validation";


export const canSellDogPetsAtHome = (dog: Dog): boolean => {
   return canSellDog(dog) && dog.dateOfBirth > "six-weeks-ago"
}

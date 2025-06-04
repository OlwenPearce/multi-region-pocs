import {Dog} from "../../packages/common/petshop/types";
import {canSellDog} from "../../packages/common/petshop/validation";


export const canSellDogPets4U = (dog: Dog): boolean => {
   return canSellDog(dog) && dog.dateOfBirth > "eight-weeks-ago"
}

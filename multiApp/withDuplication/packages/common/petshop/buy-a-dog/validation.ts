import {Dog} from "./types";


export const canSellDog = (dog: Dog): boolean => {
    //shared service logic
    return dog.name.length > 0
}

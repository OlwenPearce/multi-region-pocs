//assume we wrpa these
type BaseDog = {
    id: string
    name: string
    breed: string
    dateOfBirth: string
}

export type PetsAtHomeDog = BaseDog & {
    breed: "LAB" | "PUG" | "BULLDOG";
    rescueData: {
        rescueName: string;
        rescueContact: string;
        foundAt: string;
    } | null
}

type SaleablePetsAtHomeDog = PetsAtHomeDog


export type Pets4UDog = BaseDog & {
    breed: "LAB" | "RETRIEVER" | "PUG";
    vetChecked: boolean;
}

//here we add all validation to the zod type e.g.
type SaleablePets4UDog = Pets4UDog
//.refine(dog => dog.vetChecked)

export type BuyADogRes = SaleablePetsAtHomeDog | SaleablePets4UDog;

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

export type Pets4UDog = BaseDog & {
    breed: "LAB" | "RETRIEVER" | "PUG";
    vetChecked: boolean;
}

export type Dog = PetsAtHomeDog | Pets4UDog;

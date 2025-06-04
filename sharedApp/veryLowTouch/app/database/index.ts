import { Pets4UDog, PetsAtHomeDog} from "../routes/buy-a-dog/types";


type TableMetadata = { createdAt: Date; updatedAt: Date };

//the table basically contains all possible data - breed would be a union of both schemas
//or a string
type DogTable = Pets4UDog &
    Omit<PetsAtHomeDog, "rescueData"> &
    TableMetadata & { rescueId: string | null };

type RescueDataTable = {
    id: string;
    rescueName: string;
    rescueContact: string;
    foundAt: Date;
} & TableMetadata
export interface ServiceDatabasePetsAtHome {
    dog: DogTable,
    rescueData: RescueDataTable
}

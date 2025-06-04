
export type TableMetadata = { createdAt: Date; updatedAt: Date };

export type RescueDataTable = {
    id: string;
    rescueName: string;
    rescueContact: string;
    foundAt: Date;
} & TableMetadata



export type Retailer = "PetsAtHome" | "Pets4U";

export function getForRetailer<T extends {retailer: Retailer}>(items: T[]){
    const result = items.filter(item => item.retailer === process.env.CLIENT)

    if (result.length !== 1) {
        throw new Error("No match")
    }

    return result[0];
}

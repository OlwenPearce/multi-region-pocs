import {Retailer} from "./types";
import {buyADogRoute} from "../../../../multiApp/withDuplication/app/petsAtHome/buy-a-dog/route";

export const PetsAtHomeRoutes = {
    retailer: "PetsAtHome",
    routes: [ buyADogRoute, addRescueDataRoute ]
}

export const Pets4URoutes = {
    retailer: "Pets4U",
    routes: [ buyADogRoute ]
}

export const RoutesForRetailers = [Pets4URoutes, PetsAtHomeRoutes]

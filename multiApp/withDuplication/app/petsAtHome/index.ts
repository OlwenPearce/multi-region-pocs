import {start} from "../../packages/common/petshop/setUpApp";
import { buyADogRoute } from "./buy-a-dog/route";

// so here I really want to export the handler and have it be attached to the same route registration etc
// but it's overkill


start({}, [ buyADogRoute ])

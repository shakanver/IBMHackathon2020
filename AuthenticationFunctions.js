//functions used in the authentication process
import { Appliance } from "/Appliance.js";
import {Energy} from "/EnergyClass.js";
import {User} from "/UserClass.js";
import {}

//Add a new user profile to the database
export default function registerUser(name, email, password) {
    const energy = new Energy(0,0,0,0);
    const user = new User(name, email, password, [], energy);

    return user;
}

export default function loginUser(email, password) {

}
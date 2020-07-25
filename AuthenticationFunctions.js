//functions used in the authentication process
import { Appliance } from "/Appliance.js";
import {Energy} from "/EnergyClass.js";
import {User} from "/UserClass.js";
import {data} from "/data.js";

//Add a new user profile to the database
export default function registerUser(name, email, password) {
    const energy = new Energy(0,0,0,0);
    const user = new User(name, email, password, [], energy);
    data[0].users.push(user);
    data[0].passwords.push(password);
    data[0].emails.push(email);
    return user;
}

export default function loginUser(email, password) {
    const status = "";
    for(i = 0, len = data[0].users.length; i < len; i++) {
        let user = data[0].users[i];
        if (user.email == email && user.password == password) {
            data[0].loggedInUsers.push(user);
            status = "logged in successfully";
        }else{
            status = "incorrect password or email";
        }
    }
    return status;
}

export default function logoutUser(email, password) {
    for(i = 0, len = data[0].loggedInUsers.length; i < len; i++) {
        let user = data[0].loggedInUsers[i];
        if (user.email == email && user.password == password) {
            data[0].loggedInUsers.splice(i);
        }
    }
}

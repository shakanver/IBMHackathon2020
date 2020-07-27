//functions used in the authentication process
const appliance = require("./Appliance.js");
const user = require("./UserClass.js");
const energy = require("./EnergyClass.js");

module.exports = {
    registerUser: function(name, email, password) {
        const energy = new energy(0,0,0,0);//create energy object 
        const user = new user(name, email, password, [], energy); //create user object
        //push new user data to database
        data[0].users.push(user); 
        data[0].passwords.push(password);
        data[0].emails.push(email);
        return user;
    },

    loginUser: function(email, password) {
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
    },

    logoutUser: function(email, password) {
        for(i = 0, len = data[0].loggedInUsers.length; i < len; i++) {
            let user = data[0].loggedInUsers[i];
            if (user.email == email && user.password == password) {
                data[0].loggedInUsers.splice(i);
            }
        }
    }
};


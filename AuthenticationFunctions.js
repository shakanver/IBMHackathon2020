//functions used in the authentication process
const Appliance = require("./ApplianceClass.js");
const User = require("./UserClass.js");
const Energy = require("./EnergyClass.js");
const {data} = require("./data.js")


//checks if a user alredy exists, plan to modify it further so that 
//the register function can specify if a certain password or usernam already exists

module.exports = {

    userExists: function(name, email, password) {
        
        for(i = 0; i < data[0].users.length; i++) {
            let user = data[0].users[i];
            if (user.name == name || user.email == email || user.password == password) {
                return true;
            }
        }
    
        return false;
    },
    registerUser: function(name, email, password) {
        const energy = new Energy(0,0,0,0);//create energy object 
        const user = new User(name, email, password, [], energy); //create user object
        //check if that user already exists
        //push new user data to database

        data[0].users.push(user); 
        data[0].passwords.push(password);
        data[0].emails.push(email);
        return user;
    },

    loginUser: function(email, password) {
        var status = "";
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
                return true;
            }
        }

        return false;
    }
};


//Back end server for the Euphaura app
require('dotenv').config();
const appliance = require("./Appliance.js");
const user = require("./UserClass.js");
const energy = require("./EnergyClass.js");
const auth = require("./AuthenticationFunctions.js");
const express = require('express'); //import the express library
const app = express() //express is a class so we need to create an object for it
const jwt = require('jsonwebtoken');//import jwt class for our token authentication system
const {data} = require("./data.js");

app.use(express.json()); //this enables the application to use json

//register user
app.post('/register', (req, res) => {
    //take in relevent details from http request
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password; 
    //create a user object
    //push object to database
    const user = auth.registerUser(name, email, password);
    //redirect user to login page
    res.json({name: user.name, email: user.email});
});

app.post('/login', (req, res) => {
    //get username and password
    const email = req.body.email;
    const password = req.body.password;
    //authenticate user
    const status = auth.loginUser(email, password);
    //return login status
    res.json({status: status});
});

app.post('/logout', (req, res) => {
    //change a user's online status 
    //log them out of the system
    //redirect to login  page
});

app.listen(3000) //listen in for requests on port 3000
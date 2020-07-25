//Back end server for the Euphaura app
import { Appliance } from "/Appliance.js";
import {Energy} from "/EnergyClass.js";
import {User} from "/UserClass.js";
require('dotenv').config();
const express = require('express'); //import the express library
const app = express() //express is a class so we need to create an object for it
const jwt = require('jsonwebtoken');//import jwt class for our token authentication system

app.use(express.json()); //this enables the application to use json

//register user
app.post('/register', (req, res) => {
    //take in relevent details from http request

    //create a user object
    //push object to database
    //redirect user to login page
});

app.post('/login', (req, res) => {
    //get username and password
    //authenticate user
    //return token
});

app.post('/logout', (req, res) => {
    //change a user's online status 
    //log them out of the system
    //redirect to login  page
});
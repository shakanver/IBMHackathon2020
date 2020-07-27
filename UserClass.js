
module.exports = class User {
    //user inputs name, email and password during registration 
    constructor(name, email,password, appliances, energy) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.appliances = appliances;
        this.energy = energy;
    }
}


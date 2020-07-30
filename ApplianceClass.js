/*
Appliance class to store information about each appliance object
*/


module.exports = class Appliance {
    constructor(name, power_rating, daily_consumed) {
        this.name = name;
        this.power_rating = power_rating;
        this.daily_consumed = daily_consumed;
    }
}


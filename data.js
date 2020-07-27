//for the purpose of this demo, this is where we will store all our registered users
//and appliances created in simple lists
//For the future, we plan to use secure database systems such as MongoDB

module.exports = 
    { 
        data: [{
        "users": [],
        "loggedInUsers": [],
        "numUsers": 0,
        "passwords": [],
        "emails": [],
        },
        {
        "appliances": [],
        "numAppliances": 0,
        }
        ]
    };
/**
	Title: mccue-projections.js
    Author: Walter McCue
    Date: 11/14/22
    Description: Assignment 5.2 - Projections
*/

/*
    mongosh "mongodb+srv://web335db.sqlbz3s.mongodb.net/web335DB" --apiVersion 1 --username web335_user
*/

// Loads users.js file
load('users.js');

// Adds a new user to the collection
console.log("db.users.insertOne({firstName: 'Walter', lastName: 'McCue', employeeId: '1013', email: 'wmccue@my365.bellevue.edu', dateCreated: new Date()})");
console.log(
    db.users.insertOne(
        {
            firstName: "Walter",
            lastName: "McCue",
            employeeId: "1013",
            email: "wmccue@my365.bellevue.edu",
            dateCreated: new Date()
        }
    )
);

// Changes Mozart's email address
console.log("db.users.updateOne({lastName: 'Mozart'}, {$set: {email: 'mozart@me.com'}})");
console.log(
    db.users.updateOne(
        {lastName: "Mozart"},
        {$set: {email: "mozart@me.com"}}
    )
);
console.log(
    db.users.findOne(
        {
            lastName: "Mozart"
        }    
    )
);

// Query to display all documents with only firstName, lastName, and email displayed
console.log("db.users.aggregate([{$project: {firstName: 1, lastName: 1, email: 1}}])");
console.log(
    db.users.aggregate(
        [
            {
                $project: {
                    _id: 0,
                    firstName: 1,
                    lastName: 1,
                    email: 1
                }
            }
        ]
    )
);

/**
 * User document clean-up. 
*/
db.users.deleteOne({"email": "jbach@me.com"});
db.users.deleteOne({"email": "lbeethoven@me.com"});
db.users.deleteOne({"email": "wmozart@me.com"});
db.users.deleteOne({"email": "mozart@me.com"});
db.users.deleteOne({"email": "jbrahms@me.com"});
db.users.deleteOne({"email": "rwagner@me.com"});
db.users.deleteOne({"email": "cdebussy@me.com"});
db.users.deleteOne({"email": "wmccue@my365.bellevue.edu"});
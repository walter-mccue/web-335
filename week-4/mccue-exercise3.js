/**
	Title: mccue-exercise3.js
    Author: Walter McCue
    Date: 11/10/22
    Description: MongoDB Shell Query Scripts
*/

// Query to display all documents in the collection
console.log("db.users.find()")
console.log(db.users.find())

// Query to display the document associated with email jbach@me.com
console.log("db.users.findOne({email:'jbach@me.com'})")
console.log(db.users.findOne(
    {
        email:'jbach@me.com'
    }
))

// Query to display the document associated with last name Mozart
console.log("db.users.findOne({lastName:'Mozart'})")
console.log(db.users.findOne(
    {
        lastName:'Mozart'
    }
))

// Query to display the document associated with first name Richard
console.log("db.users.findOne({firstName:'Richard'})")
console.log(db.users.findOne(
    {
        firstName:'Richard'
    }
))

// Query to display the document associated with employee ID 1010
console.log("db.users.findOne({employeeId:'1010'})")
console.log(db.users.findOne(
    {
        employeeId:'1010'
    }
))
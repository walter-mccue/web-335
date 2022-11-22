/**
	Title: mccue-aggregate.js
    Author: Walter McCue
    Date: 11/21/22
    Description: Assignment 6.2 - Projections
*/

/*
    mongosh "mongodb+srv://web335db.sqlbz3s.mongodb.net/web335DB" --apiVersion 1 --username web335_user
*/

// Loads house.js file
load('house.js');

// Lists documents in houses collection
console.log('db.houses.find()');
console.log(db.houses.find());

// Lists documents in students collection
console.log('db.students.find()');
console.log(db.students.find());

// Adds document to student collection
console.log('db.students.insertOne({firstName: "Ron", lastName: "Weasley", studentId: "s1006", houseId: "h1007"})');
console.log(db.students.insertOne({firstName: "Ron", lastName: "Weasley", studentId: "s1006", houseId: "h1007"}));

// Verifies the document was added to collection
console.log('db.students.findOne({lastName: "Weasley"})');
console.log(db.students.findOne({lastName: "Weasley"}));

// Deletes created document
console.log('db.students.deleteOne({lastName: "Weasley"})');
console.log(db.students.deleteOne({lastName: "Weasley"}));

// Verifies the document no longer exists
console.log('db.students.findOne({lastName: "Weasley"})');
console.log(db.students.findOne({lastName: "Weasley"}));

// Lists students by house
console.log('db.houses.aggregate({ $lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "house"}})');
console.log(db.houses.aggregate({ $lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "house"}}));

// Lists students in Gryffindor
console.log('db.houses.aggregate([{ $match: {"houseId": "h1007"}}, { $lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "house"}}])');
console.log(db.houses.aggregate([{ $match: {"houseId": "h1007"}}, { $lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "house"}}]));

//lists students in a house that has an Eagle mascot.
console.log('db.houses.aggregate([{ $match: {"mascot": "Eagle"}}, {$lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "mascot"}}])');
console.log(db.houses.aggregate([{ $match: {"mascot": "Eagle"}}, {$lookup: {from: "students", localField: "houseId", foreignField: "houseId", as: "mascot"}}]));
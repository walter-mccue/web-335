"""
    Title: mccue_usersp2.py
    Author: Walter McCue
    Date: 12/01/22
    Description: Exercise 7.3 - Python with MongoDB, Part 2
"""

# import Mongo Client
from pymongo import MongoClient
import datetime

# connection string
client = MongoClient("mongodb+srv://web335_user:s3cret@web335db.sqlbz3s.mongodb.net/web335DBretryWrites=true&w=majority")

print(client)

# Variable to access the db
db = client['web335DB']

# Creates a new user document
mccue = {
    "firstName": "Walter",
    "lastName": "McCue",
    "employeeId": "1014",
    "email": "wm@test.com",
    "dateCreated": datetime.datetime.utcnow()
}

# Adds the created user document to the database
mccue_user = db.users.insert_one(mccue)
print(mccue_user)

# Displays the created user
print(db.users.find_one({"employeeId": "1014"}))

# Updates the email address for the created user
db.users.update_one(
    {"employeeId": "1014"},
    {"$set": {
        "email": "wmccue@my365.bellevue.edu"
    }}
)

# Displays the created user that was updated with a new email
print(db.users.find_one({"employeeId": "1014"}))

# Deletes the created user
mccue_delete = db.users.delete_one({"employeeId": "1014"})
print(mccue_delete)

# Confirms the created user no longer exists
print(db.users.find_one({"employeeId": "1014"}))
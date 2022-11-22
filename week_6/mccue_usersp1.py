"""
    Title: mccue_usersp1.py
    Author: Walter McCue
    Date: 11/21/22
    Description: Exercise 6.3 - Python with MongoDB, Part 1
"""

# import Mongo Client
from pymongo import MongoClient

# connection string
client = MongoClient("mongodb+srv://web335_user:s3cret@web335db.sqlbz3s.mongodb.net/web335DBretryWrites=true&w=majority")

print(client)

# Variable to access the db
db = client['web335DB']

# Displays all documents in the collection
for user in db.users.find():
    print(user)

# Displays the user with employeeId 1011
print(db.users.find_one({"employeeId": "1011"}))

# Displays the user with lastName Mozart
print(db.users.find_one({"lastName": "Mozart"}))
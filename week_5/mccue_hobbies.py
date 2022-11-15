"""
    Title: mccue_hobbies.py
    Author: Walter McCue
    Date: 11/14/22
    Description: Exercise 5.3 - Python Conditionals, Lists, and Loops
"""

# hobbies List
hobbies = ["Build Lights", "Take the puppy to the park", "Ride your bike", "Play video games", "Watch TV"]

print("Hobbies:")

# for loop for hobbies
for hobby in hobbies:
    print(hobby)

# days list
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

print("Days:")

# for loop for days
for day in days:
    if day == "Sunday" or day =="Saturday":
        print( day + ": You are off and should enjoy your hobbies.")
    else:
        print(day + ": You have to work today.")
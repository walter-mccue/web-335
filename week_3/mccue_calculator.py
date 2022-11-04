"""
    Title: mccue_calculator.py
    Author: Walter McCue
    Date: 11/3/22
    Description: Exercise 3.3
"""

# Initial values
num1 = 4
num2 = 10
num3 = 6
num4 = 8
num5 = 2

# Functions to add, subtract, multiply, and divide
def add (num1):
    return num1 + num1

def subtract (num2, num3):
    return num2 - num3

def divide (num4, num5):
    return num4 / num5

def multiply (num2, num5):
    return num2 * num5

# Variables to test each function
sum = str(add(num1))
difference = str(subtract(num2, num3))
quotient = str(int(divide(num4, num5)))
product = str(multiply(num2, num5))

# Converts num variables to strings
num1 = str(num1)
num2 = str(num2)
num3 = str(num3)
num4 = str(num4)
num5 = str(num5)

# Creates a string to store all variables and their totals
output = num1 + " + " + num1 + " is " + sum + "\n" + num2 + " - " + num3 + " is " + difference + "\n" + num4 + " / " + num5 + " is " + quotient + "\n" + num2 + " * " + num5 + " is " + product

print(output)
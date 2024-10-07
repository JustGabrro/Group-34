# def happy_birthday(name, age):
#     print(f"Happy birthday to {name}!")
#     print(f"You are {age} years old!")
#     print("Happy birthday to you!")
#     print()

# happy_birthday("Bro", 20)
# happy_birthday("Steve", 30)
# happy_birthday("Joe", 40)


# def display_invoice(username, amount, due_date):
#     print(f"Hello {username}")
#     print(f"Your bill of ${amount} is due: {due_date}")

# display_invoice("Justgabrro", "42.50", "25/07")


# def add(x, y):
#     z = x + y
#     return z

# def subtract(x, y):
#     z = x - y
#     return z

# def multiply(x, y):
#     z = x * y
#     return z

# def divide(x, y):
#     z = x / y
#     return z

# print(add(1, 6))
# print(subtract(4, 7))
# print(multiply(3, 7))
# print(divide(10, 3))


def create_name(first, last):
    first = first.capitalize()
    last = last.capitalize()
    return first + " " + last

full_name = create_name("spongebob", "squarepants")
print(full_name)
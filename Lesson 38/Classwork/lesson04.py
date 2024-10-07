def say_hello(name, city, state):
    name1 = ""
    for i in name:
        name1 += i + " "
    name1 = name1[:-1]
    return f"Hello, {name1}! Welcome to {city}, {state}!"
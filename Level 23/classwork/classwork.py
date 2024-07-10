print("----- 1 -----")

def add(num1, num2):
    print(num1 + num2)

add(2, 4)

print("----- 2 -----")

def calculate(num1, num2):
    print("")
    print("Select which mathematical operation you want to perform:")
    print("")
    print("plus +")
    print("minus -")
    print("multiply *")
    print("divide /")
    print("")

    ans = (input("enter your choice:"))

    if ans == "+":
        print(num1 + num2)

    elif ans == "-":
        print(num1 - num2)

    elif ans == "*":
        print(num1 * num2)

    elif ans == "/":
        print(num1 / num2)

    else:
        print("that is not mathematical operation!")

calculate(2, 4)

print("----- 3 -----")

def strings(*words):
    string_list = list(words)
    return string_list

print(strings("luka", "tornike", "andria"))
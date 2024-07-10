def my_function(string):
    if string == string[::-1]:
        return True
    else:
        return False
result = my_function(input("enter :"))
print(result)
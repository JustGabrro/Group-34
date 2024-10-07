# txt = "hello, my name is Peter* I am* 26 years old"

# x = txt.split("* ")

# print(x)


# txt = "apple#banana#cherry#orange"

# x = txt.split("#")

# print(x)


txt = "apple#banana#cherry#orange#mango"

# setting the maxsplit parameter to 1, will return a list with 2 elements!
x = txt.split("#", 2)

print(x)
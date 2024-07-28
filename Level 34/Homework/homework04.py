# 7 kyu Reverse words
def reverse_words(text):
    x = text.split(" ")
    reversed_x = []
    for i in x:
        reversed_x.append(i[::-1])
    return " ".join(reversed_x)


# 7 kyu Factorial
def factorial(n):
    if n < 0 or n > 12:
        raise ValueError("Error")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

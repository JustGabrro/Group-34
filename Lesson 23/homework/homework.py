print("----- 1 -----")

def calculate(num1, num2):
    print(num1 + num2)
    print(num1 - num2)
    print(num1 * num2)
    print(num1 / num2)

print("----- 2 -----")

def print_calculate(num1, num2):
    while num1 != 100:
        num1 += num2
    if num1 == 100:
        return num1

print("----- 3 -----")

def even_odd(number):
    return number % 2 == 0

print("----- 4 -----")

def maximum(numbers):
    return max(numbers)

print("----- 5 -----")

def calculate_list(numbers):
    return sum(numbers)

print("----- 6 -----")

def revers_list(list):
    return list[::-1]

print("----- 7 -----")

def long_short_str(strings):
    long_str = []
    short_str = []

    for word in strings:
        if len(word) >= 5:
            long_str.append(word)
        else:
            short_str.append(word)

    return long_str, short_str

print("----- 8 -----")

def upper_lower(word):
    if word.islower():
        return word.upper()
    else:
        word.isupper()
        return word.lower()

print("----- 9 -----")

def print_consonants(word):
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    count = 0
    for char in word:
        if char in consonants:
            count += 1
    return count

print("----- 10 -----")

def even_odd(number):
    if number % 2 == 0:
        return True
    else:
        return False

print("----- 11 -----")

def even_index(numbers):
    total_sum = sum(numbers[::2])

    return total_sum

print("----- 12 -----")

def even_odd(number):
    return number % 2 == 0

print("----- 13 -----")

def prime_complex(number):
    if number == 2:
        return "prime number"
    
    elif number % 2 == 0:
        return "complex number"
    
    else:
        number % 2 != 0
        return "prime number"

print("----- 14 -----")

def capitalize_list(names):
    new_names = []

    for name in names:
        if name[0].islower():
            new_names.append(name.capitalize())

    return new_names

print("----- 15 -----")

def calculate_list(numbers):
    new_numbers = []

    for num in numbers:
        if num % 2 == 0:
            new_numbers.append(num / 2)

        else:
            new_numbers.append(num * 2)

    return new_numbers

print("----- 16 -----")

def revers_upper_str(word):
    words_list = word[::-1]
    return words_list.upper()

print("----- 17 -----")

def odd_even_list(strings):
    odd = []
    even = []

    for word in strings:
        if len(word) % 2 == 0:
            even.append(word.upper())
        else:
            odd.append(word.upper())
    
    return odd, even

print("----- 18 -----")

def odd_even_list(strings):
    odd = []
    even = []

    for word in strings:
        if len(word) % 2 == 0:
            even.append(word.upper())
        else:
            odd.append(word.capitalize())
    
    return odd, even

print("----- 19 -----")

def upper_lower(word):
    new_word = []

    for str in word:
        if str.islower():
            new_word.append(str.upper())

        else:
            str.isupper()
            new_word.append(str.lower())

    return new_word

print("----- 20 -----")

def find(word, letter):
    index = word.find(letter)
    if index % 2 == 0:
        return word.upper()
    else:
        return word.capitalize()
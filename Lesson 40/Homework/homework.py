# 1

# https://www.codewars.com/kata/57ed30dde7728215300005fa

def bumps(road):
    if road.count("n") <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"

# 2

# https://www.codewars.com/kata/535474308bb336c9980006f2

def greet(name): 
    name = name.capitalize()
    return f"Hello {name}!"

# 3

# https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

def sum_even_numbers(seq): 
    total_sum = 0
    for num in seq:
        if num == int(num) and num % 2 == 0:
            total_sum += num
                
    return total_sum

# 4

# https://www.codewars.com/kata/5413759479ba273f8100003d

def reverse(lst):
    result = list()
    while lst:
        result.append(lst.pop())
        
    return result

# 5

# https://www.codewars.com/kata/57d2807295497e652b000139

def averages(arr):
    if arr is None or len(arr) <= 1:
        return []
    result = []

    for i in range(len(arr) - 1):
        avg = (arr[i] + arr[i + 1]) / 2
        result.append(avg)

    return result

# 6

# https://www.codewars.com/kata/5effa412233ac3002a9e471d

def add(num1, num2):
    num1 = str(num1)[::-1]
    num2 = str(num2)[::-1]
    max_len = max(len(num1), len(num2))
    result = []
    for i in range(max_len):
        if i < len(num1):
            digit1 = int(num1[i])
        else:
            digit1 = 0
        if i < len(num2):
            digit2 = int(num2[i])
        else:
            digit2 = 0
        sum_digits = digit1 + digit2
        result.append(str(sum_digits))
    result.reverse()
    result_str = ''.join(result)
    return int(result_str)

# 7

# https://www.codewars.com/kata/609eee71109f860006c377d1

def last_survivor(letters, coords):
    letters = list(letters)
    for index in coords:
        letters.pop(index)
    return letters[0]

# 8

# https://www.codewars.com/kata/5768a693a3205e1cc100071f

def initialize_names(name):
    parts = name.split()
    if len(parts) == 1:
        return parts[0]
    elif len(parts) == 2:
        return f"{parts[0]} {parts[1]}"

    first_name = parts[0]
    last_name = parts[-1]
    middle_initials = []
    for part in parts[1:-1]:
        middle_initials.append(part[0] + '.')
    
    middle_initials_str = ' '.join(middle_initials)
    return f"{first_name} {middle_initials_str} {last_name}"

# 9

# https://www.codewars.com/kata/5701e43f86306a615c001868

def get_issuer(number):
    number_str = str(number)
    length = len(number_str)
    if length == 15 and (number_str.startswith('34') or number_str.startswith('37')):
        return "AMEX"
    elif length == 16 and number_str.startswith('6011'):
        return "Discover"
    elif length == 16 and (number_str.startswith('51') or number_str.startswith('52') or number_str.startswith('53') or number_str.startswith('54') or number_str.startswith('55')):
        return "Mastercard"
    elif (length == 13 or length == 16) and number_str.startswith('4'):
        return "VISA"
    
    return "Unknown"

# 10

# https://www.codewars.com/kata/57f7b8271e3d9283300000b4

def even_or_odd(s):
    even_sum = 0
    odd_sum = 0
    
    for char in s:
        digit = int(char)
        
        if digit % 2 == 0:
            even_sum += digit
        else:
            odd_sum += digit
    
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"
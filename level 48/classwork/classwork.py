# 8kyu

# 1

# https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
# 7kyu

# 1

# https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python

def sum_two_smallest_numbers(numbers):
    min1 = min(numbers)
    numbers.remove(min1)
    min2 = min(numbers)
    result = min1 + min2
    
    return result

# 2

# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python

def accum(st):
    st = st.lower()
    words = []
    for index in range(len(st)):
        word = st[index] * (index + 1)
        words.append(word.capitalize())
    
    return "-".join(words)

# 6kyu

# 1

# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num

# 2

# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python

def solution(number):
    sum = 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum

# 3

# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

def duplicate_encode(word):
    word = word.lower()
    result = ""
    for char in word:
        if word.count(char) > 1:
            result = result + ")"
        else:
            result = result + "("
    return result
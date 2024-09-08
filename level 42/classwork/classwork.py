# 8kyu

# 1

# https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python

def remove_exclamation_marks(s):
    text = ""
    for word in s:
        if word != "!":
            text += word
    return text

# 2

# https://www.codewars.com/kata/57a55c8b72292d057b000594/train/python

def reverse(st):
    st = st.split()
    reversed_words = st[::-1]
    return " ".join(reversed_words)

# 3

# https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python

def distinct(seq):
    result = []
    for num in seq:
        if num not in result:
            result.append(num)
            
    return result

# 7kyu

# 1

# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

def is_isogram(string):
    string = string.lower()
    for word in string:
        if string.count(word) > 1:
            return False
    return True

# 2

# https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python

def remove_duplicate_words(s):
    result =[]
    words = s.split(" ")
    for word in words:
        if word not in result:
            result.append(word)
    return ' '.join(result)

# 3

# https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/python

def vaporcode(s):
    s = s.upper().replace(" ","")
    res = ""
    for char in s.upper():
        res += char + "  "
        
    return res[:-2]

# 6kyu

# 1

# https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/python

def bouncing_ball(h, bounce, window):
    rebounds = -1
    if 0 < bounce < 1:
        while h > window:
            rebounds += 2
            h *= bounce
    return rebounds
# 1

# https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/python

def make_upper_case(s):
    if s.isupper():
        return s
    else:
        return s.upper()
    
# 2

# https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/python

def hero(bullets, dragons):
    if bullets >= dragons * 2:
        return True
    else:
        return False
    
# 3

# https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/python

def invert(lst):
    revers_list = []
    
    for num in lst:
        if num > 0:
            revers_list.append(0 - num)
        
        elif num < 0:
            revers_list.append(0 - num)
            
        else:
            revers_list.append(num)
            
    return revers_list

# 4

# https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/python

def difference_in_ages(ages):
    youngest = min(ages)
    oldest = max(ages)
    difference = oldest - youngest
    
    return youngest, oldest, difference

# 5

# https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/python

def sum_mix(arr):
    sum = 0
    
    for num in arr:
        sum += int(num)
    
    return sum
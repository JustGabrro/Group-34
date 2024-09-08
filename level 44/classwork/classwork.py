# 8kyu

# 1

# https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python

def repeat_str(repeat, string):
    return string * repeat

# 2

# https://www.codewars.com/kata/577a98a6ae28071780000989/train/python

def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

# 7kyu

# 1

# https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

def friend(x):
    friends = []
    for name in x:
        if len(name) == 4:
            friends.append(name)
    return friends

# 2

# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

def descending_order(num):
    nums = list(str(num))
    nums.sort()
    nums = nums[::-1]
    return int("".join(nums))

# 6kyu

# 1

# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

def likes(names):
    ln = len(names) 
    
    if ln == 0:
        return "no one likes this"
    elif ln == 1:
        return names[0] + " likes this"
    elif ln == 2:
        return names[0] + " and " + names[1] + " like this"
    elif ln == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(ln - 2) + " others like this"
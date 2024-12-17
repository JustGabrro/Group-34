def first_non_repeating(s):
    from collections import Counter
    char_count = Counter(s)
    for char in s:
        if char_count[char] == 1:
            return char
    return None

print(first_non_repeating("abacddce")) 
print(first_non_repeating("aabbcc"))  
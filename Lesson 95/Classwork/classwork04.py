def has_unique_characters(s):
    return len(set(s)) == len(s)

print(has_unique_characters("abcd")) 
print(has_unique_characters("aabbcc")) 
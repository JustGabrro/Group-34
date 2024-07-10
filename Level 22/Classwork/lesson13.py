def uppercase_strings(strings):
    return [string.upper() for string in strings]


strings_list = ["hello", "world", "this", "is", "a", "test"]
uppercase_list = uppercase_strings(strings_list)
print(uppercase_list)
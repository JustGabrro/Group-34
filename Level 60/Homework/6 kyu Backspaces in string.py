def clean_string(s):
    result = []
    for char in s:
        if char == '#':
            if result:
                result.pop() 
        else:
            result.append(char) 
    return ''.join(result)
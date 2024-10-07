def camel_case(s):
    words = s.split()
    camel_case = ""
    for word in words:
        camel_case += word.capitalize()
    return camel_case
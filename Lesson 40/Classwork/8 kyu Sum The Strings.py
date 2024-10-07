def sum_str(a, b):
    if a == "" and b == "":
        return str(0)
    elif a == "" and b != "":
        return b
    elif a != "" and b == "":
        return a
    else:
        return str(int(a) + int(b))
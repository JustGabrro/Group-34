def count_area(*args):
    if len(args) == 1:
        radius = args[0]
        return 3.14 * radius ** 2
    elif len(args) == 2:
        length, width = args
        return length * width
    elif len(args) == 3:
        a, b, c = args
        s = (a + b + c) / 2
        return (s * (s - a) * (s - b) * (s - c)) ** 0.5

def filter_list(l):
    int_list = []
    for i in l:
        if type(i) == int:
            int_list.append(i)
    return int_list
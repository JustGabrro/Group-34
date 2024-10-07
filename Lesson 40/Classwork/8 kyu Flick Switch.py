def flick_switch(lst):
    list1 = []
    flick = True
    for i in lst:
        if i == "flick":
            flick = not flick
            list1.append(flick)
        else:
            list1.append(flick)
    return list1
def open_or_senior(data):
    ans = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            ans.append("Senior")
        else:
            ans.append("Open")
    return ans
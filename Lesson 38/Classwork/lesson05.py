def points(games):
    score=0
    for i in games:
        i= i.split(":")
        if i[0] > i[1]:
            score += 3
        elif i[0] == i[1]:
            score += 1
    return score
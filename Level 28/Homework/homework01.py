# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

def digitize(n):
    num = []
    for number in str(n):
        num = [int(number)] + num
    return num
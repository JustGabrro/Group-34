# https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python

def remove_exclamation_marks(s):
    text = ""
    for word in s:
        if word != "!":
            text += word
    return text
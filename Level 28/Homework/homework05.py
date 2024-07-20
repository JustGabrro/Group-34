# https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python

def count_sheep(n):
    final_result = ""
    for num in range(1, 1 + n):
        final_result += str(num) + " sheep..."
    return final_result
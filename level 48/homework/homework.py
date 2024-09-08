# 6kyu

# 1

# https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(text):
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    result = []
    for letter in text.lower():
        if letter in alphabet:
            result.append(str(alphabet.index(letter) + 1))
    return " ".join(result)
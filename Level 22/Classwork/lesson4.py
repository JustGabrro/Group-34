def separate_even_odd(numbers):
    evens = []
    odds = []
    for number in numbers:
        if number % 2 == 0:
            evens.append(number)
        else:
            odds.append(number)
    print("Even numbers:", evens)
    print("Odd numbers:", odds)

numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
separate_even_odd(numbers_list)
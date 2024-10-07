print("----- 1 -----")

def filter_odd(numbers_list):
    even_number_list = []
    for num in numbers_list:
        if num % 2 == 0:
            even_number_list.append(num)
        
    return even_number_list

print(filter_odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

# ფინქცია არის კოდი რომელსაც მხოლოდ მაშინ გამოაქვს შედეგი როდესაც გამოიძახებენ

# პარამეტრი არის იგივე ცვლადი რომელიც გამოიყენება ფუნქციაში

# არგუმენტი არის მნიშვნელობა რომელიც გადაეცემა ფუნქციას მისი გამოძახებისას

print("----- 2 -----")

def even_sum(numbers_list):
    even_numbers_list = []
    for num in numbers_list:
        if num % 2 == 0:
            even_numbers_list.append(num)

    return sum(even_numbers_list)

print(even_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

print("----- 3 -----")

def odd_index_sum(numbers_list):
    odd_numbers_index = []
    for num in range(len(numbers_list)):
        if num % 2 != 0:
            odd_numbers_index.append(numbers_list[num])
    
    return sum(odd_numbers_index)

print(odd_index_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
def odd_index_sum(numbers):
    total = 0
    for i in range(len(numbers)):
        if i % 2 != 0:
            total += numbers[i]
    return total

numbers = [1]
print(odd_index_sum(numbers))
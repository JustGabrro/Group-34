nested_lst = [[1, 2], [3, 4]]
i = 0
while i < len(nested_lst):
    j = 0
    while j < len(nested_lst[i]):
        print(nested_lst[i][j])
        j += 1
    i += 1

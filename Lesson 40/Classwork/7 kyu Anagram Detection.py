def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    lst1 = []
    lst2 = []
    if len(test) != len(original):
        return False
    for char in range(len(test)):
        lst1.append(test[char])
        lst2.append(original[char])
    lst1.sort()
    lst2.sort()
    return lst1 == lst2
        
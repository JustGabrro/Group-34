def find_short(s):
    words_list = s.split(" ")
    min_length = len(words_list[0])
    for word in words_list:
        if min_length > len(word):
            min_length = len(word)
    return min_length
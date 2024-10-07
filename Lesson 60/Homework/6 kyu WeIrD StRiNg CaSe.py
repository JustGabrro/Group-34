def to_weird_case(words):
    result = []
    for word in words.split():
        symbol = ""
        index = 0
        for char in word:
            if index % 2 == 0:
                symbol += char.upper()
            else:
                symbol += char.lower()
            index += 1
        result.append(symbol)
    return " ".join(result)
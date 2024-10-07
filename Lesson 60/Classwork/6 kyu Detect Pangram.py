def is_pangram(st):
    letters = set()
    for char in st.lower():
        if char.isalpha():
            letters.add(char)
    return len(letters) == 26
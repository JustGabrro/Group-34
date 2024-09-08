print("---------- 1 ----------")

join = ["gabrieli", "toko", "andria"]
print("=".join(join))   # output: gabrieli=toko=andria
# სიის ელემენტები დაკავშირდება (ამ შემთხვევაში) ტოლობის ნიშნით

replace_ex = "gabrieli, toko, andria"
x = replace_ex.replace("gabrieli", "saba")   # replace-ს გადაეცემა 2 არგუმენტი 1.რისი შეცვალ გვინდა და 2.რითი გვინდა რომ შევცვალოთ
print(x)   # output: saba, toko, andria
# x-ცვლადში string-ის ელემნტი gabrieli ჩანაცვლდება saba-თი replace-ის დახმარებით

print("---------- 2 ----------")

# 7kyu

# 1

# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python

def to_jaden_case(string):
    string = string.split()
    result = []
    for letter in string:
        result.append(letter.capitalize())
        
    return " ".join(result)

# 2

# https://www.codewars.com/kata/57f609022f4d534f05000024/train/python

def stray(arr):
    if arr[0] != arr[1]:
        if arr[0] == arr[2]:
            return arr[1]
        else:
            return arr[0]
    else:
        for num in arr:
            if num != arr[0]:
                return num

# 6kyu

# 3

# https://www.codewars.com/kata/59f08f89a5e129c543000069/train/python

def dup(arry):
    news = []
    for w in arry:
        temp = ""
        last_char = ""
        for char in w:
            if char != last_char:
                temp += char
                last_char = char
        news.append(temp)
    return news
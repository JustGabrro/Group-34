print("----- 1 -----")

name = input("enter your name:")
print(name.capitalize())

print("----- 2 -----")

name = input("enter your name:")
print(name.upper())

print("----- 3 -----")

# capitalize-სიტყვის პირველ სიმბოლოს გარდაქმნის დიდ ასოთი

# upper-წერს სიტყვას დიდი ასოებით

# მეთოდი არის ფუნქცია, მეთოდის გამოძახება შეგვიძლია მხოლოდ კონკრეტულ მონაცემთა ტიპზე

print("----- 4 -----")

sentence = "my name is Gabriel i live in tbilisi"

print(sentence.count("i"))

print("----- 5 -----")

# count-ითვლის არჩეულ მონაცემს სტრინგში

# lower-წერს სიტყვას პატარა ასოთი

# string-სიმბოლოების ერთობლიობა

print("----- 6 -----")

sentence = "my name is Gabriel i live in tbilisi"

print(sentence.find("i"))

print("----- 7 -----")

sentence = "my name is Gabriel i live in tbilisi"

print(sentence.index("a"))

print("----- 8 -----")

# find-თუ არჩეული მონაცემი არ არის სტრინგში ის არ გამოიტანს error-ს 

# index-თუ არჩეული მონაცემი არ არის სტრინგში ის გამოიტანს error-ს

print("----- 9 -----")

email = []

ans = int(input("how many emails you want to enter:"))

for i in range(ans):
    answer = input("enter email:")

    if answer.endwith("@gmail.com"):
        email.append(answer)
        print("email is correct!")
    else:
        print("email is incorrect!")

print("----- 10 -----")

# endwith-ამოწმებს მრთავდება თუ არა სტრინგი არჩეული მონაცემით

# startwith-ამოწმებს იწყება თუ არა სტრინგი არჩეული მონაცემით
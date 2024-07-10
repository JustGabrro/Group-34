user_num1 = int(input("Enter a number: "))
user_num2 = int(input("Enter a second number: "))

if user_num1 > user_num2:
    print("First number is better than second.")
elif user_num1 < user_num2:
    print("Second number is better than first.")
elif user_num1 == user_num2:
    print("First and second numbers is equal")
else:
    print("Error")

for i in range(user_num1,user_num2):
    print(i)

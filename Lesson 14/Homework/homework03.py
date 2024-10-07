#ვწერ 5 მაგალითს if - else-ზე

a = 77
b = 99
if b > a:
  print("b > a")
elif a <= b:
  print("a <= b")


a = 99
b = 77
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")


a = 99
b = 77
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")


# for ციკლის გამოყენებით ვთხოვ მომხმარებელს შემოიტანოს 2 რიცხვი და ვარჩევ რიმელია უფრო დიდი
num = int(input("please enter number: "))
num1 = int(input("please enter number: "))
if (num > num1) :
    print("num > num1")
if (num1 > num) :
    print("num1 > num") 
if (num == num1) :
    print("num = num1")


# for ციკლის გამოყენებით ვთხოვ მომხმარებელს შემოიტანოს რიცხვი თუ მის მიერ შემოტანილი რიცხვი ლუწია ვწერ "number is even" 
num = int(input("please enter number: "))
if (num % 2) == 0  :
    print("number is even")
else :
    print("number is odd")    




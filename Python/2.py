from tkinter import E


try:  
    number=int(input("Enter the number:")) 
    num=str(number)
    if str(number)==num[::-1]:
        print("Palindrome")
    else:
        print("not a palindrome")
except :
    print("Invalid input!!")
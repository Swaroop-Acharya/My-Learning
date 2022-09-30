try:
    num=int(input())
    number=list(str(num))
    sum=0
    for i in range(len(number)):
        sum=sum+int(number[i])**len(number)
    if sum==num:
        print("Amstrong number")
    else:
        print("Not a amstrong number")
except:
    print("Invalid input")
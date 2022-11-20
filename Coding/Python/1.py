# x=int(10)
# print(x)
# x2=float(10)
# print(x2)
# x=str(10)
# print(x)

# Many Values to Multiple Variables
# x,y=10,29
# print(x)
# print(y)

# One Value to Multiple Variables
# x=y=z="Orange"
# print(x)
# print(y)
# print(z)

# Unpack a Collection

# fruits=["Apple","Banana","Orange"]
# x,y,z=fruits
# print(z)

# x="Hello"
# y="Iam"
# z="Swaroop"
# print(x , y , z)


# x = "Python       "
# z = "awesome"
# print(x +z)




# + -> concatenation
# , -> outputing multiple Variables


# x="Python"
# y=7
# print(x,y)

# Global Variables

# x="Hello"
# def fuction():
#     print(x+" World")

# fuction()



# def func():
#     global x 
#     x="Hi"
#     print(x , "Swaroop")
# func()

# print(x)

# Strings are arrays
# x="Swaroop"
# print(x[1])
# for i in range(0,len(x)):
#     print(x[i])


# for x in "Swaroop":
#     print(x)


# Check string
# x="Hello iam Swaroop"
# print("o" in x)

# x="Hi iam swaroop"
# print("f" not in x)

# if "iam" in x:
#     print("word iam is present")


# string methods 
# x="Swaroop Acharya"
# y=19
# x="   SWaro    p   "
# print(x)
# print(x.strip())

# print(x.replace("p","f"))
# print(x.center(90))
# print(x.casefold())
# print(x.count("o"))


# String Formates
x="Swaroop Acharya"
y=19
w=60
z="Iam " + x + " {1} "+"and my weight is {0}"
print(z.format(y,w))
z="Iam " + x + " {} "+"and my weight is {}"
print(z.format(y,w))

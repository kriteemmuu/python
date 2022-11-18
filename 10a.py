1 Create a function with variable length of arguments.

def add(*num):
    z=num[0]+num[1]+num[2]
    print(z)
    add(4,6,8,9)

 #2. Create an inner function to calculate the addition in the following way
 #Create an outer function that will accept two parameters, a and b
# Create an inner function inside an outer function that will calculate the addition of a and b
# At last, an outer function will add 5 into addition and return it.

# def outer(a,b):
#     def cal(a,b):
#         return a+b
#     add=cal(a,b) + 5
#     return add
# outer(5,6)

# def func(a, b):
#     def cal(a,b):
#         return a+b
#     res = cal(a,b) + 5
#     return res
# func(4,4) 


#3. Assign a different name to function and call it through the new name
# Below is the function display_student(name, age).
# Assign a new name show_tudent(name, age) to it and call it using the new name.

# def display_student(name,age):
#     print(name,age)
    
# display_student("kryss",20)

# show_student=display_student
# # print(f"name:{name} age:{age}")
# show_student("kryss",20)


#4. Find the largest item from a given list.
# x=[1,2,3,4,5,6,7,8]


# def x(list):
#     max=list[0]
#     for a in list:
#         if a>max:
#             max=a
#     return max
# print(x([1,2,3,4,5,6,7,8]))


#5. What is the difference between 10 / 3 and 10 // 3?

# a=10
# b=a/3
# c=a//3
# print(b,c)

##10/3 always gives the value in float and 10//3 is floor division which always gives value in integer.


##6. What about two asterisks (**)?

#  (**) define keyword variable length arguments in which arguments is defined by the keywords in the form of key value pair.
  #eg.

# def add(**num):
#     x=num["a"]+num["b"]+num["c"]
#     return x
# print(add(a=2,c=3,b=8))


#7. What is the difference between local and global variables?
#ans:Local variable stores the value inside function whereas global variable stores the value in the module defined in the program or which are declared outside the function.
# local variable is limited only to the function where it is created whereas global variable are available to all the function which are written after it.
# eg.

# a=50                  
# def fun():
#     b=20
#     return a+b
# print(fun())
#  here, in this given example 'a' is global variable and 'b' is local variable.


#8. Write a function called fizz_buzz that takes a number.


# def fizz_buzz(num):
#     if num % 3 != 0 and num % 5 != 0:
#         return num

#     if num % 3 == 0 and num % 5 == 0:

#         return "FizzBuzz"
#     if num % 3 == 0:
#         return "Fizz"
#         return "Buzz"

# number = int(input("Enter a number: "))

# print(fizz_buzz(number))



#9. Write a function for checking the speed of drivers. 
# If speed is less than 70, it should print “Ok”.
# if the speed is 80, it should print: “Warning”.

# def speed_checking(speed):
#     if speed < 70:
#         return 'OK'
#     elif speed< 80:
#         return 'warning'
# speed = int(input("Enter the spped of car:"))
# print(speed_checking(speed))


##10. Write a program that prompts the user to input a positive integer.
# It should then print the multiplication table of that number. 

# def mul():
#     num=int(input("Enter the positive number:"))
#     for i in range(1,11):
#         print(num,"*",i,"=",num*i)
# mul()
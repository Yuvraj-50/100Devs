# question url : https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/python

# question instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;]
# Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

# solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

def problem(a):
    return "Error" if type(a) is str else (a * 50 )+  6;

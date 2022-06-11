# question url : https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/python

# question instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;;;;;


# There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

# Your task is to change the letters with diacritics:

# ą -> a,
# ć -> c,
# ę -> e,
# ł -> l,
# ń -> n,
# ó -> o,
# ś -> s,
# ź -> z,
# ż -> z
# and print out the string without the use of the Polish letters.

# For example:

# "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


# solution :::::::::::::::::::::::::::::::::::::::::::::::::::::::::;

def correct_polish_letters(st): 
    d = {
        'ą' : 'a',
        'ć' : 'c',
        'ę' : 'e',
        'ł' : 'l',
        'ń' : 'n',
        'ó' : 'o',
        'ś' : 's',
        'ź' : 'z',
        'ż' : 'z'
    }
    arr = [];
    for elem in st :
        if elem in d.keys():
            arr.append(d[elem]);
        else : 
            arr.append(elem)
    return "".join(arr);
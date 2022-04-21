// question url    :  ----   https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// question////////////////////////////////////////
//Write a function that checks if a given string (case insensitive) is a palindrome.

// solution //////////////////////////////////////////

function isPalindrome(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase()
    ? true
    : false;
}

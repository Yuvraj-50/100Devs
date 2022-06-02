// question url  : https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

// question instruction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

// solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;

function doubleEveryOther(a) {
  return a.map((elem, idx) => (idx % 2 !== 0 ? elem * 2 : elem));
}

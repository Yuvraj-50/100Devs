// question url : https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

// quesiton instruciton """"""""""""""""""""""""""""""""""""""""""""

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// solution """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

function twoHighest(arr) {
  const biggestFirst = arr.sort((a, b) => b - a);
  if (biggestFirst.length == 0) return [];
  else if (biggestFirst.length == 1) return biggestFirst;
  else {
    return [...new Set(biggestFirst)].slice(0, 2);
  }
}

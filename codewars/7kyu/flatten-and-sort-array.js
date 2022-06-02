// question url : https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

// question instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::

function flattenAndSort(array) {
  return array.reduce((acc, c) => acc.concat(...c), []).sort((a, b) => a - b);
}

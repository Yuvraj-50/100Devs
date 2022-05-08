// question url :::---- https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// quesiton instruction :::::::::::::::::::::::::::::::::::;;;

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  return array.length > 0
    ? array.reduce((acc, c) => acc + c, 0) / array.length
    : 0;
}

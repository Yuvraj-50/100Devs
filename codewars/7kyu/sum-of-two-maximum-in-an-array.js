// question url : https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

// question instruction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// solutioN :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function maxProduct(numbers, size) {
  const sorted = numbers.sort((a, b) => b - a);
  let sum = 1;

  for (let i = 0; i < size; i++) {
    sum *= sorted[i];
  }
  return sum;
}

// question url:: https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript

// question instruction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function withoutLast(arr) {
  const arrCopy = [...arr];
  arrCopy.pop();
  return arrCopy;
}

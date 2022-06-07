// question url :  https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript

// question instruction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// solution :::::::::::::::::::::::::::::::::::::::::::::::::::::::

var replaceDots = function (str) {
  const arr = str.split("");
  return arr.map((elem) => (elem === "." ? "-" : elem)).join("");
};

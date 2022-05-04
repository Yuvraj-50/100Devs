// question url : --- https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript;

// question instruction ''''''''''''''''''''''''''''''''''''''''''''''''''

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"

// solution ////////////////////////////////////////////////////////////////

function unusedDigits(...args) {
  const string = args.join("");
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  number.filter((elem) => !string.includes(elem)).join("");
}

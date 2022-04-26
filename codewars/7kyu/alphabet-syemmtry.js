// question url ///// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript;

// question instruction

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];
  let counter = 0;

  arr.forEach((words) => {
    const word = words.toLowerCase().split("");
    word.forEach((letter, index) => {
      if (alphabet.indexOf(letter) == index) counter++;
    });
    result.push(counter);
    counter = 0;
  });

  return result;
}

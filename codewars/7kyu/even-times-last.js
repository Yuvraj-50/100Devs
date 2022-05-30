// question url :: https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

// question Intruction ; ;;;;;;;;;;;;;;;;;;;;;;;;;;:::::::::::::::::::::::::::::::::::::::::;

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// // If the sequence is empty, you should return 0.

// solution :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;

function evenLast(numbers) {
  if (numbers.length < 1) return 0;
  return (
    numbers.filter((num, idx) => idx % 2 == 0).reduce((acc, c) => acc + c, 0) *
    numbers[numbers.length - 1]
  );
}

// question url :: https://www.codewars.com/kata/585c50e75d0930e6a7000336/train/javascript

// question instruction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

// Examples
// 20 and 27:

// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 27: 1, 3, 9, 27
// Greatest shared factor: 1
// Result: 20 and 27 are coprime
// 12 and 39:

// Factors of 12: 1, 2, 3, 4, 6, 12
// Factors of 39: 1, 3, 13, 39
// Greatest shared factor: 3
// Result: 12 and 39 are not coprimes

// solution : : : : ::::::::::::::::::::::::::::::::::::::::

function isCoprime(x, y) {
  const xFactors = [];
  const yFactors = [];

  for (let i = 0; i <= x; i++) {
    if (x % i == 0) xFactors.push(i);
  }

  for (let i = 0; i <= y; i++) {
    if (y % i == 0) yFactors.push(i);
  }

  const array1 = xFactors.length > yFactors.length ? xFactors : yFactors;
  const array2 = array1 == xFactors ? yFactors : xFactors;

  const common = array1.filter((elem) => array2.includes(elem));

  return Math.max(...common) == 1 ? true : false;
}

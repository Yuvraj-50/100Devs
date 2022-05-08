// question url ::-- https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

// question instruction ::::::::::::::::::;------------------------------------------

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function sumMul(n, m) {
  if (m > n) {
    const result = [];
    for (let i = n; i < m; i++) {
      if (i % n == 0) result.push(i);
    }
    return result.reduce((acc, c) => acc + c, 0);
  } else {
    return "INVALID";
  }
}

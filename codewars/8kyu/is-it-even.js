// question /////////////////////////////
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// p : numbers;
// R : true or false;
// E :
// p :

// solution////////////////////////////////////////
function testEvent(n) {
  return n % 2 === 0 ? true : false;
}

console.log(3, false);
console.log(2, true);
console.log(-11, false);
console.log(-99990, true);

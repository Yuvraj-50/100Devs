// question///////////////////////////////////////////////////
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// solution////////////////////////////////////////////////

// first try /////////////////////////////////////////////

function solution(str, ending) {
  const strReverse = str.split("").reverse();
  const endingReverse = ending.split("").reverse();

  const result = [];

  for (let i = 0; i < ending.length; i++) {
    if (strReverse[i] === endingReverse[i]) result.push(true);
    else result.push(false);
  }

  return result.every((elem) => elem == true);
}

// best solution///////////////////////////////////
function solution(str, ending) {
  return str.endsWith(ending);
}

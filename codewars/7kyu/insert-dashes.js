// question url ::---https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript

// instruction
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// solution///////////////////
function insertDash(num) {
  const numSplit = String(num).split("");
  for (let i = 0; i < numSplit.length - 1; i++) {
    if (numSplit[i] % 2 != 0 && numSplit[i + 1] % 2 != 0)
      numSplit[i] = numSplit[i] + "-";
  }
  return numSplit.join("");
}

// question///////////////////////////////////////
// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// solution //////////////////////////////////////////
function sameCase(a, b) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (
    !alphabet.includes(a.toLowerCase()) ||
    !alphabet.includes(b.toLowerCase())
  )
    return -1;

  function checkCase(letter) {
    if (letter === letter.toLowerCase()) return "lower";
    if (letter === letter.toUpperCase()) return "upper";
  }

  return checkCase(a) === checkCase(b) ? 1 : 0;
}

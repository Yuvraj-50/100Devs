// question url ::: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// question instruction ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// solution /////////////////////

function getCount(str) {
  let vowelCount = 0;
  const strArr = str.split("");
  const vowels = "aeiou";

  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

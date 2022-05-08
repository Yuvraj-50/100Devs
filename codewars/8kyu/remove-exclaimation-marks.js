// question url /:: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// questio instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// solution .......................................................................

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((elem) => elem != "!")
    .join("");
}

// question url :: https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript

// quesiton instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// solutoin ::::::::::::::::::::::::::::::::::::

Description: function remove(string) {
  return string.split("!").join("") + "!";
}

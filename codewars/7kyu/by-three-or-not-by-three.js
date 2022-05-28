// question url :: https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript
// quesiton instruciton ::::::::::::::::::::::::::::::::::::::::::::::::::::;;;

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

// solution ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;

function divisibleByThree(str) {
  return str
    .split("")
    .map((elem) => +elem)
    .reduce((acc, c) => acc + c, 0) %
    3 ===
    0
    ? true
    : false;
}

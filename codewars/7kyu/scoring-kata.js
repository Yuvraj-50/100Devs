// question url  :  https://www.codewars.com/kata/55d2aee99f30dbbf8b000001/train/javascriptq

// question insturction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
// Note: The input will always be valid (an array and three numbers)

// Examples
// #1:

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
// because:

// 5 correct answers: 5*2 = 10
// 1 omitted answer: 1*0 = 0
// 1 wrong answer: 1*1 = 1
// which is: 10 + 0 - 1 = 9

// #2:

// [0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
// because: 4*3 + 3*-1 - 3*2 = 3

// solution :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function scoreTest(arr, right, omit, wrong) {
  const correctAns = arr.filter((elem) => elem === 0).length;
  const wrongAns = arr.filter((elem) => elem === 2).length;
  const omitAns = arr.filter((elem) => elem === 1).length;
  return correctAns * right + omitAns * omit - wrongAns * wrong;
}

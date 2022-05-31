// question url :: https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript

// question instruction ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

// solution : : : : : : :::::::::::::::::::::::::::::::::::::::::::;;;

// solution : 1
function missingNo(nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i <= 100; i++) {
    if (sortedArr[i] !== i) return i;
  }
}

// solution :  2
function missingNo(nums) {
  for (let i = 0; i <= 100; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

// question///////////////////////////////////////////

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// solution///////////////////////////////////////////////////

// P :  array , number;
// R : boolean
// E :
// p :
function betterThanAverage(classPoints, yourPoints) {
  // add your score into the array;
  classPoints.push(yourPoints);
  // add the arrray and divide by total length of the array;
  const average =
    classPoints.reduce((acc, c) => acc + c, 0) / classPoints.length;
  // if your socre is greater than the average then return false else return true
  return average > yourPoints ? false : true;
}

// console.log(([1, 2, 3]  , 4) true);
// console.log(([2 , 3] , 5) true);
// console.log(([1, 3] , 2) false);

// question ////////////////////////////////////////

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// solution //////////////////////////////
function pillars(num_pill, dist, width) {
  // if there is only one pillar so we cannot find distance
  if (num_pill < 2) return 0;

  //   now finding the distance between the first and last pillar without any pillar width in centimeter;
  //   1 meter = 100cm
  const distanceWithOutWidth = (num_pill - 1) * dist * 100;
  //   now calcualtion width of the pillars without the first and the last one
  const widthOfPillarsWithout1andlast = (num_pill - 2) * width;
  // now adding distance with out pillars and widht of the pillars this will give the result

  return distanceWithOutWidth + widthOfPillarsWithout1andlast;
}

// solution in one go

function pillars(num_pill, dist, widht) {
  if (num_pill < 2) return 0;
  return (num_pill - 1) * dist * 100 + (num_pill - 2) * widht;
}

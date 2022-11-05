// question url :: https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// question instruction :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// solution ::::::::::::::::::::::::::::::::::::::::::;

function bmi(weight, height) {
  const bmi = Math.round(weight / height ** 2);

  if (bmi <= 18.5) return "Underweight";
  else if (bmi > 18.5 && bmi <= 25.0) return "Normal";
  else if (bmi > 25 && bmi <= 30.0) return "Overweight";
  else return "Obese";
}

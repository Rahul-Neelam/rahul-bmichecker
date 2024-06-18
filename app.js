function calculateBMI() {
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value / 100; // Convert cm to m
  const weight = document.getElementById('weight').value;

  if (height === 0 || weight === 0) {
    document.getElementById('result').textContent = 'Please enter valid height and weight.';
    return;
  }

  const bmi = weight / (height * height);
  let classification;

  if (bmi < 18.5) {
    classification = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    classification = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    classification = 'Overweight';
  } else {
    classification = 'Obese';
  }

  document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${classification})`;
}
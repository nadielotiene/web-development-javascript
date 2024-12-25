function bmiCalculator(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}

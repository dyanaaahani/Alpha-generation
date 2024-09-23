function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("bmiResult").innerText = "Please enter valid numbers for weight and height.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category, description;

    // Determine the BMI category and description
    if (bmi < 18.5) {
        category = "Underweight";
        description = "This indicates that you may be undernourished or underweight for your height, which could lead to health risks.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        description = "This is considered a healthy weight range for your height.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        description = "This suggests that you may be carrying excess weight, which could lead to health complications.";
    } else {
        category = "Obesity";
        description = "Obesity increases the risk of serious health issues, such as heart disease, diabetes, and high blood pressure.";
    }

    // Display the result and the description
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi}. You are in the ${category} category.`;
    document.getElementById("bmiDescription").innerText = description;
}

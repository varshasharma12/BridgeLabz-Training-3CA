// Q10: Departmental Employee Evaluator

// Step 1: Create a nested array of departments and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Step 2: Loop through each department
console.log("===== Departmental Employee Evaluation =====");

for (let department of departments) {
    // Extract department name and performance score
    let departmentName = department[0];
    let score = department[1];
    let performance;

    // Step 3: Evaluate performance using nested if-else conditions
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    // Step 4: Display the evaluation
    console.log(
        `Department: ${departmentName} | Score: ${score} | Performance: ${performance}`
    );
}

console.log("============================================");

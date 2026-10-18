// Declare the current salary and annual increment rate
let currentSalary = 50000;
let incrementRate = 10;

// Create an array to store yearly salary details
let salaryProjection = [];

// Calculate salary projection for the next 5 years
for (let year = 1; year <= 5; year++) {
    // Apply the annual increment
    currentSalary += currentSalary * incrementRate / 100;

    // Round the salary to the nearest whole number
    currentSalary = Math.round(currentSalary);

    // Store the year and salary in the array
    salaryProjection.push({
        Year: year,
        Salary: currentSalary
    });
}

// Display the yearly salary projection in a table
console.table(salaryProjection);

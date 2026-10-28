
"use strict";

// Q2 – Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    employees.forEach(function (employee) {

        // Check for missing properties
        if (
            !employee ||
            typeof employee.name !== "string" ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee property");
        }

        // Convert salary and years into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate converted values
        if (
            employee.salary.trim() === "" ||
            employee.years.trim() === "" ||
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error(
                `Invalid salary or experience for ${employee.name}`
            );
        }

        // Calculate bonus using the ternary operator
        const bonus = years > 3
            ? salary * 0.1
            : salary * 0.05;

        // Display formatted employee details
        console.log(`Employee Name: ${employee.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log("---------------------------");
    });
} catch (error) {
    // Handle conversion or missing property errors
    console.log(`Error: ${error.message}`);
}

// Hoisting observation:
// const and let are not accessible before initialization.
// Function declarations are hoisted.

// Debug observation:
// Number.isFinite() detects invalid numeric conversions.
// "use strict" prevents accidental implicit global variables.
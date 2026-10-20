// Q1: Scope Conflict Resolver

// Declare a global variable
let bonus = 5000;

// Function to calculate the total salary
function calculateSalary() {
    // Declare local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    // Print the total salary
    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", salary);
}

// Call the function
calculateSalary();

// Demonstrate the global scope of bonus
console.log("Global Bonus:", bonus);

// Change the local isPermanent value to false
function calculateSalaryForTemporaryEmployee() {
    let salary = 40000;
    let isPermanent = false;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", salary);
}

// Call the function for a temporary employee
calculateSalaryForTemporaryEmployee();

// Check whether the global bonus has changed
console.log("Global Bonus After Function Calls:", bonus);

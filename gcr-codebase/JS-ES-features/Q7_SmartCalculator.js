
"use strict";

// Q7 – Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error for invalid operations
class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

// Custom error for division by zero
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero.");
        this.name = "DivisionByZeroError";
    }
}

// Custom error for square root of a negative number
class NegativeRootError extends Error {
    constructor() {
        super("Cannot calculate the square root of a negative number.");
        this.name = "NegativeRootError";
    }
}

// Function to perform calculations
function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new DivisionByZeroError();
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new NegativeRootError();
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(operation);
    }
}

// Process all operations
console.log("===== SMART CALCULATOR SUMMARY =====");
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);
console.log("-----------------------------------");

operations.forEach(function (operation) {
    try {
        const result = calculate(operation, num1, num2);

        console.log(
            `${operation.toUpperCase()}: ${result}`
        );
    } catch (error) {
        console.log(
            `${operation.toUpperCase()}: ${error.name} - ${error.message}`
        );
    }
});

console.log("-----------------------------------");
console.log("Calculation completed.");

// Hoisting observation:
// Function declarations are hoisted.
// Class declarations are not usable before initialization.

// Debug observation:
// Set a breakpoint inside calculate().
// Watch operation, a, b, and result.
// Use F10 to follow each switch case.
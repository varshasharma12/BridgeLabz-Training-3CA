
"use strict";

// Q10 – Nested Hoisting and Closures

console.log("===== PART 1: ORIGINAL FUNCTION =====");

function outer() {
    console.log("Outer count before assignment:", count);

    var count = 5;

    console.log("Outer count after assignment:", count);

    function inner() {
        console.log("Inner count before assignment:", count);

        var count = 10;

        console.log("Inner count after assignment:", count);
    }

    inner();

    console.log("Outer count after inner():", count);
}

outer();


// ===== PART 2: INNER FUNCTION AS AN ARROW =====

console.log("\n===== PART 2: ARROW FUNCTION =====");

function outerArrow() {
    console.log("Outer count before assignment:", count);

    var count = 5;

    const innerArrow = () => {
        // Arrow function does not create its own `this`,
        // but its local var declaration still has its own scope.
        console.log("Arrow inner count before assignment:", count);

        var count = 10;

        console.log("Arrow inner count after assignment:", count);
    };

    innerArrow();

    console.log("Outer count after innerArrow():", count);
}

outerArrow();


// ===== PART 3: CLOSURE EXAMPLE =====

console.log("\n===== PART 3: CLOSURE =====");

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Counter:", count);
    };
}

const counter = createCounter();

counter();
counter();
counter();


// ===== HOISTING OBSERVATION =====

// Each function call creates its own execution context.
// The outer function has its own `count` variable.
// The inner function also has its own `count` because of var hoisting.
// The inner variable is initialized as undefined before its assignment.
// The inner variable shadows the outer variable.

// Arrow functions do not create their own `this` or `arguments`,
// but they still have their own local variables.

// A closure allows an inner function to access variables
// from its surrounding lexical scope.

// ===== DEBUG OBSERVATION =====

// Set a breakpoint at the first console.log inside outer().
// Add count to the Watch panel.
// Press F10 to observe undefined, then 5.
// Step into inner() to see its separate count variable.
// Inspect the Call Stack: inner() -> outer() -> main script.
// Step out to return to outer() and observe count is still 5.
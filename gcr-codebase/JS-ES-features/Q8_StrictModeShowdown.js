
"use strict";

// Q8 – Strict Mode Showdown

console.log("===== STRICT MODE SHOWDOWN =====");

// Correct ES6 version
function demo(a, b) {
    let total = 10;

    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Total:", total);

    // Do not use delete on a variable.
    // Local variables are removed when their scope ends.
}

demo(5, 10);

console.log("Program executed successfully.");

// Hoisting observation:
// Function declarations are hoisted.
// let variables remain in the TDZ until initialized.

// Debug observation:
// Set a breakpoint at let total = 10.
// Watch a, b, and total.
// Use F10 to observe variable values.
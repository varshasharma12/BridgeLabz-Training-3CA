
"use strict";

// Q4 – Debugging Mystery

function showMessage() {
    // Declare greeting using let to avoid an implicit global
    let greeting = "Welcome";

    // Print the message
    console.log(greeting);
}

showMessage();

// Hoisting observation:
// Function declarations are hoisted.
// The let variable cannot be accessed before initialization.

// Debug observation:
// Add a breakpoint inside showMessage().
// Watch the greeting variable and inspect the call stack.
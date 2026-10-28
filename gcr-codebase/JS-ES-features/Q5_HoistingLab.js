
"use strict";

// Q5 – Hoisting Lab: The Sequence Trap

console.log("===== PART 1: ORIGINAL CODE =====");

// Original code behavior:
// console.log(score); // undefined because var is hoisted
// announce();         // Function declaration is hoisted

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

// Execute after initialization
console.log(score);
announce();
startGame();


// ===== PART 2: FIXED CODE =====

console.log("\n===== PART 2: FIXED CODE =====");

// Declare variables before using them
let fixedScore = 50;
let gameStatus = "ready";

function showAnnouncement() {
    console.log("Game started successfully");
}

function showStatus() {
    console.log(`Status: ${gameStatus}`);
}

showAnnouncement();
showStatus();
console.log(`Score: ${fixedScore}`);


// ===== PART 3: ARROW FUNCTION VERSION =====

console.log("\n===== PART 3: ARROW FUNCTIONS =====");

// Arrow functions are stored in const variables.
// They must be initialized before being called.

const arrowScore = 50;
const arrowStatus = "ready";

const announceArrow = () => {
    console.log("Game started using arrow function");
};

const startGameArrow = () => {
    console.log(`Status: ${arrowStatus}`);
};

announceArrow();
startGameArrow();
console.log(`Score: ${arrowScore}`);


// ===== HOISTING OBSERVATIONS =====

// 1. var declarations are hoisted and initialized
//    with undefined before assignment.

// 2. Function declarations are hoisted with their
//    function bodies, so they can be called earlier.

// 3. let and const remain in the Temporal Dead Zone
//    (TDZ) until their declarations are initialized.

// 4. Arrow functions assigned to const or let cannot
//    be called before their variable is initialized.

// 5. "use strict" prevents accidental implicit globals.

// ===== DEBUG OBSERVATIONS =====

// Set a breakpoint on announceArrow().
// Add score, status, arrowScore, and arrowStatus
// to the Watch panel in VS Code.

// Inspect the Call Stack while stepping through
// the functions using F10 (Step Over).

"use strict";

// Q6 – Pyramid Pattern Generator

const prompt = require("node:readline-sync");

// User input: default limit = 5
// If readline-sync is not installed, press Enter is not supported;
// use the terminal input version below instead.

const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid height (default 5): ", function (input) {
    let rows = input.trim() === "" ? 5 : Number(input);

    if (!Number.isInteger(rows) || rows < 1) {
        console.log("Invalid input! Please enter a positive integer.");
        rl.close();
        return;
    }

    console.log("\n===== PYRAMID PATTERN =====");

    // Outer loop controls the number of rows
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        // Inner loop prints stars in each row
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }

    // ===== LET VS VAR =====
    console.log("\n===== LET VS VAR =====");

    // let creates block-scoped variables.
    for (let a = 1; a <= 3; a++) {
        console.log("let a =", a);
    }

    // var is function-scoped, not block-scoped.
    for (var b = 1; b <= 3; b++) {
        console.log("var b =", b);
    }

    console.log("After loop, var b =", b);

    // Uncommenting the next line causes ReferenceError
    // because 'x' is undeclared in strict mode.
    // x = 100;

    // ===== DEBUG OBSERVATIONS =====
    // Set a breakpoint at: for (let i = 1; i <= rows; i++)
    // Watch rows, i, j, and pattern.
    // Press F10 to track each loop iteration.
    // With var, the variable remains accessible outside
    // the loop in the same function; let stays block-scoped.

    rl.close();
});
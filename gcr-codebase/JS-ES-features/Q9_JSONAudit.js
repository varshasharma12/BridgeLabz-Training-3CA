
"use strict";

// Q9 – JSON Audit

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

// Process each JSON entry
for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        // Parse JSON string into a JavaScript object
        const record = JSON.parse(rawData[i]);

        // Check for missing required keys
        if (
            !Object.prototype.hasOwnProperty.call(record, "user") ||
            !Object.prototype.hasOwnProperty.call(record, "age")
        ) {
            throw new Error("Missing required key: user or age");
        }

        // Validate and convert age
        const age = Number(record.age);

        if (
            typeof record.age === "boolean" ||
            record.age === null ||
            (typeof record.age === "string" && record.age.trim() === "") ||
            !Number.isFinite(age) ||
            age < 0
        ) {
            throw new Error("Invalid age value");
        }

        // Store cleaned record with numeric age
        const cleanedRecord = {
            ...record,
            age: age
        };

        clean.push(cleanedRecord);

        // Bonus: identify users under 18
        if (age < 18) {
            under18.push(cleanedRecord);
        }

        console.log(`Line ${lineNumber}: Valid JSON`);

    } catch (error) {
        // Record the error with its line number
        const errorRecord = {
            line: lineNumber,
            message: error.message
        };

        errors.push(errorRecord);

        console.log(
            `Line ${lineNumber}: ERROR - ${error.message}`
        );
    }
}

// Print final audit report
console.log("\n===== JSON AUDIT REPORT =====");

console.log("Total entries:", rawData.length);
console.log("Valid entries:", clean.length);
console.log("Invalid entries:", errors.length);

console.log("\nClean Array:");
console.log(clean);

console.log("\nError Report:");
console.log(errors);

console.log("\nUsers Under 18:");
console.log(under18);

// Hoisting observation:
// Function declarations are hoisted.
// let and const remain in the TDZ before initialization.

// Debug observation:
// Set a breakpoint at JSON.parse(rawData[i]).
// Watch i, lineNumber, record, clean, and errors.
// Use F10 to follow normal and error control flow.
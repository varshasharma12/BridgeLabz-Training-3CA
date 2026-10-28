
"use strict";

// Q1: Dynamic Data Parser

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("===== DYNAMIC DATA PARSER REPORT =====\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert each value into Number, Boolean and String
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Skip invalid numeric values
    // Number.isNaN() checks whether conversion produced NaN.
    // Empty strings/spaces and null convert to 0, so handle them separately.
    const isInvalid =
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "string" && value.trim() === "NaN") ||
        (typeof value === "string" && !Number.isFinite(numberValue)) ||
        (value === null ? false : false);

    // "100px" is invalid because Number("100px") returns NaN.
    if (isInvalid || Number.isNaN(numberValue)) {
        invalidNumbers.push(value);

        console.log(`❌ Invalid Value: ${String(value)}`);
        console.log(`   Number: ${numberValue}`);
        console.log(`   Boolean: ${booleanValue}`);
        console.log(`   String: "${stringValue}"\n`);
    } else {
        validNumbers.push(numberValue);

        console.log(`✅ Valid Value: ${String(value)}`);
        console.log(`   Number: ${numberValue}`);
        console.log(`   Boolean: ${booleanValue}`);
        console.log(`   String: "${stringValue}"\n`);
    }
}

// Print final arrays
console.log("===== FINAL SUMMARY =====");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Total Values:", apiData.length);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);

// Debug observation:
// Number("25") = 25
// Number("true") = NaN
// Number(null) = 0
// Number(undefined) = NaN
// Boolean("false") = true because it is a non-empty string.

// Hoisting observation:
// const and let are not accessible before initialization
// because of the Temporal Dead Zone (TDZ).
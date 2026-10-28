
"use strict";

// Q3 – Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store valid and invalid transactions
const valid = [];
const invalid = [];

// Custom error class
class TransactionError extends Error {
    constructor(message, type, transaction) {
        super(message);
        this.name = "TransactionError";
        this.type = type;
        this.transaction = transaction;
    }
}

// Loop through every transaction
transactions.forEach(function (transaction) {
    try {
        // Check for null entries
        if (transaction === null) {
            throw new TransactionError(
                "Transaction is null",
                "NULL_ENTRY",
                transaction
            );
        }

        // Check for missing id or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new TransactionError(
                "Missing transaction id or amount",
                "MISSING_PROPERTY",
                transaction
            );
        }

        // Check for negative amount
        if (transaction.amount < 0) {
            throw new TransactionError(
                "Transaction amount cannot be negative",
                "NEGATIVE_AMOUNT",
                transaction
            );
        }

        // Transaction passed all validations
        valid.push(transaction);

        console.log(`Transaction ${transaction.id}: Valid`);

    } catch (error) {
        // Categorize failed transactions
        invalid.push({
            transaction: error.transaction ?? transaction,
            type: error.type ?? "UNKNOWN_ERROR",
            message: error.message
        });

        console.log(
            `Transaction failed: ${error.type ?? "UNKNOWN_ERROR"} - ${error.message}`
        );
    }
});

// Print final report
console.log("\n===== TRANSACTION REPORT =====");
console.log(`Total transactions: ${transactions.length}`);
console.log(`Successful transactions: ${valid.length}`);
console.log(`Failed transactions: ${invalid.length}`);

console.log("\nValid Transactions:");
console.log(valid);

console.log("\nInvalid Transactions:");
console.log(invalid);

// Hoisting observation:
// Function declarations are hoisted.
// let and const cannot be accessed before initialization.

// Debug observation:
// Set a breakpoint inside forEach to inspect transaction,
// valid, invalid, and error values.
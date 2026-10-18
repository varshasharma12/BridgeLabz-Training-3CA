// Store monthly expenses for five categories in an array
let expenses = [5000, 2000, 8000, 1500, 2500];

// Calculate the total monthly expenses
let totalExpenses = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

// Calculate the average monthly expense
let averageExpenses = totalExpenses / expenses.length;

// Add 10% tax to the total expenses
let tax = totalExpenses * 0.10;
let finalAmount = totalExpenses;
finalAmount += tax;

// Display the expense summary with two decimal places
console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Food: ₹${expenses[0].toFixed(2)}`);
console.log(`Travel: ₹${expenses[1].toFixed(2)}`);
console.log(`Rent: ₹${expenses[2].toFixed(2)}`);
console.log(`Bills: ₹${expenses[3].toFixed(2)}`);
console.log(`Leisure: ₹${expenses[4].toFixed(2)}`);

console.log("-----------------------");
console.log(`Total Expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpenses.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);

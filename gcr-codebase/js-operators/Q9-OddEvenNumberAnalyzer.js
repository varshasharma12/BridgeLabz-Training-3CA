// Q9: Odd-Even Number Analyzer

// Step 1: Create an empty array to store numbers from 1 to 30
let numbers = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Step 2: Create a new array to store classification results
let results = [];

// Step 3: Classify each number using a loop and conditionals
for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number}: FizzBuzz`);
    } else if (number % 2 === 0) {
        results.push(`${number}: Even`);
    } else {
        results.push(`${number}: Odd`);
    }
}

// Step 4: Display the results
console.log("===== Odd-Even Number Analyzer =====");

for (let result of results) {
    console.log(result);
}

console.log("====================================");

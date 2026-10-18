// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];

// Initialize the correct answer
let correctAnswer;

// Calculate the answer using a switch statement
switch (operator) {
    case "+":
        correctAnswer = num1 + num2;
        break;

    case "-":
        correctAnswer = num1 - num2;
        break;

    case "*":
        correctAnswer = num1 * num2;
        break;

    case "/":
        correctAnswer = num1 / num2;
        break;
}

// Display the question and correct answer
console.log("Random Math Quiz");
console.log("----------------");
console.log(`Question: ${num1} ${operator} ${num2}`);

// Round division answers to two decimal places
if (operator === "/") {
    console.log(`Correct Answer: ${correctAnswer.toFixed(2)}`);
} else {
    console.log(`Correct Answer: ${correctAnswer}`);
}

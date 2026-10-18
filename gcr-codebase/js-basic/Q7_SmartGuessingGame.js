// Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Store a test guess (change this value to test)
let userGuess = 25;

// Check the user's guess
if (userGuess >= 1 && userGuess <= 50) {
    if (userGuess === secretNumber) {
        console.log("Correct guess!");
    } 
    else if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } 
    else if (userGuess > secretNumber) {
        console.log("Too high");
    } 
    else {
        console.log("Too low");
    }
} else {
    console.log("Please enter a number between 1 and 50.");
}

// Display the secret number for testing
console.log(`Secret number: ${secretNumber}`);

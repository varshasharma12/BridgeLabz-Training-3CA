
// Function that accepts an array and a callback function
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Function to double each number
function double(number) {
    return number * 2;
}

// Function to square each number
function square(number) {
    return number * number;
}

// Original array
let numbers = [1, 2, 3, 4];

// Apply double operation
let doubledNumbers = applyOperation(numbers, double);
console.log("Doubled Numbers:", doubledNumbers);

// Apply square operation
let squaredNumbers = applyOperation(numbers, square);
console.log("Squared Numbers:", squaredNumbers);
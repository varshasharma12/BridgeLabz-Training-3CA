// Q6: Event-Based Counter Simulation

// Declare the counter variable
let count = 0;

// Function to increment the counter
function increment() {
    count++;
    console.log("Increment Clicked. Count:", count);
}

// Function to decrement the counter
function decrement() {
    count--;
    console.log("Decrement Clicked. Count:", count);
}

// Nested function to demonstrate function scope
function counterStatus() {
    // Nested function can access the outer function's scope
    function displayCount() {
        console.log("Current Counter Value:", count);
    }

    // Call the nested function
    displayCount();
}

// Simulate click events by calling functions manually
console.log("===== Counter Simulation =====");

increment();  // Count becomes 1
increment();  // Count becomes 2
increment();  // Count becomes 3
decrement();  // Count becomes 2
decrement();  // Count becomes 1

// Display the current count using a nested function
counterStatus();

// Display the final counter value
console.log("Final Count:", count);

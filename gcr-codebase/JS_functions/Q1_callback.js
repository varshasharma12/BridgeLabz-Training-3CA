
// Function to display the welcome message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function that accepts name and callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute the callback function
    callback();
}

// Calling the function
greetUser("Varsha", showEndMessage);
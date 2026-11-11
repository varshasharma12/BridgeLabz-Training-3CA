
// Q9: Debugging the Event Loop

// Predicted Output:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

// Macrotask: setTimeout callback
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask: Promise callback
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// 1. Synchronous code executes first.
// 2. Promise.then() creates a microtask.
// 3. setTimeout() creates a macrotask.
// 4. After synchronous code finishes, JavaScript
//    executes microtasks before macrotasks.
// Therefore, Promise callback executes before Timeout callback.

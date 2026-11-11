
// Q2: JavaScript Event Loop

console.log("Start");

// Macrotask
setTimeout(() => {
    console.log("setTimeout - Macrotask");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise - Microtask");
});

// Synchronous log
console.log("Synchronous Task");

// End
console.log("End");

/*
Explanation:

1. Synchronous code executes first.
2. Promise.then() is a Microtask.
3. setTimeout() is a Macrotask.
4. After synchronous code finishes, JavaScript
   executes all pending Microtasks first.
5. Then it executes Macrotasks.

Therefore, Microtasks execute before Macrotasks.
*/

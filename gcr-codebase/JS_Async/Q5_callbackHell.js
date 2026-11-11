
// Q5: Frontend Rush - Callback Hell

// -------------------------------
// Part 1: Using Nested Callbacks
// -------------------------------

function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("5. Celebration time!");
        callback();
    }, 1000);
}

console.log("Callback Hell Started");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Callback pipeline completed!");
                });
            });
        });
    });
});


// --------------------------------
// Part 2: Using Async/Await
// --------------------------------

// Function returning Promise
function executeStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

// Async function to execute all stages
async function runPipeline() {
    console.log("Async/Await Pipeline Started");

    await executeStage("1. Design completed");
    await executeStage("2. Build completed");
    await executeStage("3. Testing completed");
    await executeStage("4. Deployment completed");
    await executeStage("5. Celebration time!");

    console.log("Async/Await pipeline completed!");
}

runPipeline();

/*
Why Async/Await is better:

1. Code looks simple and readable.
2. Avoids deeply nested callbacks.
3. Executes asynchronous tasks step by step.
4. Makes error handling easier using try/catch.
*/

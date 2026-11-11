
// Q10: Async Delivery Pipeline

// Function to simulate an asynchronous delivery step
function deliveryStep(stepName, successMessage) {

    return new Promise((resolve, reject) => {

        // Generate random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            // Simulate random success or failure
            if (Math.random() > 0.2) {

                console.log(successMessage);
                resolve(stepName + " completed");

            } else {

                reject(stepName + " failed");

            }

        }, delay);

    });
}

// Async function to run the complete pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Step 1: Take Order
        await deliveryStep("takeOrder", "Step 1: Order taken");

        // Step 2: Prepare Food
        await deliveryStep("prepare", "Step 2: Food prepared");

        // Step 3: Pack Food
        await deliveryStep("pack", "Step 3: Package ready");

        // Step 4: Dispatch Order
        await deliveryStep("dispatch", "Step 4: Out for delivery");

        // Step 5: Deliver Order
        await deliveryStep("deliver", "Delivery completed!");

    } catch (error) {

        // Handle failure of any step
        console.log("Pipeline failed!");

        console.log("Error:", error);

    }

}

// Start the pipeline
runPipeline();

/*
ASYNC BEHAVIOR AND EVENT LOOP:

1. async:
   Declares an asynchronous function.

2. await:
   Pauses the execution of runPipeline()
   until the current Promise settles.

3. Promise:
   Represents an asynchronous operation.

4. setTimeout:
   Executes the callback after the specified delay.

5. Event Loop:
   While waiting for a Promise, JavaScript can
   execute other tasks.

6. resolve():
   Marks the current step as successful.

7. reject():
   Marks the current step as failed.

8. try/catch:
   Handles errors and stops the remaining
   pipeline steps if any step fails.

9. All steps execute sequentially because
   each step uses await.

10. The pipeline completes only when all
    five steps succeed.
*/

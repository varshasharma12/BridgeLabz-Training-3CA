
// Q3: Bug Tracker - Callback to Promise

// Convert callback function into Promise-based function
function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate random API success or failure
            let isApiSuccess = Math.random() > 0.5;

            if (isApiSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("API request failed!");
            }

        }, 1000);
    });
}

// Call getBugs() and handle the result
getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

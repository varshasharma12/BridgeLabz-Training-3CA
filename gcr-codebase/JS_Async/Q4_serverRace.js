
// Q4: DevOps Delay - Promise.all() and Promise.race()

// Server A takes 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A deployed successfully");
            } else {
                reject("Server A deployment failed");
            }
        }, 2000);
    });
}

// Server B takes 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B deployed successfully");
            } else {
                reject("Server B deployment failed");
            }
        }, 3000);
    });
}

// Promise.all() waits for both servers
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch((error) => {
        console.log("Deployment Error:", error);
    });

// Promise.race() returns the first settled result
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race Error:", error);
    });


// Q7: Lazy Loader - Promise.allSettled()

// Load Profile
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

// Load Posts
function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

// Load Messages
function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

// Calculate starting time
const startTime = Date.now();

// Handle all promises together
Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
])
.then((results) => {

    const modules = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {

        if (result.status === "fulfilled") {
            console.log(modules[index] + ": Success - " + result.value);
        } else {
            console.log(modules[index] + ": Failed - " + result.reason);
        }

    });

    // Calculate total time
    const endTime = Date.now();

    console.log("Total time taken:", (endTime - startTime) / 1000, "seconds");

});


// Q1: Asynchronous Coffee Maker

// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Water is boiled");
                resolve();
            } else {
                reject("Failed to boil water!");
            }
        }, 1500);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee is brewed");
                resolve();
            } else {
                reject("Failed to brew coffee!");
            }
        }, 1500);
    });
}

// Step 3: Pour coffee into cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into cup");
                resolve();
            } else {
                reject("Failed to pour coffee!");
            }
        }, 1500);
    });
}

// Promise chaining
boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });

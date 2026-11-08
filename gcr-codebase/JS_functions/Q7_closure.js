
// Function that accepts a multiplier
function makeMultiplier(multiplier) {

    // Inner function
    return function(number) {
        return number * multiplier;
    };
}

// Create a function to triple a number
const triple = makeMultiplier(3);

// Create a function to double a number
const double = makeMultiplier(2);

// Call the functions
console.log("Triple:", triple(5));
console.log("Double:", double(5));
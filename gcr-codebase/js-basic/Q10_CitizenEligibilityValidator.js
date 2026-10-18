// Declare input variables
let age = 19;
let isCitizen = true;

// Validate eligibility using nested if-else and logical operators
if (isCitizen) {
    if (age >= 18 && age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
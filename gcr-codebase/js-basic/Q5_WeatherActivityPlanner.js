// Declare variables for weather conditions
let temperature = 25;
let isRaining = false;
let windSpeed = 10;

// Decide the activity based on weather conditions
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} 
else if (temperature > 35) {
    console.log("Go swimming.");
} 
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} 
else {
    console.log("Perfect day for a walk.");
}

// Check combined weather conditions using logical operators
if (isRaining || (temperature < 15 && windSpeed > 20)) {
    console.log("Weather alert: Outdoor activities are not recommended.");
}

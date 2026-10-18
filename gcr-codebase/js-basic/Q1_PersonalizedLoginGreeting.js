// Declare a variable to store the user's name
let userName = "Varsha";

// Get the current hour using the Date object
let currentHour = new Date().getHours();

// Check the current time and display a personalized greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} 
else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} 
else {
    console.log(`Good Evening ${userName}!`);
}

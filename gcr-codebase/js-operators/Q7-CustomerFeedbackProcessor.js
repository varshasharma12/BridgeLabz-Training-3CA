// Q7: Customer Feedback Processor

// Step 1: Store the customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Step 2: Count the words in the feedback
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Step 3: Check whether feedback contains negative words
let lowerFeedback = feedback.toLowerCase();

let containsBad = lowerFeedback.includes("bad");
let containsPoor = lowerFeedback.includes("poor");

// Step 4: Analyze and display the feedback
console.log("===== Customer Feedback Report =====");
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

// Step 5: Display the result using conditional statements
if (containsBad || containsPoor) {
    console.log("Feedback Status: Needs Improvement");
} else {
    console.log("Feedback Status: Positive Feedback");
}

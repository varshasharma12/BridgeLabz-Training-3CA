// Store marks of five subjects in an array
let marks = [90, 85, 78, 88, 92];

// Calculate the total marks
let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

// Calculate average and overall percentage
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let hasFailed = marks.some(mark => mark < 35);

// Evaluate academic performance using logical operators
let result;

if (hasFailed || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}

// Display the result
console.log("Academic Performance Report");
console.log("---------------------------");
console.log(`Marks: ${marks}`);
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);

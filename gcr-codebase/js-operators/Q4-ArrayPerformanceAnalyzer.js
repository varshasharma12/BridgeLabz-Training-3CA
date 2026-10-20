// Q4: Array Performance Analyzer

// Step 1: Generate an array of 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Step 2: Use map() to display scores with student labels
let studentScores = scores.map(
    (score, index) => `Student ${index + 1}: ${score}`
);

// Step 3: Calculate the highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Step 4: Calculate the average using reduce()
let totalScore = scores.reduce(
    (total, score) => total + score,
    0
);
let averageScore = totalScore / scores.length;

// Step 5: Count students who passed using filter()
let passedStudents = scores.filter(score => score >= 50);
let passedCount = passedStudents.length;

// Step 6: Count students who failed
let failedCount = scores.filter(score => score < 50).length;

// Step 7: Display the formatted performance summary
let summary = `
===== Student Performance Analyzer =====

${studentScores.join("\n")}

Total Students: ${scores.length}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed (>= 50): ${passedCount}
Students Failed (< 50): ${failedCount}

========================================
`;

console.log(summary);

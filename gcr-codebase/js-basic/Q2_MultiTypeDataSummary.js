// Declare variables of different data types
let userName = "Varsha";                     // String
let userAge = 22;                            // Number
let isStudent = true;                        // Boolean
let subjects = ["JavaScript", "Java", "SQL"]; // Array
let userDetails = { city: "Meerut", country: "India" }; // Object
let middleName = null;                       // Null
let address;                                 // Undefined

// Create a report to store labels, values, and their types
let dataSummary = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "User Age",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "Is Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Subjects",
        value: subjects,
        type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        label: "User Details",
        value: userDetails,
        type: Array.isArray(userDetails) ? "array" : typeof userDetails
    },
    {
        label: "Middle Name",
        value: middleName,
        type: middleName === null ? "null" : typeof middleName
    },
    {
        label: "Address",
        value: address,
        type: typeof address
    }
];

// Print the formatted report in the console
console.table(dataSummary);

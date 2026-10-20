// Q5: Boolean Logic Access System

// Test Case 1: All security conditions are satisfied
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions using Boolean logic
let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

// Display the result
console.log("===== Test Case 1 =====");
console.log("Door Locked:", isDoorLocked);
console.log("Window Closed:", isWindowClosed);
console.log("Alarm On:", isAlarmOn);
console.log("Owner Inside:", isOwnerInside);
console.log("Security Status:", isSecure ? "Secure" : "Unsafe");

// Test Case 2: Alarm is off
isAlarmOn = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log("\n===== Test Case 2 =====");
console.log("Security Status:", isSecure ? "Secure" : "Unsafe");

// Test Case 3: Window is open
isAlarmOn = true;
isWindowClosed = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log("\n===== Test Case 3 =====");
console.log("Security Status:", isSecure ? "Secure" : "Unsafe");

// Demonstrate OR (||) and NOT (!) operators
console.log("\n===== Boolean Operators =====");
console.log("Alarm OR Door Locked:", isAlarmOn || isDoorLocked);
console.log("Alarm is OFF:", !isAlarmOn);

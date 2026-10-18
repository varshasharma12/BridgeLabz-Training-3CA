// Declare the total purchase amount
let purchaseAmount = 7500;

// Initialize discount percentage
let discountPercentage = 0;

// Apply the appropriate discount tier
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount amount
let discountAmount = purchaseAmount * discountPercentage / 100;

// Calculate final price after discount
let finalPrice = purchaseAmount - discountAmount;

// Round monetary values using Math.round()
let roundedTotal = Math.round(purchaseAmount);
let roundedDiscount = Math.round(discountAmount);
let roundedFinalPrice = Math.round(finalPrice);

// Display the shopping summary
console.log("Shopping Discount Summary");
console.log("-------------------------");
console.log(`Original Total: Rs. ${roundedTotal}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: Rs. ${roundedDiscount}`);
console.log(`Final Price After Discount: Rs. ${roundedFinalPrice}`);

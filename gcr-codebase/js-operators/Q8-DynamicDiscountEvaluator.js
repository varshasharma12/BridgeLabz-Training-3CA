// Q8: Dynamic Discount Evaluator

// Step 1: Create an array of cart objects
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Step 2: Calculate the original cart total using reduce()
const originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

// Variables to store the total discount
let categoryDiscountTotal = 0;

// Step 3: Apply category-wise discounts using a loop
console.log("===== Dynamic Discount Report =====");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; // 10% discount
    } else if (product.category === "fashion") {
        discountRate = 0.05; // 5% discount
    }

    // Calculate the discount for this product
    const discount = product.price * discountRate;
    categoryDiscountTotal += discount;

    // Display product details
    console.log(
        `${product.item}: Price = ₹${product.price}, Discount = ₹${discount.toFixed(2)}`
    );
}

// Step 4: Calculate the total after category discounts
let discountedTotal = originalTotal - categoryDiscountTotal;

// Step 5: Apply an extra 5% discount if the original cart value exceeds ₹50,000
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    discountedTotal -= extraDiscount;
}

// Step 6: Display the final summary
console.log("-----------------------------------");
console.log("Original Cart Total: ₹" + originalTotal.toFixed(2));
console.log("Category Discounts: ₹" + categoryDiscountTotal.toFixed(2));
console.log("Extra Discount: ₹" + extraDiscount.toFixed(2));
console.log("Final Payable Amount: ₹" + discountedTotal.toFixed(2));
console.log("===================================");

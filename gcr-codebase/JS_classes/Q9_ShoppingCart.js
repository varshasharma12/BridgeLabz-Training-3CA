
"use strict";

// Create Cart class
class Cart {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    // Add items to cart
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Calculate total price
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Validate and apply coupon
    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(10|20)$/;

        if (!couponRegex.test(coupon)) {
            return false;
        }

        this.discount = Number(coupon.match(/\d+$/)[0]);
        return true;
    }

    // Calculate final total after discount
    getFinalTotal() {
        return this.getTotal() * (1 - this.discount / 100);
    }
}

// Create cart object
const cart = new Cart();

// Add items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 1500, 1);

// Display initial total
document.getElementById("total").textContent =
    "Cart Total: ₹" + cart.getTotal().toFixed(2);

// Apply coupon button
document.getElementById("applyCoupon").addEventListener("click", function () {
    const coupon = document.getElementById("coupon").value.trim().toUpperCase();
    const message = document.getElementById("message");
    const total = document.getElementById("total");

    if (cart.applyCoupon(coupon)) {
        message.textContent = "Coupon applied successfully! Discount: " +
            cart.discount + "%";
        message.style.color = "green";

        total.textContent =
            "Final Total: ₹" + cart.getFinalTotal().toFixed(2);
    } else {
        message.textContent =
            "Invalid coupon! Use SAVE10, SAVE20, DISC10 or DISC20.";
        message.style.color = "red";

        total.textContent =
            "Cart Total: ₹" + cart.getTotal().toFixed(2);
    }
});

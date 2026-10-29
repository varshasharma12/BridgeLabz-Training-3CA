

"use strict";

// Create a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to the product price
    applyDiscount(discountPercentage) {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Mouse", 800, "Accessories"),
    new Product(4, "Smartphone", 25000, "Electronics"),
    new Product(5, "Keyboard", 1200, "Accessories")
];

// Apply a 10% discount to the first product
products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

// Filter products with price greater than ₹1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with price greater than ₹1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));

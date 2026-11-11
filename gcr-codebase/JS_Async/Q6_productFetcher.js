
// Q6: E-Commerce Dashboard - Product Card Fetcher

async function fetchProducts() {

    try {
        // Fetch products from Fake Store API
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const products = await response.json();

        const container = document.getElementById("product-container");

        // Clear loading message
        container.innerHTML = "";

        // Display products dynamically
        products.forEach((product) => {

            // Create product card
            const card = document.createElement("div");
            card.className = "product-card";

            // Create product image
            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;

            // Create product title
            const title = document.createElement("h4");
            title.textContent = product.title;

            // Create product price
            const price = document.createElement("p");
            price.textContent = "$" + product.price;

            // Add elements to card
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(price);

            // Add card to dashboard
            container.appendChild(card);

            // Log product details
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
        });

    } catch (error) {

        console.log("Failed to load products. Please try again.");

        document.getElementById("product-container").textContent =
            "Failed to load products. Please try again.";
    }
}

// Call function
fetchProducts();

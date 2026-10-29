
"use strict";

// Create user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Display user details
function displayUser() {
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);
}

// Update object when form is submitted
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Update object properties with form values
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    // Display updated object
    displayUser();
});

// Show initial object
displayUser();

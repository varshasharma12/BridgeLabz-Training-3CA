
"use strict";

const bookingForm = document.getElementById("bookingForm");

// Regular expressions
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate a field
function validateField(id, regex, errorMessage) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if (!regex.test(input.value.trim())) {
        input.className = "invalid";
        error.textContent = errorMessage;
        return false;
    }

    input.className = "valid";
    error.textContent = "";
    return true;
}

// Handle booking form submission
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValid = validateField(
        "name", nameRegex, "Name must contain alphabets only."
    );

    const emailValid = validateField(
        "email", emailRegex, "Enter a valid email address."
    );

    const seatsInput = document.getElementById("seats");
    const seatsError = document.getElementById("seatsError");
    const seats = Number(seatsInput.value);

    const seatsValid =
        seatsInput.value.trim() !== "" &&
        Number.isInteger(seats) &&
        seats >= 1 &&
        seats <= 10;

    if (!seatsValid) {
        seatsInput.className = "invalid";
        seatsError.textContent = "Seats must be a number from 1 to 10.";
    } else {
        seatsInput.className = "valid";
        seatsError.textContent = "";
    }

    if (nameValid && emailValid && seatsValid) {
        // Store booking information in an object
        const booking = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            seats: seats
        };

        // Display ticket details
        document.getElementById("ticketDetails").innerHTML = `
            <h3>Booking Successful!</h3>
            <p><strong>Name:</strong> ${booking.name}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Seats:</strong> ${booking.seats}</p>
        `;
    } else {
        document.getElementById("ticketDetails").innerHTML = "";
    }
});

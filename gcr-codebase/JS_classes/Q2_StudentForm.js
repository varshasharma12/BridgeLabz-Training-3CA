
"use strict";

const form = document.getElementById("studentForm");

// Regular expressions
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialRegex = /[^A-Za-z0-9]/;

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

// Validate password requirements
function validatePassword() {
    const password = document.getElementById("password");
    const error = document.getElementById("passwordError");

    const isValid =
        uppercaseRegex.test(password.value) &&
        numberRegex.test(password.value) &&
        specialRegex.test(password.value);

    if (!isValid) {
        password.className = "invalid";
        error.textContent =
            "Password must contain 1 uppercase, 1 number and 1 special character.";
        return false;
    }

    password.className = "valid";
    error.textContent = "";
    return true;
}

// Validate form on submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValid = validateField(
        "name", nameRegex, "Name must contain only alphabets."
    );

    const emailValid = validateField(
        "email", emailRegex, "Enter a valid email address."
    );

    const phoneValid = validateField(
        "phone", phoneRegex, "Phone must contain exactly 10 digits."
    );

    const passwordValid = validatePassword();

    const message = document.getElementById("message");

    if (nameValid && emailValid && phoneValid && passwordValid) {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please correct the errors.";
        message.style.color = "red";
    }
});

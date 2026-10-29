
"use strict";

const loginForm = document.getElementById("loginForm");

// Regular expressions
const usernameRegex = /^.{5,}$/;
const lengthRegex = /^.{8,}$/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /[0-9]/;
const specialRegex = /[^A-Za-z0-9]/;

// Validate username
function validateUsername() {
    const username = document.getElementById("username");
    const error = document.getElementById("usernameError");

    if (!usernameRegex.test(username.value)) {
        username.className = "invalid";
        error.textContent = "Username must contain at least 5 characters.";
        return false;
    }

    username.className = "valid";
    error.textContent = "";
    return true;
}

// Validate password
function validatePassword() {
    const password = document.getElementById("password");
    const error = document.getElementById("passwordError");
    const value = password.value;

    const errors = [];

    if (!lengthRegex.test(value)) {
        errors.push("at least 8 characters");
    }

    if (!uppercaseRegex.test(value)) {
        errors.push("one uppercase letter");
    }

    if (!lowercaseRegex.test(value)) {
        errors.push("one lowercase letter");
    }

    if (!numberRegex.test(value)) {
        errors.push("one number");
    }

    if (!specialRegex.test(value)) {
        errors.push("one special character");
    }

    if (errors.length > 0) {
        password.className = "invalid";
        error.textContent = "Password must contain " + errors.join(", ") + ".";
        return false;
    }

    password.className = "valid";
    error.textContent = "";
    return true;
}

// Handle form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const message = document.getElementById("message");

    if (isUsernameValid && isPasswordValid) {
        message.textContent = "Login validation successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please correct the errors above.";
        message.style.color = "red";
    }
});

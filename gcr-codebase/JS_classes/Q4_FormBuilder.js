
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    // Create form dynamically using innerHTML
    createForm() {
        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach((field, index) => {
            formHTML += `
                <label for="field${index}">${field.label}</label><br>
                <input type="${field.type}" id="field${index}"
                       name="${field.name}" required><br><br>
            `;
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += '</form>';

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("dynamicForm").addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                const formData = this.getFormData();
                document.getElementById("result").innerHTML =
                    `<h3>Form Data</h3><pre>${JSON.stringify(formData, null, 2)}</pre>`;
            }
        );
    }

    // Return entered values as an object
    getFormData() {
        const data = {};

        this.fields.forEach((field, index) => {
            data[field.name] =
                document.getElementById(`field${index}`).value;
        });

        return data;
    }
}

// Define form fields
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

// Create and display the form
const builder = new FormBuilder(fields);
builder.createForm();

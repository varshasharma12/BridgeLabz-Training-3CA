
"use strict";

// Create Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus percentage to monthly salary
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Amit", "IT", 50000),
    new Employee(2, "Priya", "HR", 40000),
    new Employee(3, "Rahul", "Finance", 45000),
    new Employee(4, "Neha", "Marketing", 35000),
    new Employee(5, "Rohit", "IT", 60000)
];

// Apply a 10% bonus to each employee
employees.forEach(employee => employee.applyBonus(10));

// Calculate and display annual salary for each employee
console.log("Employee Annual Salaries:");

employees.forEach(employee => {
    console.log(
        `ID: ${employee.id}, Name: ${employee.name}, ` +
        `Department: ${employee.department}, ` +
        `Annual Salary: ₹${employee.getAnnualSalary()}`
    );
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("\nTotal Annual Payout: ₹" + totalAnnualPayout);


// Parent constructor
function Person(name) {
    this.name = name;
}

// Person prototype method
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

// Inherit Person prototype
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

// Faculty prototype method
Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

// Child constructor of Faculty
function Professor(name, subject, department) {
    Faculty.call(this, name, subject);
    this.department = department;
}

// Inherit Faculty prototype
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

// Professor prototype method
Professor.prototype.showDepartment = function() {
    console.log("Department: " + this.department);
};

// Create Professor object
const professor1 = new Professor(
    "Varsha",
    "Computer Science",
    "CSE"
);

// Access all methods
professor1.showName();
professor1.showSubject();
professor1.showDepartment();
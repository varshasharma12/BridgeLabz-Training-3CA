
// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

// Child class
class Student extends Person {
    constructor(name, branch) {

        // Calling parent constructor
        super(name);

        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

// Creating student object
const student1 = new Student("Varsha", "Computer Science");

// Calling methods
student1.showName();
student1.showBranch();

// Checking inheritance
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
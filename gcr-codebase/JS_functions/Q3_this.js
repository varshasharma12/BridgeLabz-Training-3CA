
// Create user object
const user = {
    name: "Varsha",

    // Normal function
    showName: function() {
        console.log(this.name);
    }
};

// Call the method
user.showName();
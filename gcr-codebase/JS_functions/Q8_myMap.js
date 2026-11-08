
// Adding custom myMap() method to Array prototype
Array.prototype.myMap = function(callback) {

    const result = [];

    // Loop through each array element
    for (let i = 0; i < this.length; i++) {

        // Apply callback to each element
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Original array
const numbers = [1, 2, 3];

// Using custom myMap()
const doubledNumbers = numbers.myMap(num => num * 2);

console.log(doubledNumbers);
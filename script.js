// Define some variables
let x = 5;
const y = 10;

// Define a function
function add(a, b) {
    return a + b;
}

// Use a loop to print out the numbers 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Use an if statement to check if x is greater than y
if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

// Define a class for a Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create a new Person object and call the sayHello method
const jo = new Person("jo", 0);
jo.sayHello();

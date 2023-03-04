// Define some variables
let exampleX: number = 5;
const exampleY: number = 10;

// Define a function
function addExample(a: number, b: number): number {
    return a + b;
}

// Use a loop to print out the numbers 1-10
for (let i: number = 1; i <= 10; i++) {
    console.log(i);
}

// Use an if statement to check if x is greater than y
if (exampleX > exampleY) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

// Define a class for a Person
class aPerson {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create a new Person object and call the sayHello method
const Ali: aPerson = new aPerson("Ali", 0);
Ali.sayHello();

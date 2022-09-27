// A JavaScript function is a block of code designed to perform a particular task.

// Function without parameters and return value
function greet() {
    console.log("Hello World!");
}
greet();

// Function with parameters but without return value
function printName(name) {
    console.log(`Hello, my name is ${name}`);
}
printName("John");

// function with parameters and return value 
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

// Function with default parameters
function printName(name = "John") {
    console.log(`Hello, my name is ${name}`);
}
printName(); // Hello, my name is John
printName("Mary"); // Hello, my name is Mary

// Function with rest parameters
function printNames(...names) {
    console.log(names);
}
printNames("John", "Mary", "Peter"); // ["John", "Mary", "Peter"]
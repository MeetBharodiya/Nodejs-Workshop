// This is an anonymous function
const greet = function () {
    console.log('Hello');
}
greet();

const greetName = function (name) {
    console.log(`Hello ${name}`);
}
greetName('John');

const add = function (a, b) {
    return a + b;
}
console.log(add(1, 2));
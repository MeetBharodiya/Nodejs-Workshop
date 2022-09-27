// A variable declared with var can be reassigned with another value

var a = 10;
var a = 20; // Can be reassigned
console.log(a); // 20

/*
When we declared a variable with var outside of a function, 
the variables will be a globally - scoped variable.
*/

if (true) {
    var b = 10;
    console.log(b);
}

console.log(b);
// A variable qualified with let will be block scoped

let a = 10;
// let a = 20; // SyntaxError: Identifier 'a' has already been declared

console.log(a);

/* 
A variable declared with let will never be globally-scoped.

Unlike var it will throw a ReferenceError 
if you try to access to a variable declared in a inner block:
*/

// let b = 10;

if (true) {
    let b = 10;
    console.log(b);
}

console.log(b);
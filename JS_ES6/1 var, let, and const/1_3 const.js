/*
A variable declared with const has 
very similar properties than let.
The only difference is about 
reassignment an initialization.
*/

const a = 10;

// const a = 20; // SyntaxError: Identifier 'a' has already been declared

// a = 20; // TypeError: Assignment to constant variable.

if (true) {
    const b = 20;
    console.log(a);
}

console.log(a);
// console.log(b); // ReferenceError: b is not defined, because b is block-scoped.

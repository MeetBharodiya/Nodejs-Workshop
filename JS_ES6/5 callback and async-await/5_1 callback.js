/*
A callback function is a function passed into another function
as an argument, which is then invoked inside the outer function
to complete some kind of routine or action. 
*/

// Callback function
function greeting(name) {
    console.log(`Hello ${name}!`);
}

function processUserInput(callback) {
    var name = 'John Doe';
    callback(name); // Invoking the callback function
}

processUserInput(greeting); // Passing 'greeting' as a callback function
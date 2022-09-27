// When you need to copy an array
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
console.log(arr2); // [1, 2, 3]

// When you need to add an item to an array
var arr = [1, 2, 3];
var arr2 = [0, ...arr, 4]; // [0, 1, 2, 3, 4]
console.log(arr2);

// When you need to merge two arrays
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log(arr3);

// When you need to pass an array as arguments
function sum(a, b, c) {
    return a + b + c;
}
var arr = [1, 2, 3];
console.log(sum(...arr)); // 6

// When you need to get the rest of the items
var arr = [1, 2, 3, 4];
var [a, b, ...arr2] = arr;
console.log(a, b, arr2); // 1 2 [3, 4]

// When you need to copy an object
var obj = { a: 1, b: 2, c: 3 };
var obj2 = { ...obj };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// When you need to add a new property to an object
var obj = { a: 1, b: 2, c: 3 };
var obj2 = { d: 4, ...obj };
console.log(obj2); // { d: 4, a: 1, b: 2, c: 3 }

// When you need to merge two objects
var obj = { a: 1, b: 2, c: 3 };
var obj2 = { d: 4, e: 5, f: 6 };
var obj3 = { ...obj, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// When you need to get the rest of the properties
var obj = { a: 1, b: 2, c: 3, d: 4 };
var { a, b, ...obj2 } = obj;
console.log(a, b, obj2); // 1 2 { c: 3, d: 4 }

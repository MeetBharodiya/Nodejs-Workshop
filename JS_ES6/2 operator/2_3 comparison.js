/*
-----------------------------------------------
Operator	   Description
-----------------------------------------------
==	           equal to
===	           equal value and equal type
!=	           not equal
!==	           not equal value or not equal type
>	           greater than
<	           less than
>=	           greater than or equal to
<=	           less than or equal to
?:	           ternary operator
-----------------------------------------------
*/

// Equal to
var x = 5;
var y = 5;
var z = x == y;
console.log(z);

// Equal value and equal type
var x = 5;
var y = "5";
var z = x === y;
console.log(z);

// Not equal
var x = 5;
var y = 2;
var z = x != y;
console.log(z);

// Not equal value or not equal type
var x = 5;
var y = "5";
var z = x !== y;
console.log(z);

// Greater than
var x = 5;
var y = 2;
var z = x > y;
console.log(z);

// Less than
var x = 5;
var y = 2;
var z = x < y;
console.log(z);

// Greater than or equal to
var x = 5;
var y = 2;
var z = x >= y;
console.log(z);

// Less than or equal to
var x = 5;
var y = 2;
var z = x <= y;
console.log(z);

// Ternary operator
var x = 5;
var y = 2;
var z = (x > y) ? "x is greater than y" : "x is less than or equal to y";
console.log(z);

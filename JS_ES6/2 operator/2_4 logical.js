/*
----------------------------
Operator	   Description
----------------------------
&&	           logical and
||	           logical or
!	           logical not
----------------------------
*/

// Logical AND (&&)
var x = 5;
var y = 2;
var z = x > 3 && y < 10;
console.log(z);

// Logical OR (||)
var x = 5;
var y = 2;
var z = x > 3 || y < 10;
console.log(z);

// Logical NOT (!)
var x = 5;
var y = 2;
var z = !(x > 3 && y < 10);
console.log(z);
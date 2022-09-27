/*
-----------------------------------------------------------------------------------------
Operator	Description	            Example	    Same as	        Result      Decimal
-----------------------------------------------------------------------------------------
&	        AND	                    5 & 1       0101 & 0001	    0001	    1
|	        OR	                    5 | 1       0101 | 0001	    0101	    5
~	        NOT	                    ~ 5	        ~0101	        1010        10
^	        XOR	                    5 ^ 1       0101 ^ 0001	    0100	    4
<<	        left shift	            5 << 1	    0101 << 1	    1010	    10
>>	        right shift	            5 >> 1	    0101 >> 1	    0010	    2
>>>	        unsigned right shift	5 >>> 1	    0101 >>> 1	    0010	    2
-----------------------------------------------------------------------------------------
*/

// Bitwise AND (&)
var x = 5; // 0101
var y = 1; // 0001
var z = x & y;
console.log(z);

// Bitwise OR (|)
var x = 5; // 0101
var y = 1; // 0001
var z = x | y;
console.log(z);

// Bitwise NOT (~)
var x = 5; // 0101
var z = ~x;
console.log(z);

// Bitwise XOR (^)
var x = 5; // 0101
var y = 1; // 0001
var z = x ^ y;
console.log(z);

// Bitwise Left Shift (<<)
var x = 5; // 0101
var z = x << 1;
console.log(z);

// Bitwise Right Shift (>>)
var x = 5; // 0101
var z = x >> 1;
console.log(z);

// Bitwise Unsigned Right Shift (>>>)
var x = 5; // 0101
var z = x >>> 1;
console.log(z);
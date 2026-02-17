// ==  Abstract Equality ---- Type Coercion
// === Strict Equality 

5 == '5' // true (convert number to string)
5 === '5' // false (number compear with string)

0 == false // true
0 === false // false

null == undefined // true
null === undefined // false

NaN == NaN // false
NaN === NaN // false

[1, 2] == '1,2' // true

'1' == true // true (true -> 1, '1' -> 1)
'1' === true // false

0 == false // true
0 === false // false

' ' == 0  // true

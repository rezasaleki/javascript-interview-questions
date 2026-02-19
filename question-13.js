// Hoisting 

// Priority //

// 1. function declarations
// 2. var declarations
// 3. running code

console.log(myVar);
var myVar = 5;

console.log(myFunc());
function myFunc() {
    return 'hi';
}

//console.log(myLet); // Cannot access 'myLet' before initialization
let myLet = 12;

console.log('hosting 1:', typeof foo);

var foo = 'bar';

function foo() {
    return 'bar';
}

console.log('hosting 2:', typeof foo);

var x = 'global';

function test() {
    console.log(x);
    var x = 'local';
    console.log(x);
}

test();

console.log(global);

if (true) {
    var global = 'global';
}

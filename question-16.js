// Date Type

// 1. Primitive types ----> by value     ----> string, number, boolean, null, undefined, symbol, bigint
// 2. Reference types ----> by reference ----> object, array, function, Date, RegExp, Map, Set


let a = 10;
let b = a; // copy a to b
b = 20;


console.log(a); // 10
console.log(b); // 20


function changeValue(x) {
    x = 100;
}

let num = 4;
changeValue(num);
console.log(num); // 5


let obj1 = { name: 'reza' }
let obj2 = obj1;

obj2.name = 'ali';

console.log(obj1.name); // ali
console.log(obj2.name); // ali

function updateObject(obj) {
    obj.name = 'sara';
}

let person = { name: 'amir' };
updateObject(person);
console.log(person.name); // sara



let original = { value: 10 };

function tryToReplace(obj) {
    obj = { value: 20 };
}

tryToReplace(original);
console.log(original.value); // 10

function modify(obj) {
    obj.value = 20;
}

modify(original);
console.log(original.value);
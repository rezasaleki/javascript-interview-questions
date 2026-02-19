// Remove Array

let arr = [1, 2, 4 , 5];

arr = [];

arr.length = 0;

arr.splice(0, arr.length);

console.log('arr =>', arr);

let item = ['ali', 'reza', 'sara'];
let copy = item; // by reference

console.log(process.memoryUsage());

copy.push("hossien");

console.log('copy', copy);
console.log('item', item);

item = [];

console.log('item', item); // []
console.log('copy', copy); // [ 'ali', 'reza', 'sara', 'hossien' ]
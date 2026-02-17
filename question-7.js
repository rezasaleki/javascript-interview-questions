let a;

console.log(a) // undefined

let b = null;
console.log(b); // null

console.log(typeof undefined);
console.log(typeof null);

const obj = { name: 'ali' };
console.log(obj.age); // undefined

function test() {}
console.log(test());  // undefined

const arr = [1, 2, 3];
console.log(arr[6]);  // undefined
// forEach Vs Map

const numbers = [2, 4, 6, 7];
let total = 0;

const forEachResult = numbers.forEach(num => total = num * 2);
console.log('forEachResult', forEachResult); // undefined
console.log('numbers', numbers); // [ 2, 4, 6, 7 ]
console.log('total', total);

const mapResult = numbers.map(num => num + 2);
console.log('mapResult', mapResult); // [ 4, 6, 12, 14 ]
console.log('numbers:', numbers); // [ 2, 4, 6, 7 ]
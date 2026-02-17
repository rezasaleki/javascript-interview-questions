// Call & Apply & Bind

const person = {
    name: 'reza',
    age: 30
}

function introduce(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}, ${this.age}, ${punctuation}`);
}

introduce.call(person, 'hi', '!');
introduce.apply(person, ['hi', '!']);
const boundIntroduce = introduce.bind(person);
boundIntroduce('hi', 'bound !');

const arrayLink = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const result = Array.prototype.map.call(arrayLink, char => char.toUpperCase());
console.log(result);

const numbers = [5, 2, 8, 1, 9];

const max = Math.max.apply(null, numbers);
console.log(max);

const max2 = Math.max.call(null, ...numbers);
console.log(max2);

const arr1 = [1, 2];
const arr2 = [4, 3];
console.log(Array.prototype.push.apply(arr1, arr2));
console.log(arr1);

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(2));
console.log(triple(3));
// object literal 
const persion1 = {
    name: 'reza',
    age: 10,
    greet() {
        console.log('Hello');
    }
};

// constructor function 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello')
    }
}

const person2 = new Person('reza', 23);
console.log('person2 -> ', person2);

// Class
class Book {}

// Object Create
Object.create({});

// new object
const obj2 = new Object();
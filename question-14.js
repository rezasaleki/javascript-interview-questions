// Function Declaration
function greet(name) { // hoist ✅ 
    return `hi ${name}`;
}

console.log(greet('amir'));

// Function Expression
const greet1 = function(name) { // hoist 🔴
    return `hi ${name}`;
}

// Arrow Function
const greet2 = (name) => `hi ${name}`; // this inheritance outside
console.log(greet('ali'));

// IIFE (Immediately Invoked Function Expression)
(function(message){
    console.log(message);
})('hi everyone !');

// Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 1

// Async Function
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error('خطا:', error);
    }
}

fetchData();

// Higher-Order Function
function operate(operator, a, b) {
    return operator(a, b);
}
  
function add(x, y) {
    return x + y;
}
console.log(operate(add, 5, 3)); // 8

// Callback Function
function processUserInput(name, callback) {
    console.log('processing ...');
    callback(name);
}

processUserInput('reza', function(name) {
    console.log(`hi ${name}`);
});

// Recursive Function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`سلام، من ${this.name} هستم`);
    };
  }
  
  const ali = new Person('ali', 30);
  ali.greet();
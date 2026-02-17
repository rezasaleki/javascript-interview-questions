// Default Parameters

function greet(name = 'guest') {
    return `Hello ${name}`;
}

console.log(greet(null)); // null
console.log(greet(undefined)); // Hello guest
console.log(greet()); // Hello guest
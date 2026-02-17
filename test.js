function readFile(path, options, callback) {
    const error = null;
    const data = Buffer.from('hello world');
    callback(error, data)
}

console.log('callback start');
readFile('/a.txt', {}, (error, data) => {
    console.log('data', data);
});
console.log('callback end');

function calculate(a = 1, b = 1, callback) {
    return callback(a, b);
}

function multiplay(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}

function calculates(a, b, ...funs) {
    let answers = []; // Clousure
    funs.forEach(callback => answers.push(callback(a, b)));
    return answers;
}

console.log(calculate(2, 5, multiplay));
console.log(calculate(2, 5, sum));

console.log('start ...');
console.log(calculates(2, 5, multiplay, sum));
console.log('end');

async function readyFile(path) {
    return new Promise((resolve, reject) => {
        if (path) resolve('ok');
        reject('not ok');    
    });
}

console.log('start promise');
readyFile().then(data => console.log(data)).catch((err) => console.log(err));
console.log('end promise');

console.log('start'); // Sync

setTimeout(() => console.log('timeout'), 0); // Macrotask
setImmediate(() => console.log('immediate'));  // Macrotask

Promise.resolve().then(() => console.log('promise'));  // Microtasks

process.nextTick(() => console.log('nextTick')); // Microtasks

console.log('end'); // Sync
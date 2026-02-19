// Event Loop Architect

// 1.Call Stack --- > synchronous, LIFO
// 2.Web Api ---> setTimeout، fetch، DOM events
// 3.Task Queue (Callback Queue / Macrotask Queue) ---> FIFO , callback, setTimeout، setInterval، I/O، UI rendering
// 4.Microtask Queue ---> callback, Promise.then، async/await، MutationObserver، process.nextTick

console.log('1'); // CallStack -> 1

setTimeout(() => { // Macrotask -> 4 
    console.log('2');
}, 0);

Promise.resolve().then(() => console.log('3')); // MicroTask -> 3 

console.log('4'); // CallStack -> 2 

// 1 4 3 2

// Priority Event Loop

// 1. Call Stack ---> console.log, Mathematical calculations
// 2. Microtasks ---> Promise, await/async
// 3. Macrotask ---> setTimeout, setInterval
// 4. Browser    ---> ---
// 5. Return To Step 2

console.log('start script');

setTimeout(() =>
     console.log('setTimeout 1')
, 0);

Promise.resolve().then(() => {
    console.log('promise 1');
    setTimeout(() => { 
        console.log('setTimeout 2') }, 
    0);
}).then(() => {
    console.log('promise 2');
});

setTimeout(() => {
    console.log('setTimeout 3');
}, 0);

console.log('end script');

// output:

// script start
// script end
// promise 1
// promise 2
// setTimeout 1
// setTimeout 3
// setTimeout 2


Promise.resolve().then(() => {
    console.log('microtask 1');
    Promise.resolve().then(() => {
        console.log('microtask 2');
    });
}).then(() => {
    console.log('microtask 3');
});
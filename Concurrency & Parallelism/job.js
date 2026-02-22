// Concurrency

console.log('start job ... 🚀');

function doTask(name, duration) {
    setTimeout(() => {
        console.log(`Task ${name} finished after ${duration}ms ✅`);
    }, duration);
}

doTask("A", 2000);
doTask("B", 1000);
doTask("C", 1500);

console.log(`end of job (but things are still running) 🏁`);

// Parallelism

console.log('start');

const taskA = new Promise(resolve => {
    setTimeout(() => resolve('job A'), 2000);
});

const taskB = new Promise(resolve => {
    setTimeout(() => resolve('job B'), 1000);
});

Promise.all([taskA, taskB]).then(results => {
    console.log('all job finished', results);
});

console.log('wating ...');
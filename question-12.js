// Closure

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

function makeCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        } 
    }
}

const counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1


function multiplay(a) {
    return function(b) {
        return a * b;
    }
}

const multiplyBy2 = multiply(2);

console.log(multiplyBy2(10)); // 20
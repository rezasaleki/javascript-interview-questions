// var ---> Function-Scope (hosting)
// let ---> Block-scoped

for (var i = 0; i < 3; i++) {
    // schedule
    setTimeout(() => console.log(i), 0) // Function-scoped
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // Block-scoped (closure)
}

for (var i = 0; i < 3; i++) {
    (function(j) { // IIFE (Immediately Invoked Function Expression)
        setTimeout(() => console.log(j), 0);
    })(i) 
}


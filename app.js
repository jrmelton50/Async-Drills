// Async now and later
let a = getNumber();
function getNumber() {
    console.log("A message");
    return 3;
}

function timesFour(num) {
    num = num * 4; 
    console.log("Another message");
}

setTimeout(timesFour(a), 2000); // call timesFour with the global vairable I'm assuming?


// Callbacks
function getWords() {
    console.log("Hello");
    setTimeout(() => {
        console.log("World");
    }, 2000);
    console.log("Jessie");
    console.log("Melton");
}
getWords();

function done() {
    console.log("Done!");
}

function countdown(num, callback) { 
    for (let i=num; i>=1; i--) {
        console.log(i);
    } 
    callback();
}

countdown(3, done);

// Promises
let bool = true;
let orderingChickenSandwich = new Promise((resolve, reject) => {
    if (bool) {
        let sandwich = "chicken";
        let veggies = "lettuce";
        let obj = new Object([sandwich, veggies]);
        resolve(obj);
    }
    else {
        let err = new Error("ERROR: Something went wrong.");
        reject(err);
    }
});

function orderFood() {
    orderingChickenSandwich.then( (result) => {
        console.log(result);    // displaying twice
    }).catch( (err) => {
        console.log(err);
    });
}

orderFood();

// Chaining Promises
let p = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(1);
    }, 2000);
});

p.then( (result) => {
    return result * 2;
}).then( (result) => {
    return result * 4;
}).then( (result) => {
    return result * 6;
});
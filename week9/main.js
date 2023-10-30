
let getApi = new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10);
    console.log(number)
    if (number % 2 == 0) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

getApi.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

// version two with a minimum 2 second delay
let delay = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'hello');
});
//at this point in your code delay is `pending` - not resolved or rejected
delay.then(function (response) {
    console.log(response);
});

delay.catch(function (err) {
});
//this last line will run before ANY of the other console.logs
console.log('wait for it...');


let p1 = new Promise((resolve, reject) => {
    resolve('p1')
})

let p2 = new Promise((resolve, reject) => {
    resolve('p2')
})

let p3 = new Promise((resolve, reject) => {
    resolve('p3')
})

Promise.all([p1, p2, p3]).then((messages) => {
    console.log(messages)
}).catch((message) => {
    console.log(message)
})

let p4 = new Promise((resolve, reject) => {
    reject('p4');
});
let p5 = new Promise((resolve, reject) => {
    resolve('p5');
});
//race gives us the first result back... good or bad
Promise.race([p5, p4])
    .then((response) => {
        console.log('First one back was successful ' + response);
    })
    .catch((err) => {
        console.log('First one back was rejected ' + err);
    });

// ? any only runs the catch if all the promises failed
// Promise.any([p4, p5])
//     .then((response) => {
//         console.log('First successful result is back ' + response);
//     })
//     .catch((err) => {
//         console.log('no successful results ' + err);
//     });

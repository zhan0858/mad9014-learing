let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from p1')
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from p2')
    }, 1000);
})

Promise.race([p1, p2]).then((message) => {
    console.log(message)
})
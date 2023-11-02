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

function delay(len) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, len)
    })
}

let res = async () => {
    let response = await delay(2000);
    console.log(response)
}

// res();

delay(2000).then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})

function simulatFetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userData = {
                name: 'John Doe',
                age: 34,
                email: 'dearlulu@gmail.com',
                address: '123 Main St',
                phone: '555-555-5555',
                hobbies: ['golf', 'tennis', 'hiking']
            }
            // resolve(userData);
            reject('Failed')
        }, 2000)
    })
}

// ? why there are two then() in the following code
// let getUserData = async () => {
//     let response = await simulatFetchUserData().then((data) => {
//         console.log('data 111', data);
//         return data;
//     }).then((data) => {
//         console.log('data 222', data);
//         return data;
//     }).catch((err) => {
//         throw new Error('Sample Error');
//     });
//     console.log(response)
// }

// * next line is second way to declare async function
async function getUserData() {
    try {
        let response = await simulatFetchUserData().then((data) => {
            console.log('data 111', data);
            return data;
        }).then((data) => {
            console.log('data 222', data);
            return data;
        })
        console.log(response);
    } catch (err) {
        console.log(err)
    }

}

getUserData();
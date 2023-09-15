/**
 * 1. Write a function that accepts one argument and then returns the datatype/typeof that argument.
 *  Use the typeof operator and the return operator.
 */

const getTypeof = (data) => {
    return typeof data;
}

console.log(getTypeof('name')); // string
console.log(getTypeof(18)); // number
console.log(getTypeof([])); // object
console.log(getTypeof(undefined)); // undefined
console.log(getTypeof(true)); // true
console.log(getTypeof(Symbol('lulu'))); // symbol
console.log(getTypeof(getTypeof)); // function

/**
 * 2. Write a function that has three meaningfully named parameters. 
 * The first TWO parameters need to have default values.
 */

const personInformation = (age = 18, hobby = 'swimming', name) => {
    console.log(`${name} is ${age} years old, and her hobby is ${hobby}`);
}

personInformation(undefined, undefined, 'lulu'); // lulu is 18 years old, and her hobby is swimming

/**
 * 3. Rewrite the following code with a function expression.
 * function greeting(name) {
 * return `hello ${name}`;
 * }
 * let message = greeting(`Adesh`);
 */

let greeting = function (name){
    return `hello ${name}`;
}

let message = greeting(`Adesh`);
// console.log('message = ', message);

/**
 * 4. Rewrite the following code as arrow functions.
 * function f1() { console.log('This is function one'); }
 * function f2(fname, lname) { console.log('My name is ' + fname + ' ' + lname); }
 */

const f1 = () => {
    console.log('This is function one');
}

const f2 = (fname, lname) => {
    console.log('My name is ' + fname + ' ' + lname);
}
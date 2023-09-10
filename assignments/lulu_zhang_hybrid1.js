// Variables and Data Types

/**
 * 1. Declare five ** meaningfully named ** variables using`let`.
 * Then assign values to the variables as needed so that there is one of each type: 
 * `Boolean`, `String`, `Number`, `undefined`, and`null`.
 */
let isOpen = true;
let name = "Lulu Zhang";
let age = 28;
let value = undefined;
let sum = null;


/**
 * 2. Declare four ** meaningfully named ** variables with `const`.
 * Assign primitive values to two of them and any kind of Objects to the other two.
 */
const max = 100;
const season = "fall";

const today = new Date();
const information = {
    name: "lulu",
    number: "41118488",
    email: " zhan0858@algonquinlive.com",
};

/**
 * 3. Copy the following code snippet that declares two variables with values and one without. 
 * Add the code that would let you swap the values inside the two variables. 
 * After your code runs the value in first should be 42 and the value in second should be 7. 
 * You need to do this without writing the numbers 7 or 42 in your additional code and without using any functions. 
 * Use the other variable to temporarily hold one of the values while swapping. 
 * No functions need to be used to do this. 
 * You are just rearranging the values by assigning them between variables.
 */

let first = 7;
let second = 42;
let temp;

temp = second;
second = first;
first = temp;

// console.log('first = ' + first + ', second = ' + second + ', temp = ' + temp);

/**
 * 4. What are all 9 of the different possible values (datatypes) returned by the typeof operator?
 */

console.log('1. typeof isOpen = ', typeof isOpen); // boolean
console.log('2. typeof name = ', typeof name); // string
console.log('3. typeof age = ', typeof age); // number
console.log('4. typeof value = ', typeof value); // undefined
console.log('5. sum = null, typeof sum = ', typeof sum); // object

const hugeString = BigInt("7392749729479724");
console.log('6. typeof hugeString = ', typeof hugeString); // bigint

const empty = () => {}
console.log('7. typeof empty = ', typeof empty); // function

let symbol = Symbol('biggest');
console.log('8. typeof symbol = ', typeof symbol); // symbol

let grades = [90, 89, 85, 67];
console.log('9. grades = [90, 89, 85, 67], typeof grades = ', typeof grades); // object

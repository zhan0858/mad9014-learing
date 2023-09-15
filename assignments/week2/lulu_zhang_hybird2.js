/**
 * 1. Take the code below and add two if statements around the two console.log statements, 
 * so that the first console command only runs if the value of id is greater than 5 and 
 * the second console command only runs if the value of id is NOT equal to 17.
 */

let id = 15;

if (id > 5) {
    console.log('The value of id is greater than 5.');
}
if (id !== 17) {
    console.log('The value of id is NOT 17.');
}

/**
 * 2. Convert the following code into a single line with a ternary statement that
 *  assigns it's result to the variable `isTony.
 * let isTony;
 * let name = 'Bob';
 * if (name == 'Tony') {
 * isTony = true;
 * } else {
 * isTony = false;
 * }
 */
let name = 'Bob';
let isTony = name == 'Tony' ? true : false; // Convert the following code into two lines
// let isTony = 'Bob' == 'Tony' ? true : false;  // Convert the following code into one line


/**
 * 3. Write a multiline comment with the list of all the possible falsey values in JavaScript.
 */

console.log('Boolean(0) = ', Boolean(0));
console.log('Boolean(false) = ', Boolean(false))
console.log("Boolean('') = ", Boolean(''))
console.log('Boolean(null) = ', Boolean(null))
console.log('Boolean(undefined) = ', Boolean(undefined))
console.log('Boolean(NaN) = ', Boolean(NaN));

/**
 * Boolean(0) =  false
 * Boolean(false) =  false
 * Boolean('') =  false
 * Boolean(null) =  false
 * Boolean(undefined) =  false
 * Boolean(NaN) =  false
 */

/**
 * 4. Write a for loop that will console.log only the numbers from 25 to 5 in descending order. 
 * Eg: 25, 24, 23, 22, 21,...7, 6, 5. Do not use an Array to accomplish this. The output values should be only the value of your counter variable.
 */

for (let i = 25; i >= 5; i--) {
    console.log(i);
}
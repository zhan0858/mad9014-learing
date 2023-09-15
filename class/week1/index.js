const welcome = (firstName = 'Sam', lastName = 'Smith', Age = 25) => {
    return 'Hello, My name is ' + firstName + ' ' + lastName + ', and I am ' + Age + ' years old.';
}

console.log(welcome()); // empty
console.log(welcome('Lulu')); // just only firstName
console.log(welcome(undefined, 'Zhang')); // just only lastName
console.log(welcome(undefined, undefined, 80));
console.log(welcome(undefined, 'Zhang', 80));






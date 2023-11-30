// * why use use namespace?
//1. to avoid naming conflicts
//2. to avoid polluting the global namespace
//3. to make your code more readable
//4. to group related functionality into a single object

// Practical example:

const cow = {
    name: "Betsy",
    eat: function () {
        console.log("I'm eating grass");
    },
    drink: function () {
        console.log("I’m drinking water");
    },
};
const chicken = {
    name: "Nugget",
    eat: function () {
        console.log("I’m eating corn");
    },
    drink: function () {
        console.log("I’m drinking water");
    },
};
console.log(chicken.name) //log Nugget
console.log(cow.name) //log Betsy (edited) 
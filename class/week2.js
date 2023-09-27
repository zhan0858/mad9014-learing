
console.log('x 111=== ', x);
// console.log('y 111=== ', y);

var x = 5;
let y = 7;

console.log('x === ', x);
console.log('y === ', y);

// == values are equal
// >= great than equal
// <= less than equal

let temperature = 20;
if (temperature > 22) {
	console.log('It is a hot day');
} else if (temperature > 15) {
	console.log('It is a good day');
} else if (temperature >= -1) {
	console.log('It is a cool day');
} else {
	console.log('It is a cold day');
}

const isEligibleVote = (age) => {
	if (age >= 18) {
		console.log('You are ' + age + ' years old. You are eligible to vote');
	} else {
		console.log('You are ' + age + ' years old. You are not eligible to vote');
	}
}

isEligibleVote(12);
isEligibleVote(89);



const shouldToDo = (isSunny, isWeekend, hasHomework = false) => {
	if (isSunny && isWeekend) {
		console.log('It is a great day for outdooor activities');
	} else if (isSunny || isWeekend) {
		console.log('You can enjoy your day');
	} else if (hasHomework) {
		console.log('You should focus on your homework');
	}
}

shouldToDo(true, true);
shouldToDo(true, false, false);
shouldToDo(false, false, true);

Boolean('') // false
Boolean(0) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false


Boolean({}) // true
Boolean([]) // true

const isAllowed = (age) => {
	console.log(age >= 18 ? 'You are allowed' : 'You are not allowed')
}

isAllowed(16);
isAllowed(18);
isAllowed(80);



const myObj = {
	age: 18,
	name: "lulu",
	speak: function () {
		console.log("my name is " + this.name + ", age is " + this.age);
	},
	levitate: function () {
		console.log("I can fly");
	},
};

console.log(myObj.name);
console.log("outside " + myObj.speak()); // can not find the name and age in the myObj.speak() function
console.log(myObj);

// console.log(obj.levitate());
if ("name" in myObj) {
	console.log("myObj has name" + myObj.name);
} else {
	console.log("myObj does not have name");
}

delete myObj.levitate;
console.log(myObj);

var pets = {
	animals: [{ dogs: ["Modie", "Lassie", "Rex"] }, { cats: ["Garfield", "Felix", "Tom"] }],
};

let animals = pets.animals;
// console.log([...animals[0].dogs, ...animals[1].cats]);

for (let i = 0; i < animals.length; i++) {
	//   console.log(animals[i]);
	for (let key in animals[i]) {
		// console.log(animals[i][key]);
		for (let j = 0; j < animals[i][key].length; j++) {
			console.log("animal name is " + animals[i][key][j]);
		}
	}
}

// 1. Write a for loop that will console.log numbers from 101 to 41
// Then convert this loop to print only the even numbers from 101 to 41.

for (let i = 101; i >= 41; i--) {
	console.log(i);
}

for (let i = 101; i >= 41; i--) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// 2. Write a function that accepts a String as an argument and returns the first word from the String in upper case.
// Use the split method to divide the sentence into words.
// Eg: “This is a test” is sent to the
// function THIS would be returned.

function getUpperCase(sentence) {
	let firstWord = sentence.split(" ");
	return firstWord[0].toUpperCase();
}

console.log(getUpperCase("This is a test"));

/**
 * 3. Write a JavaScript function called formatPhoneNumber that takes a phone number as an argument and formats it as follows:
 * The phone number is provided as a string of digits (e.g., "1234567890").
 * If the phone number has fewer than 10 digits, pad the beginning with zeros to ensure it's 10 digits long before formatting.
 * Format the phone number as "(XXX) XXX-XXXX", where "X" represents each digit of the phone number.
 * Returned the formatted phone number and print it.
 */

function formatPhoneNumber(number) {
	if (number.length < 10) {
		number = number.padStart(10, "0");
	}

	return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, number.length)}`;
}

console.log(formatPhoneNumber("897654"));

/**
 * 4. Write a JavaScript function called findAndReplace that takes three arguments:
 * A string inputString.
 * A character targetChar to find within the inputString.
 * A character replacementChar to replace every occurrence of targetChar within the inputString.
 * The function should return a new string where all occurrences of targetChar in inputString are replaced with replacementChar.
 */
function findAndReplace(inputString, targetChar, replacementChar) {
	let replaced;
	if (inputString.includes(targetChar)) {
		replaced = inputString.replaceAll(targetChar, replacementChar);
	}
	return replaced;
}

console.log(findAndReplace("Hello lulu, Nice to see you lulu", "lulu", "nina"));

/***
 * 5. Write a function that takes two parameters, width and height,
 * and prints a rectangle made of asterisks (*) with the given dimensions.
 */
function printRectangle(width, height) {
	for (let i = 0; i < height; i++) {
		console.log("*".padStart(width, "*"));
	}
}

printRectangle(10, 3);

/**
 * 6. Write a function that takes an array of strings, searches for a specific word, and replaces it with another word.
 * Example: let words = ['apple', 'banana', 'cherry', 'apple'];
 * console.log(searchAndReplace(words, 'apple', 'orange'));
 * Output: ['orange', 'banana', 'cherry', 'orange’]
 */

function searchAndReplace(array, originalWord, replaceWord) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === originalWord) {
			array[i] = replaceWord;
		}
	}
	return array;
}

console.log(searchAndReplace(["apple", "banana", "cherry", "apple"], "apple", "orange"));

/**
 * 1. Filter Data: Write a function that filters the data to return only users whose names contain a specific keyword (e.g., "Clementine").
 * 2. Find User by Email: Create a function that finds a user by their email address and returns their details.
 * 3. Count Users: Create a function that counts the number of users in the data.
 * 4. Get Usernames: Write a function that extracts and returns an array of all usernames from the data.
 */
const data = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
	},
	{
		id: 2,
		name: "Ervin Howell",
		username: "Antonette",
		email: "Shanna@melissa.tv",
	},
	{
		id: 3,
		name: "Clementine Bauch",
		username: "Samantha",
		email: "Nathan@yesenia.net",
	},
	{
		id: 4,
		name: "Patricia Lebsack",
		username: "Karianne",
		email: "Julianne.OConner@kory.org",
	},
	{
		id: 5,
		name: "Chelsey Dietrich",
		username: "Kamren",
		email: "Lucio_Hettinger@annie.ca",
	},
	{
		id: 6,
		name: "Mrs. Dennis Schulist",
		username: "Leopoldo_Corkery",
		email: "Karley_Dach@jasper.info",
	},
	{
		id: 7,
		name: "Kurtis Weissnat",
		username: "Elwyn.Skiles",
		email: "Telly.Hoeger@billy.biz",
	},
	{
		id: 8,
		name: "Nicholas Runolfsdottir V",
		username: "Maxime_Nienow",
		email: "Sherwood@rosamond.me",
	},
	{
		id: 9,
		name: "Glenna Reichert",
		username: "Delphine",
		email: "Chaim_McDermott@dana.io",
	},
	{
		id: 10,
		name: "Clementina DuBuque",
		username: "Moriah.Stanton",
		email: "Rey.Padberg@karina.biz",
	},
];

function filterKeyword(keyword) {
	// return data.filter(item) => item.name.includes(keyword));
}
console.log(filterKeyword("Glenna"));

function getEmailAdres(email) {
	return data.filter((item) => item.email === email)[0].email;
}
console.log(getEmailAdres("Lucio_Hettinger@annie.ca"));

function countUser() {
	return data.length;
}
console.log(countUser());

function getAllNames() {
	// let nameArray = [];
	// for (let i = 0; i < data.length; i++) {
	// 	nameArray.push(data[i].name);
	// }
	// return nameArray;
	return data.map((item) => item.name);
}

console.log(getAllNames());

const MYAPP = {
	apikey: "SomeUniqueAPIKey",
	today: new Date(),
	init: function () {
		NAV.doSomething();
		//an initial function that we will call in our namespace
	},
	someMethod: function () {
		console.log("I am in a method in MYAPP namespace");
	},
};

const NAV = {
	//this object deals with history and navigation and form submission
	doSomething: function (ev) {
		console.log("I am in a method in NAV namespace");
	},
};

//start everything
document.addEventListener("DOMContentLoaded", MYAPP.init);

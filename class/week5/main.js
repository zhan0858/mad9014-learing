// let p = document.querySelectorAll("p");
// console.log(p);

// let p2 = p.forEach(function (item) {
// 	item.textContent = "Hello, this is updated paragraph";
// });

// let div = document.createElement("div");
// div.textContent = "Hello, this is a new div";

// let main = document.querySelector("main");
// main.append(div);

function replaceHtml() {
	let html = document.querySelector("html");
	let myHtml = `<p>Lulu Zhang</p>
	<img src="https://placedog.net/1000/1000?random" alt="random dog"/>`;
	html.innerHTML = myHtml;
}

function showData() {
	console.log("show");
	let userCardContainer = document.getElementById("user-cards");
	console.log("userCardContainer =", userCardContainer);
	let df = document.createDocumentFragment();
	data.forEach(function (item, index) {
		let userCard = document.createElement("div");
		userCard.classList.add("user-card");
		userCard.innerHTML = `
        <img class="user-image" src="${item.url}" alt="${item.name}"/>
        <h2>${item.name}</h2>
        <p><strong>Username: </strong>${item.username}</p>
        <p><strong>Email: </strong>${item.email}</p>
        <p><strong>Address: </strong>${item.address.suite},${item.address.street},${item.address.city},${item.address.zipcode}</p>
        <p><strong>Phone: </strong>${item.phone}</p>
        <p><strong>Website: </strong>${item.website}</p>
        <p><strong>Company: </strong>${item.company.name} ${item.company.catchPhrase}</p>
        `;
		df.append(userCard);
	});
	userCardContainer.append(df);
}

function addTodoList() {
	let addTaskButton = document.getElementById("addTaskButton");
	let clearTaskButton = document.getElementById("clearTaskButton");
	let taskList = document.querySelector("#taskList");
	let taskInput = document.querySelector("#taskInput");
	function addTask() {
		let value = taskInput.value;
		console.log("value =", value);
		if (value) {
			let taskItem = document.createElement("li");
			taskItem.textContent = value;
			taskList.append(taskItem);
		}
	}

	function clearAll() {
		if (taskList.childNodes) {
			taskList.innerHTML = "";
			taskInput.value = "";
		}
	}
	addTaskButton.addEventListener("click", addTask);
	clearTaskButton.addEventListener("click", clearAll);
}

window.addEventListener("load", () => {
	// replaceHtml();
	// showData();
	addTodoList();
});

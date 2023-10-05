const data = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496",
			},
		},
		url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets",
		},
	},
	{
		id: 2,
		name: "Ervin Howell",
		username: "Antonette",
		email: "Shanna@melissa.tv",
		address: {
			street: "Victor Plains",
			suite: "Suite 879",
			city: "Wisokyburgh",
			zipcode: "90566-7771",
			geo: {
				lat: "-43.9509",
				lng: "-34.4618",
			},
		},
		url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		phone: "010-692-6593 x09125",
		website: "anastasia.net",
		company: {
			name: "Deckow-Crist",
			catchPhrase: "Proactive didactic contingency",
			bs: "synergize scalable supply-chains",
		},
	},
	{
		id: 3,
		name: "Clementine Bauch",
		username: "Samantha",
		email: "Nathan@yesenia.net",
		address: {
			street: "Douglas Extension",
			suite: "Suite 847",
			city: "McKenziehaven",
			zipcode: "59590-4157",
			geo: {
				lat: "-68.6102",
				lng: "-47.0653",
			},
		},
		url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
		phone: "1-463-123-4447",
		website: "ramiro.info",
		company: {
			name: "Romaguera-Jacobson",
			catchPhrase: "Face to face bifurcated interface",
			bs: "e-enable strategic applications",
		},
	},
	{
		id: 4,
		name: "Patricia Lebsack",
		username: "Karianne",
		email: "Julianne.OConner@kory.org",
		address: {
			street: "Hoeger Mall",
			suite: "Apt. 692",
			city: "South Elvis",
			zipcode: "53919-4257",
			geo: {
				lat: "29.4572",
				lng: "-164.2990",
			},
		},
		url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
		phone: "493-170-9623 x156",
		website: "kale.biz",
		company: {
			name: "Robel-Corkery",
			catchPhrase: "Multi-tiered zero tolerance productivity",
			bs: "transition cutting-edge web services",
		},
	},
	{
		id: 5,
		name: "Chelsey Dietrich",
		username: "Kamren",
		email: "Lucio_Hettinger@annie.ca",
		address: {
			street: "Skiles Walks",
			suite: "Suite 351",
			city: "Roscoeview",
			zipcode: "33263",
			geo: {
				lat: "-31.8129",
				lng: "62.5342",
			},
		},
		url: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
		phone: "(254)954-1289",
		website: "demarco.info",
		company: {
			name: "Keebler LLC",
			catchPhrase: "User-centric fault-tolerant solution",
			bs: "revolutionize end-to-end systems",
		},
	},
	{
		id: 6,
		name: "Mrs. Dennis Schulist",
		username: "Leopoldo_Corkery",
		email: "Karley_Dach@jasper.info",
		address: {
			street: "Norberto Crossing",
			suite: "Apt. 950",
			city: "South Christy",
			zipcode: "23505-1337",
			geo: {
				lat: "-71.4197",
				lng: "71.7478",
			},
		},
		url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
		phone: "1-477-935-8478 x6430",
		website: "ola.org",
		company: {
			name: "Considine-Lockman",
			catchPhrase: "Synchronised bottom-line interface",
			bs: "e-enable innovative applications",
		},
	},
	{
		id: 7,
		name: "Kurtis Weissnat",
		username: "Elwyn.Skiles",
		email: "Telly.Hoeger@billy.biz",
		address: {
			street: "Rex Trail",
			suite: "Suite 280",
			city: "Howemouth",
			zipcode: "58804-1099",
			geo: {
				lat: "24.8918",
				lng: "21.8984",
			},
		},
		url: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
		phone: "210.067.6132",
		website: "elvis.io",
		company: {
			name: "Johns Group",
			catchPhrase: "Configurable multimedia task-force",
			bs: "generate enterprise e-tailers",
		},
	},
	{
		id: 8,
		name: "Nicholas Runolfsdottir V",
		username: "Maxime_Nienow",
		email: "Sherwood@rosamond.me",
		address: {
			street: "Ellsworth Summit",
			suite: "Suite 729",
			city: "Aliyaview",
			zipcode: "45169",
			geo: {
				lat: "-14.3990",
				lng: "-120.7677",
			},
		},
		url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
		phone: "586.493.6943 x140",
		website: "jacynthe.com",
		company: {
			name: "Abernathy Group",
			catchPhrase: "Implemented secondary concept",
			bs: "e-enable extensible e-tailers",
		},
	},
	{
		id: 9,
		name: "Glenna Reichert",
		username: "Delphine",
		email: "Chaim_McDermott@dana.io",
		address: {
			street: "Dayna Park",
			suite: "Suite 449",
			city: "Bartholomebury",
			zipcode: "76495-3109",
			geo: {
				lat: "24.6463",
				lng: "-168.8889",
			},
		},
		url: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
		phone: "(775)976-6794 x41206",
		website: "conrad.com",
		company: {
			name: "Yost and Sons",
			catchPhrase: "Switchable contextually-based project",
			bs: "aggregate real-time technologies",
		},
	},
	{
		id: 10,
		name: "Clementina DuBuque",
		username: "Moriah.Stanton",
		email: "Rey.Padberg@karina.biz",
		address: {
			street: "Kattie Turnpike",
			suite: "Suite 198",
			city: "Lebsackbury",
			zipcode: "31428-2261",
			geo: {
				lat: "-38.2386",
				lng: "57.2232",
			},
		},
		url: "https://images.unsplash.com/photo-1543278732-824a807df8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
		phone: "024-648-3804",
		website: "ambrose.net",
		company: {
			name: "Hoeger LLC",
			catchPhrase: "Centralized empowering task-force",
			bs: "target end-to-end models",
		},
	},
];
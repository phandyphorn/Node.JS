function afterRequest(response) {
	// TODO create the DOM from the response data
	let datas = response.data;
	// for (let data of  datas) {
	// 	let ul = document.createElement('ul');
	// 	let liName = document.createElement('li');
	// 	let liMail = document.createElement('li');
	// 	let liCompany = document.createElement('li');

	// 	liName.textContent = data.name;
	// 	liMail.textContent = data.email;
	// 	liCompany.textContent = data.company.name;


	// 	ul.appendChild(liName);
	// 	ul.appendChild(liMail);
	// 	ul.appendChild(liCompany);

	// 	document.body.appendChild(ul);
	// }

	console.log(response.data);

	// The second way =====================================

	datas.forEach(element => {
		console.log(element["name"]);
		console.log(element["email"]);
		console.log(element["company"]["name"]);
		let ul = document.createElement("ul");
		let li = document.createElement("li");
		let li1= document.createElement("li");
		let li2 = document.createElement("li");
		li.textContent = element["name"];
		li1.textContent = element["email"];
		li2.textContent = element["company"]["name"];

		ul.appendChild(li);
		ul.appendChild(li1);
		ul.appendChild(li2);

		document.body.appendChild(ul);

		
	  });

	
};

const GENDER_URL_BASE = "https://jsonplaceholder.typicode.com/users";
// Request a GET on this URL : https://jsonplaceholder.typicode.com/users
// then : callback the function afterRequest

axios.get(GENDER_URL_BASE).then(afterRequest);
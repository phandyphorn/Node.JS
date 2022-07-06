function afterRequest(response) {
	// TODO	: display the gender in the DOM
	console.log(response);
	let datas = response.data;
	for (let data of  datas) {
		document.getElementById('answerId').textContent = data.title;
	}
}


// Perform the GET request with appropriate URL and call the afterRequest function as callback

let nameToTest = "2031";
const GENDER_URL_BASE = "https://gorest.co.in/public/v2/todos?id=";
// Plus GENER_URL_BASE with nameToTest
const GENDER_URL = GENDER_URL_BASE + nameToTest;	// TODO

// let p = document.createElement(p);

// Request a GET on GENDER_URL to get the data from the JSON
// Once done the function afterRequest will be called
axios
.get(GENDER_URL)
.then(afterRequest);


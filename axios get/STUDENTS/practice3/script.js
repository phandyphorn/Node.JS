// TODO
// Type of request:	GET
// GET URL		        https://reqres.in/api/unknown/23


// First check the result in Thunder client

// After do it with Axios in JavaScript :
let showData = () => {
    const URL = "https://reqres.in/api/unknown/23"

    axios
    .get(URL)
    .then(()=> {
        console.log("Nothing")
    })
    .catch(()=> {
        let pa = document.getElementById('theText');
        pa.textContent = 'SORRY WE ARE SLEEPING!'
    })
}

const btn = document.querySelector('button');
btn.addEventListener('click', showData);


// You should receive an ERROR 404 (not found)
//	- you need to catch it and display a <p> with a message : "SORRY WE ARE SLEEPING !!"


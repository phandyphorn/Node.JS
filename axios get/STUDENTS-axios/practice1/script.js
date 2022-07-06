// TODO
// Type of request:	GET
// GET URL : https://reqres.in/api/unknown/2
let URL = "https://reqres.in/api/unknown/2";


// First check the result in Thunder client
// Drop the link in thunder client => I will see.


// After do it with Axios in JavaScript :
axios
.get(URL)
.then(afterRequestURL)

// To do when received the response
function afterRequestURL(response){
    //	- Get the color and the name in the data
    let datas = response.data;
    let username = datas.data.name;
    let color = datas.data.color;
    
    //	- display the name in a <p> with the right color as background

    let result = document.getElementById('theText');
    result.textContent = username
    result.style.background = color;
}



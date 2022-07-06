// TODO
// Type of request:	GET
// GET URL https://reqres.in/api/users?page=2

// let URL = "https://reqres.in/api/users?page=2";

// First check the result in Thunder client

// After do it with Axios in JavaScript :
// To do when received the 
// 	- display the list of last names and email


let errorAfterRequest = (error) => console.error("Request Fail", error);
let afterRequest = (response) => {
   // your code
   let datas = response.data.data;
   // console.log(datas[0].last_name);
   for (let i=0; i < datas.length; i++){
      let lastName = datas[i].last_name;
      let email = datas[i].email;
      console.log(lastName)
      console.log(email)
   }
}

let showData = () => {
const URL = "https://reqres.in/api/users?page=2";
// request data here   
axios
.get(URL)
.then(afterRequest)
.catch(errorAfterRequest)
}

const btn = document.querySelector('button');
btn.addEventListener('click', showData);


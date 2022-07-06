// TODO

// Type of request:	  POST !!!
// POST URL	 (endpoint) :	      https://reqres.in/api/users
// POST BODY (payload)	:	      { "name": "rady","job": "wep senior trainer" }

// First check the result in Thunder !

// Then use Axios to do the request:
// Now are are NOT using axios.get but axios.post !!

// 	- Syntax:
// 		axios.get( <url> )
// 		axios.post( <url>,  body )


// 1- You need to send a POST request using axios.post with the following values

// 		URL = https://reqres.in/api/users
		
// 		BODY = {"rady","job": "wep senior trainer" }



// 	==> THIS post request will ADD a new USER (rady) to a database on the server....

// 2 - In THEN callback (when the POST is finished with successs) you need :
// 			- To display on console the ID of the user created
// 			- To display on console the DATE of the user created


// 				(you will get those 2 information on the DATA of the response in your THEN callback
const URL = "https://reqres.in/api/users";
const user = {"name":"rady","job": "wep senior trainer" };

axios
.post(URL,user)
.then(afterRequest)

function afterRequest(response) {
    console.log(response.data);
    console.log(response.data.id);
    console.log(response.data.date);
}






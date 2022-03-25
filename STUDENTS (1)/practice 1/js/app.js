// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome

const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  // TODO: Display the list of students in the DOM
  console.log("response from server:");
  console.log(response);
  console.log("data of response:");
  console.log(response.data);

  // Get all datas from response
  let datas = response.data;

  // The first way============================================
  // for (let i= 0; i<datas.length; i++) {
  //   console.log(datas[i].name)
  //   let li = document.createElement('li');
  //   let h1 = document.createElement('h1');
  //   let p1 = document.createElement('p');
  //   let p2 = document.createElement('p');
  //   h1.textContent = 'name : ' + datas[i].name;
  //   p1.textContent = 'nickname : ' + datas[i].nickname;
  //   p2.textContent = 'class : ' + datas[i].class;
    
  //   li.appendChild(h1);
  //   li.appendChild(p1);
  //   li.appendChild(p2);
  //   studentsContainer.appendChild(li);
  // }
  // The second way=============================================
  // for (let data of datas) {
  //   let li = document.createElement('li');
  //   let h1 = document.createElement('h1');
  //   let p1 = document.createElement('p');
  //   let p2 = document.createElement('p');
  //   h1.textContent = 'name : ' + data['name'];
  //   p1.textContent = 'nickname : ' + data['nickname'];
  //   p2.textContent = 'class : ' + data['class'];
    
  //   li.appendChild(h1);
  //   li.appendChild(p1);
  //   li.appendChild(p2);
  //   studentsContainer.appendChild(li);

  // }

  // The third way==================================================
  datas.forEach(element => {
    console.log(element["name"]);
    console.log(element["nickname"]);
    console.log(element["class"]);
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    h1.textContent = element["name"];
    li.appendChild(h1);
    p1.textContent = element["nickname"];
    li.appendChild(p1);
    p2.textContent = element["class"];
    li.appendChild(p2);
    document.getElementById("studentsContainer").appendChild(li);
  });
}


// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called


// Ask ==================================================================
// Axios is a promise based HTTP client for the browser and Node. js
axios.get(STUDENT_URL).then(afterStudentRequest);


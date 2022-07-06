function addStudent(e) {
  e.preventDefault();
  if (first_name.value !== "" && last_name !== "") {
    let firstName = first_name.value;
    let lastName = last_name.value;
    // TODO: request the server to create new student
    let URL = "http://localhost:3000/student";
    let body = { firstName: firstName, lastName: lastName };
    axios.post(URL, body).then((req, res) => {
      console.log("student created");
      displayStudent();
    })
  } else {
    alert("The field should not be empty")
  }
}
function refreshDOM(students) {
  while (display.firstChild) {
    display.removeChild(display.lastChild);
  }

  students.forEach((student) => {
    // create space
    let space = document.createElement("hr");
    // create dive contain first name and last name
    let div = document.createElement("div");
    div.id = student.id;
    if (student.completed) {
      div.className = "card mt-2 p-2 text-success";
    } else {
      div.className = "card mt-2 p-2 text-danger";
    }

    let first_name = document.createElement('p');
    first_name.textContent = student.firstName;
    let last_name = document.createElement("p");
    last_name.textContent = student.lastName;
    // create a link for update or delete
    let del = document.createElement("a");
    del.href = "#";
    del.className = "delete";
    del.innerHTML = "Delete"
    let update = document.createElement("a")
    update.href = "#";
    update.innerHTML = "Completed";
    update.className = "update";
    // append element to dive and append div to dom
    div.appendChild(first_name);
    div.appendChild(last_name);
    div.appendChild(space);
    div.appendChild(del);
    div.appendChild(update);
    display.appendChild(div);
  })

}
function displayStudent() {
  // e.preventDefault();
  // TODO: request all students from server and update DOM
  let URL = "http://localhost:3000/students";
  axios.get(URL).then((res) => {
    refreshDOM(res.data);
  })
}

function toDeleteOrUpdate(e) {
  e.preventDefault();
  if (e.target.className === "delete") {
    let isConfirmed = confirm("Are you sure to delete this task?");
    if (isConfirmed) {
      // TODO: Request to the server to detele one task
      let id = e.target.parentElement.id;
      let URL = "http://localhost:3000/student/" + id;
      axios.delete(URL).then((res) => {
        console.log("student deleted");
      })

    }
  } else if (e.target.className === "update") {
    // TODO: Request to the server to update one student as completed
    let id = e.target.parentElement.id;
    let body = { completed: true };
    let URL = "http://localhost:3000/student/" + id;
    axios.put(URL, body).then((res) => {
      if (res.data) {
        console.log("student updated successfully");
      }
    })
  }
  displayStudent();
}
//-------------------main--------------------

let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let display = document.querySelector(".students");
let BUTTON_ADD = document.querySelector("#btn_add");
BUTTON_ADD.addEventListener("click", addStudent);
display.addEventListener("click", toDeleteOrUpdate);
displayStudent();
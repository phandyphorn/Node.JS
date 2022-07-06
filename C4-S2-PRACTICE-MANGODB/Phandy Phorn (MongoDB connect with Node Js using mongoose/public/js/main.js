function addTask(e) {
  e.preventDefault();
  let task = taskTitle.value;
  let priority = taskPriority.value;
  let firstName = document.querySelector("#firstname").value;
  let lastName = document.querySelector("#lastname").value;
  let teacherName = document.querySelector("#teachername").value;
  let className = document.querySelector("#class").value;

// Add what we check to array.
  let array = [];
  if (work.checked){
    array.push(work.value);
  }
  if (personal.checked){
    array.push(personal.value);
  }
  if (project.checked){
    array.push(project.value);
  }
  if (travel.checked){
    array.push(travel.value);
  }

  // Add more firstname and lastname into object.
  let object = {
    "fist_name": firstName,
    "last_name": lastName
  };
  
  
  let urlAdd = "http://localhost:3000/addtask";
  // TODO: request the server to create new task
  let data = {
    "title": task,
    "priority": priority,
    "categories": array,
    "author": object,
  };

  let students = {
    "name": teacherName,
    "class": className
  }

  let urlStu = "http://localhost:3000/addstu";
  axios.post(urlStu, students)
  .then((response) => {
    console.log("success")
  })
  .catch((error) => {
    console.log("error")
  })
  displayTasks()
  

  // axios use in front end
  axios.post(urlAdd, data)
  .then((response) => {
    console.log("success")
  })
  .catch((error) => {
    console.log("error")
  })
  displayTasks()
}


function refreshDOM (tasks) {
  while (screenToDisplay.firstChild) {
    screenToDisplay.removeChild(screenToDisplay.lastChild);
  }
  tasks.data.forEach((task) => {
    let card = document.createElement("div");
    card.id = task._id;
    if (task.completed) {
      card.className = "card mt-2 p-2 text-success";
    } else {
      card.className = "card mt-2 p-2 text-danger";
    }
    let p = document.createElement("p");
    p.textContent = task.title;
    let a_delete = document.createElement("a");
    a_delete.href = "#";
    a_delete.className = "delete";
    a_delete.textContent = "Delete";
    let hr = document.createElement("hr");
    card.appendChild(p);
    if (task.priority) {
      let p_prio = document.createElement("span");
      p_prio.textContent = "Priority= " + task.priority;
      card.appendChild(p_prio);
    }
    card.appendChild(hr);
    card.appendChild(a_delete);
    if (!task.completed) {
      let a_update = document.createElement("a");
      a_update.href = "#";
      a_update.className = "update";
      a_update.textContent = "Completed";
      card.appendChild(a_update);
    }
    screenToDisplay.appendChild(card);
})

}

function displayTasks() {
  if (todo.checked) {
    axios.get("http://localhost:3000/updatetasknotcompleted")
    .then((tasks)=>{
      refreshDOM (tasks)
    })

  }else {
    let urlDisplay = "http://localhost:3000/task";
  axios.get(urlDisplay)
  .then((tasks) => {
    refreshDOM (tasks)
  })
  }
}
  

function clickTask(e) {
  e.preventDefault();
  if (e.target.className === "delete") {
    let isExecuted = confirm("Are you sure to delete this task?");
    if (isExecuted) {
      // TODO: Request to the server to detele one task
      axios.delete("/deletetask/"+ e.target.parentElement.id)
      .then((response) => {
        console.log("Task have Deleted")
        displayTasks()
      })
      .catch((error) => {
        console.log("error")
      })
    }
  } else if (e.target.className === "update") {
    // TODO: Request to the server to update one task as completed
      axios.put("/updatetask/" + e.target.parentElement.id,{completed:true})
      .then((response) => {
        console.log("Have already updated")
        displayTasks()
      })
      .catch((error) => {
        console.log("error")
      })
  } else if (e.target.className === "todo") {
    // TODO: Request to the server to update one task as completed
      axios.get("/updatetasknotcompleted/" + e.target.parentElement.id)
      .then((response) => {
        console.log("Show false completed")
        displayTasks()
      })
      .catch((error) => {
        console.log("error")
      })
  }
}


let screenToDisplay = document.querySelector(".result");
let taskTitle = document.querySelector("#task");
let taskPriority = document.querySelector("#priority");
let btnAddTask = document.querySelector("#addTask");
let todo = document.querySelector("#todo");
let work = document.querySelector("#work");
let personal = document.querySelector("#personal");
let project = document.querySelector("#project");
let travel = document.querySelector("#travel");



btnAddTask.addEventListener("click", addTask);
screenToDisplay.addEventListener("click", clickTask);
todo.addEventListener("change", displayTasks);

displayTasks();

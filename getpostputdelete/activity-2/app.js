const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;
app.listen(PORT, () => console.log("Server starting on port: " + PORT));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

students = [
  {
    id: 1,
    first_name: "Calypso",
    last_name: "Eddis",
    email: "ceddis0@discovery.com",
  },
  {
    id: 2,
    first_name: "Calli",
    last_name: "Kleinplac",
    email: "ckleinplac1@mlb.com",
  }
];

// GET welcome node js
app.get("/", (req, res) => {
  console.log("Request from client: GET /");
  res.send("WELCOME NODE JS"); // res.send => send a string
});

// Get all students
app.get("/students", (req, res) => {
  // console.log("Request from client: GET /students");
  res.json(students); // res.json => send an object
});

// Get student by id
app.get("/student/:id", (req, res) => {
  // console.log("Request from client: GET /student/" + req.params.id);

  students.forEach(student => {
    if (student.id == req.params.id){
      res.send(student);
    }
  })
  // res.json({});
});


app.post("/student", (req, res) => {
  // console.log("Request from client: POST /student with body: " + JSON.stringify(req.body));
  let student = req.body;
  let addStudentToStudents = students.push(student);
  if (addStudentToStudents){
    res.send("students added");
  }else {
    res.send("added fail");
  }
  // res.json({});
});

app.put("/student/:id", (req, res) => {
  // console.log("Request from client: PUT /student/" + req.params .id + " with body: " + JSON.stringify(req.body));
  
  res.json({});
});


app.delete("/student/:id", (req, res) => {
  // console.log("Request from client: DELETE /student/" + req.params.id);
  let studentId = req.params.id;
  for (let i=0; i < studentId.length; i++) {
    if (students[i].id == studentId){
      let deleteStudent = students.splice(i,1);
      if (deleteStudent){
        res.send("Delete successful!")
      }else {
        res.send("Delete fail!")
      }
    }
  }
  // res.json({});
});

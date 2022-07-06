const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors()); // To allow any origin
app.use(express.json()); // To read json data in request body

app.use(cors({origin: "*"}));
app.listen(3000, () => {
  console.log("App run on http://localhost:3000");
});

// Define static route
app.use(express.static("public"));

// import model
const studentsModel = require("./models/students_model");

// TODO:  Define dynamic routes
// Mission 2 - Read
app.get("/students", (req,res) => {
  let getStudent = studentsModel.getStudents();
  res.send(getStudent);
})


// Mission 3 - Create
app.post("/student", (req,res) => {
  let student = req.body;
  studentsModel.createNewStudents(student);
  res.send("created successfully")

})

// Mission 4 - Delete
app.delete("/student/:id", function(req, res) {
  let stu_id = req.params.id;
  studentsModel.deleteStudent(stu_id);
  res.send("delete succesfully");

})
// Mission 5 - Update
app.put("/student/:id",(req,res)=>{
  let stu_id = req.params.id;
  studentsModel.Completed(stu_id);
  res.send("update succesfully");
})

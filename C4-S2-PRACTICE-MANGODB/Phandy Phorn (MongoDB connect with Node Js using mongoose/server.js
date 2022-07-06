const express = require("express");
var cors = require("cors");
const app = express();


app.use(cors()); // To allow any origin
app.use(express.urlencoded()); 
app.use(express.json()); // To read json data in request body


app.listen(3000, () => {
  console.log("App run on http://localhost:3000");
});


// import Task model
const task = require("./models/task_model");
const TaskModel = task.TaskModel

// Define static route
app.use(express.static("public"));

// TODO: Define dynamic routes
app.get("/task", (req, res) => {
  TaskModel.find()
  .populate("assignment")
  .then(result => {
      res.send(result);
  })
  .catch((error) => {
      res.send(error);
  })
});


app.get("/student", (req, res) => {
  TaskModel.find()
  .then(result => {
      res.send(result);
  })
  .catch((error) => {
      res.send(error)
  })
});


app.post("/addtask", (req, res) => {
  TaskModel.create(req.body)
  .then(result => {
      res.send(result);
  })
  .catch((error) => {
      res.send(error);
  })
});


app.delete("/deletetask/:id", (req, res) => {
  TaskModel.deleteOne({_id:req.params.id})
  .then(result => {
      res.send(result);
  })
  .catch((error) => {
      res.send(error);
  })
});


app.put("/updatetask/:id", (req, res) => {
  TaskModel.updateOne({_id:req.params.id},req.body)
  .then(result => {
      res.send(result);
  })
  .catch((error) => {
      res.send(error);
  })
});


app.get("/updatetasknotcompleted", (req, res) => {
  TaskModel.find({completed:false})
  .then(result => {
      res.send(result);
  })
  .catch((error) => {
      res.send(error);
  })
});





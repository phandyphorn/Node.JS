const mongoose = require("mongoose");

// TODO: Connect to MangoDB
mongoose.connect("mongodb://127.0.0.1:27017/mytask",{useUnifiedTopology:true});

// Check if connection is successfull
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// TODO:  Define the Schema for the Tasks collection
const taskshcema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number
  },
  categories: {
    type: Array
  },
  author: {
    type: Object
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mystudents"
  }
});

const studentshcema =new mongoose.Schema({
  name: {
    type: String
  },
  class: {
    type: String
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students"
  },

  role: {
    type: String,
  }
})


// Create the Model for the Tasks collection from Schema
const TaskModel = mongoose.model("mytasks", taskshcema);
const StudentModel = mongoose.model("mystudents", studentshcema)
module.exports.TaskModel = TaskModel;
module.exports.StudentModel = StudentModel;

// Or
// module.exports = {TaskModel,StudentModel}

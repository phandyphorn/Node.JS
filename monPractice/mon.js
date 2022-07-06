
// mongoose
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT, (req, res) => {
    console.log("Server start at Port: " + PORT);
});

app.use(express.urlencoded());
app.use(express.json());

mongoose
.connect("mongodb://127.0.0.1:27017/Todos", {useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once("open", function(){
    console.log("Connect Successfully!!!")
});


// MyShema
const MySchema = new mongoose.Schema({
    // get tilte and completed in mongodb to put title and completed to have type and required (need to have or not?)
    
    // title, we need its type and need to have or optional.
    title: {
        type: String,
        required: true
        // true mean need to have, false is optional.
    },
    completed: {
        type: Boolean,
        required: true
    }
})


const taskModel = mongoose.model("tasks", MySchema);

app.get("/tasks", (req, res) => {
    taskModel.find()
    .then(result => {
        res.send(result);
    })
    .catch((error) => {
        res.send(error);
    })
})

app.get("/search", (req, res) => {
    taskModel.find({completed:false})
    .then(result => {
        res.send(result);
    })
    .catch((error) => {
        res.send(error);
    })
})


app.post("/addTask",(req, res)=>{
    taskModel.create(req.body)
    .then((result)=>{
        res.send(result);
    })
    .catch((error) => {
        console.log(error);
    })
})


app.delete("/deleteTask/:id", (req, res) => {
    taskModel.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.send(result);
    })
    .catch((error) => {
        res.send(error);
    })
})

app.put("/update", (req, res) => {
    taskModel.updateOne(req.body)
    .then((result)=>{
        res.send(result);
    })
    .catch((error) => {
        res.send(error);
    })
})


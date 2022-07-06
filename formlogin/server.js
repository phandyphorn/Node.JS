const express = require('express');
const mongoose = require('mongoose');

const model = require("./module/module.js");

const app = express();
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/formLogin")


app.post("/login", (req, res) => {
    let userData = req.body
    model.userModel.find(userData)
    .populate("role")
    .populate("address")
    .then((result) => {
        if(result) {
            res.send(result)
        }else {
            res.send("error")
        }
    })
})

app.listen(PORT, (error)=>{
    console.log("http://localhost:" + PORT)
})

// Students Document



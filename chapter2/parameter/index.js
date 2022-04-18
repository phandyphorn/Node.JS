const express = require('express');
const cors = require('cors');

users = [
    {"name": "John", "gender": "M", "phone": "0962517455"},
    {"name": "Jo", "gender": "F", "phone": "0962517459"},
    {"name": "Jony", "gender": "M", "phone": "0962517453"},
    {"name": "Jon", "gender": "F", "phone": "0962517451"},
    {"name": "Jorn", "gender": "F", "phone": "0962517453"},
];
// 


const app = express();

app.listen(5500, (error) => {
    console.log("Server is running. please wait a minute!");
    if (error) {
        console.log(error);
    }
})


// app.get('/books', (req, res) => {
//     res.send(req.query.name.id);
// })


// How to get file in node js. 
// * mean that all server can run on it.
app.use(cors({origin: '*'}));
app.use(express.static("public"));
app.get('/users', (req, res) => {
    res.send(users);
})

let place = document.body;
for (let i = 0; i<users.length; i++) {
    let heading = document.createElement("h1");
    heading.textContent = user[i].name;    
    console.log(heading);
}
place.appendChild(heading);



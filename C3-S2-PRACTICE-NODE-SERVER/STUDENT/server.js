
const students = "studentDatabase.json"

// 1- 	Using the FS module, read the file ./studentDatabase.json 
// 		to get the list of students hobbies and favorites things

let fs = require('fs');


let studentPer = fs.readFileSync(students).toString();
// console.log(studentPer);
let studentData = JSON.parse(studentPer);

// 2- 	Using the module EXPRESS, start to listen to request on PORT 5000
const express = require('express');
const app = express();
const port = 5000;
app.listen(port, () => console.log("server is runing on " + port))

app.get('/', (req, res) => {
    return res.send("Welcome to your interface!")
});

app.get('/hello', (req, res) => {
    return res.send("Hello again!")
});

// 3-	Now answer to the following request:
//			GET  /favoriteTeacher?firstName= <student first name> & lastName= <student last name>
//			Return the favorite teacher of the student
//			Example for : 				GET  /favoriteTeacher?firstName=Channary&lastName=Pha
//			you should return : 		rady
// 			because of the JSON file, Channary Pha favorite teacher is Rady


app.get('/favoriteTeacher', (req, res) => {
    let firstN = req.query.firstName;
    let lastN = req.query.lastName;

    for (student of studentData){
        if(student.firstName==firstN&student.lastName==lastN){
            res.send(student.favoriteteacher);
        }
    }
    
})


// 4-	Now answer to the following request:

//			GET  /favoriteCountry?firstName= <student first name> & lastName= <student last name>
//			Return the favorite country of the student

app.get('/favoritecountry', (req, res) => {
    let firstN = req.query.firstName;
    let lastN = req.query.lastName;

    for (student of studentData){
        if(student.firstName==firstN&student.lastName==lastN){
            res.send(student.favoriteCountry);
        }
    }
})


// 5-	Now answer to the following request:

//			GET  /students?favoriteTeacher= <teacher name>
//			Return the  list of  students first name  who like this teacher

//			Example for : 		GET  /students?favoriteTeacher=clement
//			you should return :  ["Somphors", "Nimout", "Vouleak", "Som"]
//			Because those students like clement


app.get('/students', (req, res) => {
    let arrayOfStudents = [];
    let teacherN = req.query.favoriteteacher;
    for (student of studentData) {
        if (student.favoriteteacher == teacherN){
            arrayOfStudents.push(student.firstName);
        }
    }
    res.send(arrayOfStudents);
})

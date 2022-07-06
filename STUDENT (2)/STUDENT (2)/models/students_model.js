const fs = require("fs");
const PATH = "models/students.json";
function getStudents() {
  // TODO: Mission 1 - read data from file
  let listOFStudents=JSON.parse(fs.readFileSync(PATH));
  return listOFStudents;
}


function save(student){
  fs.writeFileSync(PATH,JSON.stringify(student));
}
console.log(getStudents());


function createNewStudents(student){
  let getStudent = getStudents();
  let id = null;
  if(getStudent.length>0){
    id = getStudent[getStudent.length -1].id+1;
  }else{
    id = 1
  }
  let newStudent = {"id":id,"firstName":student.firstName,"lastName":student.lastName,"completed":false}
  getStudent.push(newStudent);
  // TODO: Save data
  save(getStudent);
}

function deleteStudent(id) {
  // TODO: load data
  let students = getStudents();
  // TODO: Mission 4 - Remove the task with good id
  for (let i=0;i<students.length;i++) {
    if (students[i].id == id){
      students.splice(students[i],1);
    }
  }
  // TODO: Save data
  save(students);
}

function Completed(id) {
  // TODO: load data
  let students = getStudents();
  // TODO: Mission 5 - Update the task with good id to 'completed'
  for (let i=0;i<students.length;i++) {
    if (students[i].id == id){
      students[i].completed = true;
    }
  }
  // TODO: Save data
  save(students);
}
// export the functions to use in the main file
module.exports.getStudents = getStudents;
module.exports.createNewStudents = createNewStudents;
module.exports.deleteStudent = deleteStudent;
module.exports.Completed = Completed;
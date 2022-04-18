const express = require("express");
const cors = require("cors");
let app = express();
const PORT = 3000;
app.use(express.static("front_end"));
app.use(cors({origin:'*'}));
// Configuration of express to read JSON on body.
app.use(express.urlencoded());
app.use(express.json());



const users = [
  { name: "him", password: "00000" },
  { name: "ronan", password: "11111" },
  { name: "rady", password: "22222" },
  { name: "edouar", password: "33333" },
];
app.listen(PORT, (req, res) => {
  console.log("Server start at Port: " + PORT);
});

app.post("/login", (req, res) => {
  let data = req.body;
  // let password = req.body.password;

  let isValid = false;
  for (let user of users) {
    if (user.name === data.userName && user.password === data.password) {
      isValid = true;
    }
  }
  res.send(isValid);
});





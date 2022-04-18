const express = require("express");
const cors = require("cors");
const app = express();

app.listen(3000, (error)=>{
    console.log("http://localhost:3000");
});

app.use(express.json());
app.use(cors({origin:'*'}));
app.use(express.static("public"));

// variable to store the status
let status = {color:"grey"};

/**
 * TODO
 */

// Create a route to send the status to front-end


// Create a route to set status to variable status

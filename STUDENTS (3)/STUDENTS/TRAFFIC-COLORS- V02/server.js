const express = require("express");
const cors = require("cors");
const app = express();

// Start server
app.listen(3000, (error)=>{
    console.log("http://localhost:3000");
});

app.use(express.json()); // To be able to read json in request body
app.use(cors({origin:'*'})); // To allow requests from any origin
app.use(express.static("public")); // To define public folder with frontend static files

// variable to store the status
let status = {color:"grey"};

/**
 * TODO
 */

// Create a route to send the status to front-end


// Create a route to set status to variable status

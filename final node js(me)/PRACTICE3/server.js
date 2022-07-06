const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.listen(PORT);
app.use(express.static("public"));

// YOUR CODE HERE

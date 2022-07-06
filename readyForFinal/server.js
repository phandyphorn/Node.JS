const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({ origin: '*' }));

app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT, () =>{
    console.log("http://localhost:"+PORT);
});


app.use(express.static("public"));

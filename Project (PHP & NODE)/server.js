const express = require("express");

const app = express();

// less than 4000
app.listen(3000, (error) => {
    if (error){
        console.log(error)
    }else{
        console.log("Server is running...");
    }
})
// When user access to server, we have to have route


// request (what id  that user need)
// response (what server send to user)
app.get("/",(request,response)=> {
    response.send("Hello world!");
})

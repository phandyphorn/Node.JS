

// 1- Import the module ‘fs’   (file system) to read and write files

const fs = require("fs");



// 2 - Write  a file rady.txt  with the content : Him is the best front programmer
fs.writeFileSync("rady.txt", "Him is the best frond programmer!");

// 3 - Read the content of the file  rady.txt
let result = fs.readFileSync("rady.txt").toString()
console.log(result);

// 4 - Add to this content ‘But Ronan is the funniest’ and write again our file



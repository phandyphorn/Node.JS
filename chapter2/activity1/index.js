
// Node can run in terminal or own machine, without using in brower (inspect)
// How to run is:
// node + your file. Ex node index.js

console.log("Hello node js!")
// ======================================
// call module to use.
const myModule = require("./math.js");
console.log(myModule.add(3,2));


const myModule1 = require("./math.js");
console.log(myModule1.divide(6,2));

// =======================================
// const fs = require("fs");
// let content = fs.readFileSync("text.txt").toString();
// console.log(content);


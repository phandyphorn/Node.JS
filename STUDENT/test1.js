

let myListFruits=require('./fruitsLib.js');



myListFruits.addFruit("banana", "yellow", 12);
myListFruits.addFruit("apple", "red", 20);
myListFruits.addFruit("mango", "green", 20);
myListFruits.listFruits();

console.log("banana price is :" + myListFruits.getPriceOf("banana"));
console.log("mango color is :" + myListFruits.getColorOf("mango"));

// // Save fruits
myListFruits.save();
myListFruits.load();

const myProducts = require('./products.js')
// ---------- TEST  ----------------------------------------------------------

myProducts.addProduct("piano", "music", 400);
myProducts.addProduct("iphone", "phone", 500);
myProducts.addProduct("french fries", "food", 20);
console.log("Most expensive product is  :" + myProducts.getMostExpensiveProduct());


// Save fruits
myProducts.save();
myProducts.load();
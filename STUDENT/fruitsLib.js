const FRUIT_FILE = "fruits.json";

// ---------- DEPENDANCIES ----------------------------------------------------------

/**
 * TODO
 * Import the library fs to be able to read/write files
 * 
 */
// ---------- VARIABLES ----------------------------------------------------------

/**
 * TODO : manage a list of fruits
 *
 * Each fruit is an OBJECT composed of:
 * - the name of the fruit  (string)
 * - the color of the fruit  (string)
 * - the price of the fruit  (integer)
 */

 let fruits = [];
 let fs = require("fs");

// ---------- FUNCTIONS ----------------------------------------------------------

/**
 * Add a new fruit
 * @param fruit name
 * @param fruit color
 * @param fruit price
 */
function addFruit(fruitName, fruitColor, fruitPrice) {
   // TODO : complete this function

  let object = {"fruitName":fruitName, "fruitColor": fruitColor, "fruitPrice": fruitPrice};
  fruits.push(object);
  console.log("fruit added:  " + fruitName);
}
// Export function to use in another file
module.exports.addFruit = addFruit;


function getColorOf(fruitName) {
   // TODO : complete this function
  for (let fruit of fruits) {
    // if user want to know the price of banana, they will put banana as parameter, mean that fruitName have been remove and put banana.
    if (fruitName == fruit.fruitName){
        return fruit.fruitColor;
    }
  }
}
// Export function to use in another file
module.exports.getColorOf = getColorOf;

function getPriceOf(fruitName) {
   // TODO : complete this function
  for (let fruit of fruits){
    // fruitName is parameter name
    // fruit is each object in array.
    if(fruitName = fruit.fruitName){
      return fruit.fruitPrice;
    }
  }
}
// Export function to use in another file
module.exports.getPriceOf = getPriceOf


function listFruits() {
  let toDisplay = "Here are the fruits:\n";
   // TODO : complete this function
  console.log(toDisplay);
  for (fruit of fruits) {
    console.log("-" + fruit.fruitName);
  }
}
// Export function to use in another file
module.exports.listFruits = listFruits;


function save() {
   // TODO : complete this function to save list of fruit to file

  // json.stringify() use to convert a javascript object or value to a json string.
  fs.writeFileSync(FRUIT_FILE, JSON.stringify(fruits));  
}
// Export function to use in another file
module.exports.save = save;


function load() {
  // TODO : complete this function to get list of fruit from file
  let showArrayOfFruits = fs.readFileSync(FRUIT_FILE).toString();
  console.log(showArrayOfFruits);
}
// Export function to use in another file
module.exports.load = load;




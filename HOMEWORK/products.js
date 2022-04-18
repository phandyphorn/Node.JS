const PRODUCTS_FILE = "products.json";

const fs = require("fs");

// ---------- DEPENDANCIES ----------------------------------------------------------

/**
 * TODO
 * Import the library fs  to be able to read/write files
 */

// ---------- VARIABLES ----------------------------------------------------------

/**
 * TODO : mange a list of products
 * 
 * Each product is an OBJECT composed of:
 * - the name of the product  (string)
 * - the category  of the product  (string)
 * - the price of the fruit  (integer)
 */



// ---------- FUNCTIONS ----------------------------------------------------------

/**
 * Add a new product
 * @param product name
 * @param product category
 * @param product price
 */
const products = [];
function addProduct(productName, category, price) {
   // TODO : complete this function
   let product = {"name":productName, "category":category, "price": price}
   products.push(product);
   
   
  console.log("product added:  " + productName);
}

module.exports.addProduct = addProduct;

function getMostExpensiveProduct() {
   // TODO : complete this function
   for (let i = 0; i<products.length; i++) {
      let mostExpensive = products[0].price;
      if(products[i].price > mostExpensive){
         mostExpensive = products[i].price
         return (products[i].name);
      }
   }
}

module.exports.getMostExpensiveProduct = getMostExpensiveProduct;
function save() {
   // TODO : complete this function
   fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products));
}

module.exports.save = save;

function load() {
   // TODO : complete this function
   let arrayShow = fs.readFileSync(PRODUCTS_FILE).toString()
   console.log(arrayShow);
}
module.exports.load = load;


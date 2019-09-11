// making sure to require the pckages in order to use them
var inquirer = require('inquirer');
var mysql = require('mysql');

// have to create a connection and have a connection object
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '3lPoderoso!',
    database: 'bamazon_DB'
});

// if connection doesn't work, throw an error
connection.connect(function(err){
    if (err) throw err;

    // display the list of products
    displayProducts();
});

// create a variable to display the products
var displayProducts = function(){
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;

     for (var i = 0; i < res.length; i ++) {
         console.log("Product ID: " + res[i].item_id + " || Product Name: " +
         res[i].product_name + " || Price: " + res[i].price);
     }   
     // Requests product and number of product items user wishes to purchase.
  		requestProduct();
    });
};

// Function for the requests  of product and number of product items user wishes to purchase.
var requestProduct = function() {
    inquirer.prompt([{
        name: "productID",
        type: "input",
        message: "Please enter the product ID for the product you would like to purchase",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    },{
        name: "productUnits",
        type: "input",
        message: "How many units do you want to buy?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }]).then
}
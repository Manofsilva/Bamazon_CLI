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
         res[i].product_name + " || Price: " + res[i].price + " || Product Quantity: " +
         res[i].stock_quantity);
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
        message: "How many units would you like to buy?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
        // then return a promise
    }]).then(function(answer) {
        // Queries database for selected product.
        var query = "SELECT stock_quantity, price, product_name, department_name FROM products WHERE ?";
        connection.query(query, { item_id: answer.productID}, function(err, res) {

            if (err) throw err;

            var available_stock = res[0].stock_quantity;
            console.log("available_stock", available_stock);
            var price_per_unit = res[0].price;
            console.log("price", price_per_unit);
            var available_product = res[0].product_name;
            console.log("product", available_product);
            var product_department = res[0].department_name;
            console.log("depart", product_department);

            // Checks there's enough inventory  to process user's request.
            if (available_stock >= answer.productUnits) {

                // Processes user's request passing in data to complete purchase.
                completePurchase(available_stock, price_per_unit, answer.productUnits, answer.productID);
                
            } else {

                // Tells user there isn't enough stock left.
                console.log("There isn't enough stock left!");

                // Lets user request a new product
                requestProduct();
        
            }
        });
    });
};

// completes user's request to purchase product
var completePurchase = function() {

    // update stock quantity once purchase is complete.
    var updatedStockQuantity = available_stock - answer.productUnits;

    // calculate total price for purchase based on unit price and number of units.
    var totalPrice = price_per_unit * i_dont_know;

// update stock quantity on the database based on user's purchase.
var query = "UPDATE products SET ? Where ?";
    connection.query(query, [{
        stock_quantity: updatedStockQuantity,
        
    }]), function(err, res) {
        
        if (err) throw err;
        // tells user purchase is a success
        console.log("Yay, your purchase is complete.");

        // display the total price for that purchase.
        console.log("You're payment has been received in the amount of: " + totalPrice);
    }
} 
}
# Bamazon_CLI

This is bamazon. Bamazon, as it's name suggests, is a simple e-commerce app, or at least the backend for it. Check out this screencast on youtube to see how it works: bamazon on youtube.

Bamazon uses some third-party node modules, has it's own modules, and connects to a mysql database to store and retrieve product and department information.

Third-party Node Modules
Bamazon uses these node modules: console.table, inquirer, mysql.

They are all dependencies in the package.json, so just run:

npm install

Customer Module
The customer module lets users select a product to purchase, enter the number of items they wish to purchase, and then complete the purchase.

The complete purchase process shows how much the total cost is (based on number of items).

The customer module also updates to the total sales for a department, based on the purchased product's department.

To run this module in the terminal:

node bamazonCustomer.js

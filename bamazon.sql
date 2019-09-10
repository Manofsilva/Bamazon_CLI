DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE 
    ('Backpack', 'Office Supplies', 35, 12),
    ('Pencil', 'Office Supplies', 1.25, 50),
    ('IPad', 'Electronics', 749.99, 22),
    ('Nikon DSLR Camera', 'Electronics', 1249.99, 8),
    ('Cool Shoes', 'Footwear', 75, 85),
    ('Green Graphic TShirt', 'Clothing', 14.50, 18),
    ('Beige Corduroy Pants', 'Clothing', 45, 6),
    ('50 Year Old Wine', 'Food', 1999.99, 5),
    ('Water Bowl', 'Pet Supplies', 19.99, 14),
    ('Dog Food', 'Pet Supplies', 22.25, 30);

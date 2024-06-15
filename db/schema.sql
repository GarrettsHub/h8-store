DROP DATABASE IF EXISTS h8_db;
CREATE DATABASE h8_db;
USE h8_db;


CREATE TABLE users (
    user_id MEDIUMINT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_users PRIMARY KEY (user_id)
);

CREATE TABLE products (
    product_id MEDIUMINT AUTO_INCREMENT,
    category_id MEDIUMINT,
    name VARCHAR(50) NOT NULL,
    description MEDIUMTEXT,
    price DECIMAL(6, 2) NOT NULL,
    category ENUM('Shirts', 'Pants', 'Shoes', 'Accessories') NOT NULL,
    stock MEDIUMINT NOT NULL,
    image_url MEDIUMTEXT,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_products PRIMARY KEY (product_id),
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE orders (
    order_id MEDIUMINT AUTO_INCREMENT,
    user_id MEDIUMINT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(6, 2) NOT NULL,
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    CONSTRAINT pk_orders PRIMARY KEY (order_id),
    CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
    order_item_id MEDIUMINT AUTO_INCREMENT,
    order_id MEDIUMINT,
    product_id MEDIUMINT,
    quantity MEDIUMINT NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    CONSTRAINT pk_order_items PRIMARY KEY (order_item_id)
    CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders (order_id),
    CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE categories (
    category_id MEDIUMINT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    CONSTRAINT pk_categories PRIMARY KEY (category_id)
);

-- ALTER TABLE products
-- ADD COLUMN category_id MEDIUMINT,
-- ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(category_id);

-- CREATE TABLE product_images (
--     image_id INT AUTO_INCREMENT PRIMARY KEY,
--     product_id INT,
--     image_url VARCHAR(255) NOT NULL,
--     CONSTRAINT FOREIGN KEY (product_id) REFERENCES products(product_id)
-- );

ALTER TABLE users
ADD COLUMN lName VARCHAR(20) NOT NULL
ADD COLUMN lName;

CREATE TABLE cart (
    cart_id MEDIUMINT AUTO_INCREMENT,
    user_id MEDIUMINT,
    product_id MEDIUMINT,
    quantity MEDIUMINT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_cart PRIMARY KEY (cart_id),
    CONSTRAINT users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT products FOREIGN KEY (product_id) REFERENCES products(product_id)
);


SELECT 
    c.cart_id, 
    c.quantity, 
    u.username, 
    p.name
FROM 
    cart c
JOIN
    user u USING (user_id)
JOIN 
    product p USING (product_id);

SELECT
    c.cart_id,
    c.quantity,
    u.username,
    p.name
FROM
    cart c
JOIN
    user u USING (user_id)
JOIN
    product p USING (product_id);
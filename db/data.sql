
INSERT INTO Users (username, email, password) VALUES 
('john_doe', 'john@example.com', 'password_hash1'),
('jane_smith', 'jane@example.com', 'password_hash2');

UPDATE users SET fName = 'jane' WHERE user_id = 2
UPDATE users SET lName = 'smith' WHERE user_id = 2;


INSERT INTO Categories (name) VALUES 
('Shirts'),
('Pants'),
('Shoes'),
('Accessories');


INSERT INTO Products (name, description, price, category, stock, image_url, category_id) VALUES 
('Cool Shirt', 'A very cool shirt.', 19.99, 'Shirts', 100, 'shirt1.jpg', 1),
('Stylish Pants', 'Very stylish pants.', 49.99, 'Pants', 50, 'pants1.jpg', 2),
('Running Shoes', 'Comfortable running shoes.', 79.99, 'Shoes', 75, 'shoes.jpg', 3),
('Leather Belt', 'A genuine leather belt.', 29.99, 'Accessories', 200, 'belt.jpg', 4);

INSERT INTO cart (user_id, product_id, quantity) VALUES 
(1, 1, 2),
(1, 3, 1),
(2, 2, 1),
(2, 4, 2);

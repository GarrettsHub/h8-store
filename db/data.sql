
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

INSERT INTO Product (name, description, price, category, stock, image_url, category_id) VALUES 
('Chrome Heart', 'A unique shirt that will help you stand out in crowds', 49.99, 'Shirts', 15, 'chrome.jpg', 1),
('Anti Social', 'A shirt for those who like to be to themselves by choice or not', 29.99, 'Shirts', 80, 'chrome.jpg', 1),
('Flower', 'Jeans for those who want to fell a little special at times', 49.99, 'Pants', 80, 'flower.jpg', 2),
('Gospel', 'Gospel sweats that will have you feeling the holy ghost', 49.99, 'Pants', 80, 'gospel.jpg', 2),
('Rhule', 'Summer shorts to make you hotter than the sun', 29.99, 'Pants', 30, 'rhule.jpg', 2),
('Air Max 90', 'Shoes for the strong', 99.99, 'Shoes', 20, 'airmax.jpg', 3),
('Air Force 1', 'The ol reliable that will get you everywhere', 99.99, 'Shoes', 20, 'airforce.jpg', 3),
('Air Max 90', 'Shoes for the strong', 99.99, 'Shoes', 20, 'airmax.jpg', 3),
('Air Max 90', 'Shoes for the strong', 99.99, 'Shoes', 20, 'airmax.jpg', 3),
('MF DOOM Ring', 'Make sure its all caps when you spell the mans name', 9.99, 'Accessories', 20, 'doom.jpg', 4),
('Beanie', 'Kepp the head warm in style', 4.99, 'Accessories', 200, 'beanie.jpg', 4),
('True Religion', 'Express yourself with this vintage true religon crew neck', 49.99, 'Shirts', 50, 'true.jpg', 1);

INSERT INTO cart (user_id, product_id, quantity) VALUES 
(1, 1, 2),
(1, 3, 1),
(2, 2, 1),
(2, 4, 2);

UPDATE Product SET image_url = 'anti.jpg' WHERE product_id = 6;
UPDATE Product SET image_url = 'airjor1.jpg' WHERE product_id = 12;
UPDATE Product SET name = 'Air Jordan 1' WHERE product_id = 12;
UPDATE Product SET name = 'Nike Dunks' WHERE product_id = 13;


SELECT 
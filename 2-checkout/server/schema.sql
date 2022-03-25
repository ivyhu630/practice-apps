CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users(
  user_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  session_ID VARCHAR(20) DEFAULT(''),
  dt_created DATETIME DEFAULT (CURRENT_DATE)
);

CREATE TABLE userInfo(
  userInfo_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `address` VARCHAR(255) NOT NULL,
  city VARCHAR(15) NOT NULL,
  `state` VARCHAR(15) NOT NULL,
  zip VARCHAR(10) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  dt_created DATETIME DEFAULT (CURRENT_DATE),
  userInfo_user_ID INT NOT NULL,
  FOREIGN KEY(userInfo_user_ID) REFERENCES users(user_ID)
);

CREATE TABLE billing(
  billing_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  card_number VARCHAR(20) NOT NULL,
  expiration DATE NOT NULL,
  CVV VARCHAR(10) NOT NULL,
  billing_zip VARCHAR(15) NOT NULL,
  dt_created DATETIME DEFAULT (CURRENT_DATE),
  billing_user_ID INT NOT NULL,
  FOREIGN KEY(billing_user_ID) REFERENCES users(user_ID)
);

INSERT INTO users (name, email, password)
  VALUES
    ('Ivy', 'ajianouc@gmail.com', '1234'),
    ('Zach', 'zap@gmail.com', '1234');

INSERT INTO userInfo (address, city, state, zip, phone, userInfo_user_ID)
  VALUES
    ('55 Bush ST', 'San Jose', 'CA', '95126', '312-000-0000', '1'),
    ('55 Bush ST', 'San Jose', 'CA', '95126', '312-000-0000', '2');

--  mysql -u root < server/schema.sql
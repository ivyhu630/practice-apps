CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users(
  user_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(20) NOT NULL,
  session_id VARCHAR(100) DEFAULT(''),
  stage INT NOT NULL DEFAULT(0),
  dt_created DATETIME DEFAULT (CURRENT_DATE)
);

CREATE TABLE userInfo(
  userInfo_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `address1` VARCHAR(255) NOT NULL,
  `address2` VARCHAR(255) NOT NULL,
  city VARCHAR(15) NOT NULL,
  `state` VARCHAR(15) NOT NULL,
  zip VARCHAR(10) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  dt_created DATETIME DEFAULT (CURRENT_DATE),
  userInfo_user_ID INT NOT NULL UNIQUE,
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

INSERT INTO users (name, email, password, session_id)
  VALUES
    ('Ivy', 'ajianouc@gmail.com', '1234', '4f89897e-23ab-4858-ad20-1dddc55a9361'),
    ('Zach', 'zap@gmail.com', '1234', '4f89897e-23ab-4858-ad20-1dddc55a9362');

-- INSERT INTO userInfo (address, city, state, zip, phone, userInfo_user_ID)
--   VALUES
--     ('55 Bush ST', 'San Jose', 'CA', '95126', '312-000-0000', '1'),
--     ('55 Bush ST', 'San Jose', 'CA', '95126', '312-000-0000', '2');

--  mysql -u root < server/schema.sql
--------------------------------------------------------------------------------------------------
-- POSTGRESQL COMMON COMMANDS
--------------------------------------------------------------------------------------------------

-- help
\?

-- list databases
\l

-- change database
\c database_name

-- create database
CREATE DATABASE database_name;

-- drop database
DROP DATABASE database_name;

-- create table
CREATE TABLE table_name(
    column_name type constraint
    ...
);

-- drop table
DROP TABLE table_name

--------------------------------------------------------------------------------------------------
-- PROJECT COMMANDS
--------------------------------------------------------------------------------------------------

------------------------------------------------
-- USERS
------------------------------------------------

-- create users table
CREATE TABLE users(
  user_email TEXT PRIMARY KEY,
  user_password TEXT NOT NULL,
  user_username VARCHAR(10) UNIQUE NOT NULL
);

-- insert into user table
INSERT INTO users (user_email, user_password, user_username)
VALUES(
  ...
);

-- get a specific user's information
SELECT * FROM users where user_email = '...';

------------------------------------------------
-- ITEMS
------------------------------------------------

-- create items table
CREATE TABLE items(
  item_id SERIAL PRIMARY KEY,
  item_category VARCHAR(20) NOT NULL,
  item_name VARCHAR(50) UNIQUE NOT NULL,
  item_price VARCHAR(10) NOT NULL,
  item_description VARCHAR(500) NOT NULL,
  item_sizes INT [] NOT NULL,
  item_attributes TEXT [] NOT NULL
);

-- insert into item table
INSERT INTO items (item_category, item_name, item_price, item_description, item_sizes, item_attributes)
VALUES (
  ...
);

-- select all items
SELECT * FROM items;

-- select items from a category
SELECT
  item_name,
  item_price,
  item_sizes
FROM items WHERE item_category = '...';

-- select specific item
SELECT
  item_name,
  item_price,
  item_description,
  item_sizes,
  item_attributes
FROM items;

------------------------------------------------
-- USERS <-> ITEMS
------------------------------------------------

-- create users <-> items relationship table
CREATE TABLE users_items(
  r_user_email TEXT NOT NULL,
  r_item_id SERIAL NOT NULL,
  r_item_quantity INT NOT NULL
  PRIMARY KEY(r_user_email, r_item_id)
);

-- create user <-> item relationship

INSERT INTO users_items (r_user_email, r_item_id)
VALUES (
  ...
);

-- select all user <-> item relationships
SELECT
  *
FROM users AS u
JOIN users_items AS ui ON u.user_email = ui.r_user_email
JOIN items AS i ON ui.r_item_id = i.item_id;

-- select specific user <-> item relationships
SELECT
  *
FROM users AS u
JOIN users_items AS ui ON u.user_email = ui.r_user_email
JOIN items AS i ON ui.r_item_id = i.item_id
WHERE user_email = '...';
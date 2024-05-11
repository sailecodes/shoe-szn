import pg from "pg";

const initDB = async () => {
  // NOTE: add Pool init

  await db.query("DROP TABLE IF EXISTS users");
  await db.query("DROP TABLE IF EXISTS items");
  await db.query("DROP TABLE IF EXISTS users_items");

  await db.query(`
    CREATE TABLE users(
      user_email TEXT PRIMARY KEY,
      user_password TEXT NOT NULL,
      user_username VARCHAR(10) UNIQUE NOT NULL
    )
  `);
  await db.query(`
    CREATE TABLE items(
      item_id SERIAL PRIMARY KEY,
      item_category VARCHAR(20) NOT NULL,
      item_name VARCHAR(50) UNIQUE NOT NULL,
      item_price VARCHAR(10) NOT NULL,
      item_description VARCHAR(500) NOT NULL,
      item_sizes INT [] NOT NULL,
      item_attributes TEXT [] NOT NULL
    )
  `);
  await db.query(`
    CREATE TABLE users_items(
      r_user_email TEXT NOT NULL,
      r_item_id SERIAL NOT NULL,
      r_item_quantity INT NOT NULL,
      PRIMARY KEY(r_user_email, r_item_id)
    )
  `);

  await db.query(`
    INSERT INTO items (item_category, item_name, item_price, item_description, item_sizes, item_attributes)
    VALUES
      ('Casual', 'Dinosaur Slippers', '$99.99', 'Description', ARRAY [7, 8, 10], ARRAY ['One-of-a-kind']),
      ('Casual', 'Yeezy Crocs', '$99.99', 'Description', ARRAY [12], ARRAY ['Eco-friendly', 'Long-lasting']),
      ('Casual', 'Gear Fosu', '$99.99', 'Description', ARRAY [9, 11], ARRAY ['Long-lasting']),
      ('Casual', 'Anh Yeu Em', '$99.99', 'Description', ARRAY [8, 9, 10], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Casual', 'Cloud 9', '$99.99', 'Description', ARRAY [10], ARRAY ['Eco-friendly']),
      ('Streetwear', 'A2', '$99.99', 'Description', ARRAY [8], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Streetwear', 'B2', '$99.99', 'Description', ARRAY [9], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Streetwear', 'C2', '$99.99', 'Description', ARRAY [10], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Streetwear', 'D2', '$99.99', 'Description', ARRAY [11], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Streetwear', 'E2', '$99.99', 'Description', ARRAY [12], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Comfy', 'A3', '$99.99', 'Description', ARRAY [8], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Comfy', 'B3', '$99.99', 'Description', ARRAY [9], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Comfy', 'C3', '$99.99', 'Description', ARRAY [10], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Comfy', 'D3', '$99.99', 'Description', ARRAY [11], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Comfy', 'E3', '$99.99', 'Description', ARRAY [12], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Community Picks', 'A4', '$99.99', 'Description', ARRAY [8], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Community Picks', 'B4', '$99.99', 'Description', ARRAY [9], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Community Picks', 'C4', '$99.99', 'Description', ARRAY [10], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Community Picks', 'D4', '$99.99', 'Description', ARRAY [11], ARRAY ['One-of-a-kind', 'Eco-friendly']),
      ('Community Picks', 'E4', '$99.99', 'Description', ARRAY [12], ARRAY ['One-of-a-kind', 'Eco-friendly'])
  `);
};

initDB();

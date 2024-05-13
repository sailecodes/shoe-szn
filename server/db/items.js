import { db } from "./connectDB.js";

export const getAllItems = async () => {
  const { rows } = await db.query("SELECT * FROM items");

  return rows;
};

export const getTopItemsFromCategory = async (itemCategory) => {
  const { rows } = await db.query(
    `
      SELECT
        item_id,
        item_name,
        item_price
      FROM items
      WHERE item_category = $1
    `,
    [itemCategory]
  );

  return rows;
};

export const getAllItemsFromCategory = async (itemCategory, pageNumber) => {
  const { rows } = await db.query(
    `
      SELECT
        item_id,
        item_name,
        item_price,
        item_sizes
      FROM items
      WHERE item_category = $1
      LIMIT 4
      OFFSET $2
    `,
    [itemCategory, pageNumber * 4]
  );

  return rows;
};

// TODO: Check if item with `itemId` exists
export const getItem = async (itemId) => {
  const { rows } = await db.query(
    `
      SELECT
        item_id,
        item_name,
        item_price,
        item_description,
        item_sizes,
        item_attributes
      FROM items
      WHERE item_id = $1
    `,
    [itemId]
  );

  // if (!rows[0]) throw ...

  return rows[0];
};

export const getUserCartItems = async (userEmail) => {
  const { rows } = await db.query(
    `
      SELECT
        item_id,
        item_name,
        item_price,
        r_item_quantity
      FROM users AS u
      JOIN users_items AS ui ON u.user_email = ui.r_user_email
      JOIN items AS i ON ui.r_item_id = i.item_id
      WHERE user_email = $1
    `,
    [userEmail]
  );

  return rows;
};

export const addItemToUserCart = async (userEmail, itemId, itemQuantity) => {
  await db.query(
    `
      INSERT INTO users_items
        (r_user_email, r_item_id, r_item_quantity)
      VALUES
        ($1, $2, $3)
    `,
    [userEmail, itemId, itemQuantity]
  );

  return true;
};

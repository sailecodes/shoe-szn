import { db } from "./dbConnection.js";

export const getAllItems = async () => {
  const { rows } = await db.query("SELECT * FROM items");

  return rows;
};

export const getAllItemsFromCategory = async (itemCategory) => {
  const { rows } = await db.query("SELECT * FROM items where item_category = $1", [itemCategory]);

  return rows;
};

// TODO: Check if item with `itemId` exists
export const getItem = async (itemId) => {
  const { rows } = await db.query("SELECT * FROM items where item_id = $1", [itemId]);

  return rows[0];
};

export const getUserItems = async (userEmail) => {
  const { rows } = await db.query(
    `
      SELECT *
      FROM users AS u
      JOIN users_items AS ui ON u.user_email = ui.r_user_email
      JOIN items AS i ON ui.r_item_id = i.item_id
      WHERE user_email = $1
    `,
    [userEmail]
  );

  return rows;
};

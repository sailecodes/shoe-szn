import { db } from "./dbConnection.js";

export const getAllItems = async () => {
  const { rows } = await db.query("SELECT * FROM items");

  return rows;
};

export const getAllItemsFromCategory = async (category) => {
  const { rows } = await db.query("SELECT * FROM items where item_category = $1", [category]);

  return rows;
};

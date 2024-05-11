import { getAllItems, getAllItemsFromCategory, getItem, getUserCartItems } from "../../db/items.js";

export const resolvers = {
  Query: {
    helloWorld: (_parent, _args, _context) => {
      return "Hello World!";
    },
    getAllItems: async (_parent, _args, _context) => {
      return await getAllItems();
    },
    getAllItemsFromCategory: async (_parent, { itemCategory, pageNumber }, _context) => {
      return await getAllItemsFromCategory(itemCategory, pageNumber);
    },
    getItem: async (_parent, { itemId }, _context) => {
      return await getItem(itemId);
    },
    getUserCartItems: async (_parent, { userEmail }, _context) => {
      return await getUserCartItems(userEmail);
    },
  },
  User: {},
  Item: {},
};

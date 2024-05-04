import { getAllItems, getAllItemsFromCategory, getItem, getUserCartItems } from "../../db/items.js";

export const resolvers = {
  Query: {
    helloWorld: (_parent, _args, _context) => "Hello World!",
    getAllItems: async (_parent, _args, _context) => await getAllItems(),
    getAllItemsFromCategory: async (_parent, { itemCategory }, _context) => await getAllItemsFromCategory(itemCategory),
    getItem: async (_parent, { itemId }, _context) => await getItem(itemId),
    getUserCartItems: async (_parent, { userEmail }, _context) => await getUserCartItems(userEmail),
  },
  User: {},
  Item: {},
};

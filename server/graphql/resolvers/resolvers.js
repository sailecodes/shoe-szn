import { getAllItems, getAllItemsFromCategory } from "../../db/items.js";

export const resolvers = {
  Query: {
    helloWorld: (_parent, _args, _context) => "Hello World!",
    getAllItems: async (_parent, _args, _context) => await getAllItems(),
    getAllItemsFromCategory: async (_parent, { category }, _context) => await getAllItemsFromCategory(category),
  },
  User: {},
  Item: {},
};

import {
  getAllItems,
  getAllItemsFromCategory,
  getItem,
  getShowcaseItemsFromCategory,
  getUserCartItems,
  addItemToUserCart,
} from "./itemResolvers.js";
import { signup, login } from "./authResolvers.js";
import { verifyAuthentication } from "../../utils/authUtils.js";

export const resolvers = {
  Query: {
    helloWorld: (_parent, _args, { req }) => {
      console.log(req.cookies);

      // const { cookies } = req;

      // console.log(cookies);

      // verifyAuthentication(token);

      return "Hello World!";
    },
    getAllItems: async (_parent, _args, _context) => {
      return await getAllItems();
    },
    getShowcaseItemsFromCategory: async (_parent, { itemCategory }, _context) => {
      return await getShowcaseItemsFromCategory(itemCategory);
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
  Mutation: {
    signup: (_parent, { email, password, username }, _context) => {
      return signup(email, password, username);
    },
    login: (_parent, { email, password }, { res }) => {
      return login(email, password, res);
    },
    test: (_parent, _args, { req: { cookies } }) => {
      const { token } = cookies;

      verifyAuthentication(token);

      return "Hello World!";
    },
  },
};

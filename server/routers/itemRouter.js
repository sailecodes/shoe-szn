import { Router } from "express";
import { validateItemToAdd } from "../middleware/validationMiddleware.js";
import { addItemToCart, removeItemFromCart } from "../controllers/itemController.js";

const itemRouter = Router();

itemRouter.route("/add").post(validateItemToAdd, addItemToCart);
itemRouter.route("/remove").delete(removeItemFromCart);

export default itemRouter;

import { StatusCodes } from "http-status-codes";
import itemModel from "../models/itemModel.js";
import userModel from "../models/userModel.js";

export const addItemToCart = async (req, res) => {
  const user = await userModel.findById(req.userInfo.userId);
  const item = await itemModel.create(req.body);

  user.cart.push(item._id);

  await user.save();

  res
    .status(StatusCodes.OK)
    .json({ msg: "(Server message) Item successfully added to cart", data: { itemId: item._id } });
};

// Note: Alternatively can use param instead of body for the item id
export const removeItemFromCart = async (req, res) => {
  const user = await userModel.findById(req.userInfo.userId);
  user.cart = user.cart.filter((itemId) => itemId.toString() !== req.body.itemId.toString());

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "(Server message) Item successfully removed from cart" });
};

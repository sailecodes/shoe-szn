import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  await userModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "(Server message) User successfully registered" });
};

export const login = async (req, res) => {
  const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 86400000),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "(Server message) User successfully logged in" });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: "(Server message) User successfully logged out" });
};

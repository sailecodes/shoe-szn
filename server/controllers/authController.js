import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import { UnauthenticatedError } from "../errors/errors.js";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  await userModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "(Server message) User successfully registered" });
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};

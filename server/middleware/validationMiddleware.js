import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { param, body, cookie, validationResult } from "express-validator";
import userModel from "../models/userModel.js";
import { BadRequestError, UnauthenticatedError } from "../errors/errors.js";

const validate = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("Authentication")) throw new UnauthenticatedError("Authentication is invalid");
        else throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

// ==============================================
// General validation
// ==============================================

export const validateUser = validate([
  cookie("token").custom((token, { req, res }) => {
    if (!token) throw new UnauthenticatedError("Authentication is invalid");

    try {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      if (!mongoose.Types.ObjectId.isValid(userId)) throw new UnauthenticatedError("Authentication is invalid");

      req.userInfo = { userId };

      return true;
    } catch (error) {
      throw new UnauthenticatedError("Authentication is invalid");
    }
  }),
]);

// ==============================================
// Auth validation
// ==============================================

export const validateRegisterInput = validate([
  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .bail()
    .custom(async (email) => {
      if (await userModel.findOne({ email })) throw new BadRequestError("Email already exists");
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be a minimum 8 characters"),
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .bail()
    .isLength({ max: 8 })
    .withMessage("Username must be a maximum 8 characters")
    .bail()
    .custom(async (username) => {
      if (await userModel.findOne({ username })) throw new BadRequestError("Username already exists");
    }),
]);

export const validateLoginInput = validate([
  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .bail()
    .custom(async (email, { req, res }) => {
      const user = await userModel.findOne({ email });

      if (!user) throw new UnauthenticatedError(`User with email '${email}' does not exist`);

      req.user = user;
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .custom(async (password, { req, res }) => {
      if (!(await bcrypt.compare(password, req.user.password))) throw new UnauthenticatedError("Password is incorrect");
    }),
]);

// ==============================================
// Item validation
// ==============================================

export const validateItemToAdd = validate([
  body("name").notEmpty().withMessage("Name is required"),
  body("price").notEmpty().withMessage("Price is required"),
  body("size").notEmpty().withMessage("Size is required"),
]);

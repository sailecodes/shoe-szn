import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { customGQLError } from "../errors/customGQLError.js";

export const generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

export const generateJwtCookie = (userEmail, res) => {
  const token = jwt.sign({ userEmail: userEmail }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === "production",
  });
};

export const verifyAuthentication = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw customGQLError("An error occurred");
  }
};

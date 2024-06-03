import bcrypt from "bcryptjs";
import { db } from "../../db/connectDB.js";
import { generateHashedPassword, generateJwtCookie } from "../utils/authUtils.js";
import { customGQLError } from "../errors/customGQLError.js";

export const signup = async (email, password, username) => {
  await db.query(
    `
      INSERT INTO users
        (user_email, user_password, user_username)
      VALUES
        ($1, $2, $3)
    `,
    [email, generateHashedPassword(password), username]
  );

  return true;
};

export const login = async (email, password, res) => {
  const user = await userModel.findOne({ email });

  if (!user) throw customGQLError(`No user with email ${email} found`);

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) throw customGQLError(`Password is incorrect`);

  generateJwtCookie(user._id, res);

  return true;
};

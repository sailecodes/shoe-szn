import bcrypt from "bcryptjs";
import { db } from "../../db/connectDB.js";
import { generateHashedPassword, generateJwtCookie } from "../../utils/authUtils.js";
import { customGQLError } from "../../errors/customGQLError.js";

export const signup = async (email, password, username) => {
  await db.query(
    `
      INSERT INTO users
        (user_email, user_password, user_username)
      VALUES
        ($1, $2, $3)
    `,
    [email, await generateHashedPassword(password), username]
  );

  return true;
};

export const login = async (email, password, res) => {
  const { rows } = await db.query(
    `
      SELECT * FROM users
      WHERE user_email = $1
    `,
    [email]
  );
  const user = rows[0];

  // FIXME: Not showing error message
  if (!user) throw customGQLError(`No user with email ${email} found`);

  const isCorrectPassword = await bcrypt.compare(password, user.user_password);

  if (!isCorrectPassword) throw customGQLError(`Password is incorrect`);

  generateJwtCookie(user.user_email, res);

  return true;
};

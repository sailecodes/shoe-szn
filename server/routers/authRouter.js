import { Router } from "express";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";
import { login, logout, register } from "../controllers/authController.js";

const authRouter = Router();

authRouter.route("/register").post(validateRegisterInput, register);
authRouter.route("/login").post(validateLoginInput, login);
authRouter.route("/logout").get(logout);

export default authRouter;

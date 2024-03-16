import { Router } from "express";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";

const authRouter = Router();

authRouter.route("/register").post(validateRegisterInput);
authRouter.route("/login").post(validateLoginInput);
authRouter.route("/logout");

export default authRouter;

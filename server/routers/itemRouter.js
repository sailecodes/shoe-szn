import { Router } from "express";

const itemRouter = Router();

itemRouter.route("/add").post();
itemRouter.route("/remove").delete();

export default itemRouter;

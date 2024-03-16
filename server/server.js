import "express-async-errors";
import * as dotenv from "dotenv";
import express from "express";
import url from "url";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import { StatusCodes } from "http-status-codes";
import { dirname } from "path";

import errorMiddleware from "./middleware/errorMiddleware.js";
import authRouter from "./routers/authRouter.js";
import itemRouter from "./routers/itemRouter.js";

// ==============================================
// Initialization
// ==============================================

dotenv.config();

const app = express();
const port = process.env.PORT || 5100;

// ==============================================
// Middleware
// ==============================================

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

// ==============================================
// Routes
// ==============================================

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "(Server message) Server is properly functioning" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/item", itemRouter); // Note: Restricted route

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "(Server message) Route does not exist" });
});

app.use(errorMiddleware); // Executes for any error that occurs during a route

// ==============================================
// Server initialization
// ==============================================

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`(Server message) Server is listening on port ${port}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}

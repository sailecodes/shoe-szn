import "express-async-errors";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { readFile } from "node:fs/promises";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "./graphql/resolvers/resolvers.js";

// ==============================================
// Initialization
// ==============================================

dotenv.config();
const app = express();
const port = process.env.PORT || 5100;
const typeDefs = await readFile("./graphql/schemas/schema.graphql", "utf-8");
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// ==============================================
// Middleware
// ==============================================

app.use(
  express.json(),
  cookieParser(),
  helmet(),
  cors({
    origin: ["https://studio.apollographql.com", "http://localhost:5173"],
    credentials: true,
  })
);

// ==============================================
// Routes
// ==============================================

app.get("/", (req, res) => {
  res.status(200).json({ msg: "[Server message] Server is properly functioning" });
});

// ==============================================
// Port information
// ==============================================

app.listen(port, () => {
  console.log(`[Server message] Server is listening on port ${port}`);
});

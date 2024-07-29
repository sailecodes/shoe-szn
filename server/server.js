import "express-async-errors";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import url from "url";
import path from "path";
import http from "http";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { resolvers } from "./graphql/resolvers/resolvers.js";
import { typeDefs } from "./graphql/schemas/schema.js";

// ===============================================================================================
// Initialization
// ===============================================================================================

dotenv.config();

const app = express();
const port = process.env.PORT || 5300;
const __dirname = dirname(url.fileURLToPath(import.meta.url));

const httpServer = http.createServer(app);
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await apolloServer.start();

// ===============================================================================================
// General middleware
// ===============================================================================================

app.use(express.static(path.resolve(__dirname, "./public")));

// ===============================================================================================
// Routes
// ===============================================================================================

app.get("/", async (req, res) => {
  res.status(200).json({ data: "[Server message] Server is properly functioning" });
});

app.use(
  "/graphql",
  express.json(),
  cookieParser(),
  cors({
    origin: ["http://localhost:5200", "http://localhost:5173"],
    credentials: true,
  }),
  expressMiddleware(apolloServer, {
    context: ({ req, res }) => ({ req, res }),
  })
);

// ===============================================================================================
// Port information
// ===============================================================================================

await new Promise((res) => httpServer.listen({ port }, res));
console.log(`[Server message] Server is listening on port ${port}`);

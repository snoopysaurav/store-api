import express from "express";
import dotenv from "dotenv";
import "express-async-errors";

// Configurations
dotenv.config();

import notFoundMiddleware from "./middlewares/not-found.js";
import { errorHandlerMiddleware } from "./middlewares/error-handler.js";
import { connectDB } from "./db/connect.js";
import { router } from "./routes/products.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="api/v1/products">products route</a>`);
});

// Products route
app.use("/api/v1/products", router);

// Error Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Start Server
const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Running at ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

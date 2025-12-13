import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import connectDB from "../config/connectDB.ts";

import userRouter from "../routes/userRoute.ts";
import errorHandler from "../middlewares/error.ts";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Routes Middleware
app.use("/api/user", userRouter);

const port = process.env.PORT || 8000;

(async function () {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.log("Failed to connect Database, Server is shutting down...");
    process.exit(1);
  }
})();

app.use(errorHandler);

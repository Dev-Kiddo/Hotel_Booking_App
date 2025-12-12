import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

import type { Request, Response } from "express";

import userRouter from "../routes/userRoute.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes Middleware
app.use("/api/v1", userRouter);

const connectDB = async function () {
  try {
    const data = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`Database ${data.connection.host} connected successfully`);
  } catch (error) {
    console.log(error.message);
  }
};

connectDB();

// Endpoint
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({
    message: "Hello from express endpoint",
  });
});

const port = 7000;
app.listen(port, () => {
  console.log("Server running on Port:", port);
});

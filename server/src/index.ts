import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";

import type { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

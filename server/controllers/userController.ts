import type { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel.ts";
import AppError from "../utils/AppError.ts";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

interface UserPayload extends jwt.JwtPayload {
  userId: string;
  role: string;
}

export const registerUser = async function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.json(errors);
  } else {
    res.send("Successfully validated");
  }

  let user = await userModel.findOne({ email: req.body.email });

  if (user) {
    return next(new AppError("User already exists. Please sign in", 400, true)); //400 means - frontend declines request
  }

  user = new userModel(req.body);

  const payload: UserPayload = {
    userId: user!._id,
    role: user!.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1d" });

  res.cookie("accessToken", token, { maxAge: 86400000, httpOnly: true, secure: process.env.NODE_ENV === "production" });

  await user.save();

  return res.status(200).json({
    success: true,
    message: "User registered successfully",
    user,
  });
};

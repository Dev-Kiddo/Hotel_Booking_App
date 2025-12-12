import express from "express";
import { registerUser } from "../controllers/userController.ts";
import { check } from "express-validator";

const router = express.Router();

router
  .route("/register")
  .post(
    [
      check("firstName", "First Name is required").isString(),
      check("lastName", "Last Name is required").isString(),
      check("email", "Email is required").isEmail(),
      check("password", "Password length should be 4 to 10 characters").isLength({ min: 4, max: 10 }),
    ],
    registerUser
  );

export default router;

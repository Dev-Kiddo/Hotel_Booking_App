import express from "express";
import { loginUser, registerUser } from "../controllers/userController.ts";
import { check } from "express-validator";
import auth from "../middlewares/auth.ts";

const router = express.Router();

router
  .route("/register")
  .post(
    [
      check("firstName", "First Name is required").isString(),
      check("lastName", "Last Name is required").isString(),
      check("email", "Email is required").isEmail(),
      check("password", "Password length should be morethan 4 characters").isLength({ min: 4 }),
    ],
    registerUser
  );

router
  .route("/login")
  .post([check("email", "email is required").isEmail(), check("password", "Password length should be morethan 4 characters").isLength({ min: 4 })], auth, loginUser);

export default router;

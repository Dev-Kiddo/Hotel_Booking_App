import type { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError.ts";
import jwt from "jsonwebtoken";

interface DecodedToken extends jwt.JwtPayload {
  userId: string;
  role: string;
}

const auth = function (req: Request, res: Response, next: NextFunction) {
  const { accessToken } = req.cookies;
  //   console.log(accessToken);

  if (!accessToken) {
    return next(new AppError("Authentication missing. Please login again!", 400, true));
  }

  const DecodedToken = jwt.verify(accessToken, process.env.JWT_SECRET as string) as DecodedToken;

  if (!DecodedToken) {
    return next(new AppError("Authentication expired, Please login again!", 400, true));
  }

  req.user = DecodedToken.userId;

  next();
};

export default auth;

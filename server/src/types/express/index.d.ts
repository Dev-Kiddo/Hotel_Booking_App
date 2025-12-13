import { Types } from "mongoose";

//We must extend the Express Request type globally.This is called Declaration Merging.
declare global {
  namespace Express {
    interface Request {
      user?: string | Types.ObjectId;
    }
  }
}

export {};

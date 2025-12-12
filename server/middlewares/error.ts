import type { Request, Response, NextFunction } from "express";

interface CustomErr {
  statusCode?: number;
  message?: string;
  isOperational?: boolean;
  stack?: string;
}

const errorHandler = function (err: CustomErr, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack || err); // debugging

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;

import { Request, Response, NextFunction } from "express";

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json('error bro')
}
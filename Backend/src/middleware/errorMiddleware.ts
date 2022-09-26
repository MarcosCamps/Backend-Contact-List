import { NextFunction, Request, Response } from "express";
import CodeError from "../errors/CodeError";

export default (err: CodeError, req: Request, res: Response, next: NextFunction) => {
  const { code, message } = err;
  res.status(code || 500).json({ message });
}
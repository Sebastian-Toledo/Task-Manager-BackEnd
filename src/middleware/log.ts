import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("hola soy el LOG");
  next();
};

export { logMiddleware };

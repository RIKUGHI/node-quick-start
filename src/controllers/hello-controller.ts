import { Request, Response, NextFunction } from "express";
import { HelloService } from "../app/services/hello-service";

export class HelloController {
  static hello(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(HelloService.getHello())
    } catch (e) {
      next(e)
    }
  }
}
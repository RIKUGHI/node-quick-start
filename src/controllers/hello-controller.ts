import { NextFunction, Request, Response } from "express";
import { HelloService } from "../services/hello-service";

export class HelloController {
  static hello(req: Request, res: Response, next: NextFunction) {
    res.status(200).json(HelloService.getHello())
  }
}
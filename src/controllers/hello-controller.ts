import { NextFunction, Request, Response } from "express";
import { IHelloService } from "../interfaces/hello-service";

export class HelloController {
  private service: IHelloService

  constructor(service: IHelloService) {
    this.service = service
  }

  onHello(req: Request, res: Response, next: NextFunction) {
    res.status(200).json(this.service.getHello())
  }
}
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IHelloService } from "../interfaces/hello-service";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class HelloController {
  private service: IHelloService

  constructor(
    @inject(INTERFACE_TYPE.HelloService) service: IHelloService
  ) {
    this.service = service
  }

  onHello(req: Request, res: Response, next: NextFunction) {
    res.status(200).json(this.service.getHello())
  }
}
import { injectable } from "inversify";
import { IHelloService } from "../interfaces/hello-service";

@injectable()
export class HelloService implements IHelloService {
  getHello(): string {
    return 'Hello World'
  }
}
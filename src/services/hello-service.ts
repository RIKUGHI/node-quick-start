import { IHelloService } from "../interfaces/hello-service";

export class HelloService implements IHelloService {
  getHello(): string {
    return 'Hello World'
  }
}
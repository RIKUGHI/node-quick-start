import express from 'express'
import { Container } from 'inversify'
import { HelloController } from '../controllers/hello-controller'
import { IHelloService } from '../interfaces/hello-service'
import { HelloService } from '../services/hello-service'
import { INTERFACE_TYPE } from '../utils'

const container = new Container()

container.bind<IHelloService>(INTERFACE_TYPE.HelloService).to(HelloService)
container.bind(INTERFACE_TYPE.HelloController).to(HelloController)

const publicRouter = express.Router()

const controller = container.get<HelloController>(INTERFACE_TYPE.HelloController)

publicRouter.get('/', controller.onHello.bind(controller))

export default publicRouter
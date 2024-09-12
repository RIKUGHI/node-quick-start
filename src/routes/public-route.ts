import express from 'express'
import { HelloController } from '../controllers/hello-controller'
import { HelloService } from '../services/hello-service'

const service = new HelloService()
const controller = new HelloController(service)

const publicRouter = express.Router()
publicRouter.get('/', controller.onHello.bind(controller))

export default publicRouter
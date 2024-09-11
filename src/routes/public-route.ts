import express from 'express'
import { HelloController } from '../controllers/hello-controller'

export const publicRouter = express.Router()
publicRouter.get('/', HelloController.hello)
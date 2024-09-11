import express from "express";
import { errorMiddleware } from "../middlewares/error-middleware";
import { publicRouter } from "../routes/public-route";
import { logger } from "./logger";

logger.info('Starting the server...')

export const web = express()
web.use(express.json())
web.use(publicRouter)
web.use(errorMiddleware)
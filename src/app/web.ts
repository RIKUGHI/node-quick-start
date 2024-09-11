import express from "express";
import { publicRouter } from "../routes/public-route";
import { errorMiddleware } from "../middlewares/error-middleware";

export const web = express()
web.use(express.json())
web.use(publicRouter)
web.use(errorMiddleware)
import { logger } from "./app/logger"
import web from "./app/web"

web.listen(3000, () => {
  logger.info('🚀 Server is listening on port: 3000')
})
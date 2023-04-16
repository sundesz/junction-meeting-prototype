import http from 'http'
import app from './app.js'
import config from './config.js'
import logger from './logger.js'

const server = http.createServer(app)

server.listen(config.PORT, () =>
  logger.info(`Server is running at ${config.PORT}`)
)

// mongodb+srv://sandesh:<password>@cluster0.xu9kp.mongodb.net/?retryWrites=true&w=majority

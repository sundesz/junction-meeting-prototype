import express from 'express'
import logger from './logger.js'
import middleware from './middleware/index.js'
import teamRouter from './api/routers/teamRouter.js'
import config from './config.js'
import mongoose from 'mongoose'
import memberRouter from './api/routers/memberRouter.js'
const app = express()

app.use(express.json())
app.use(express.static('dist'))

const connectMongoose = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI)
    logger.info('Connected to mongodb')
  } catch (err) {
    logger.error('Error connecting to mongodb: ', err.message)
  }
}

connectMongoose()

app.get('/', (req, res) => {
  res.send('<h1>Junction meeting prototype</h1>')
})

app.use('/api/v1/teams', teamRouter)
app.use('/api/v1/members', memberRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app

import logger from '../logger.js'

export const errorHandler = (err, req, res, next) => {
  logger.error(err)
  switch (err.name) {
    case 'TypeError':
      return res.status(400).json({ error: err.name })
    case 'CastError':
      return res.status(400).json({ error: 'malformatted id' })
    default:
      return res.status(400).json({ error: err.message })
  }
  next(err)
}

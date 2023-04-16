import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

let MONGODB_URI = ''

switch (process.env.NODE_ENV) {
  case 'prod':
    MONGODB_URI = process.env.MONGODB_URI
    break
  case 'dev':
    MONGODB_URI = process.env.MONGODB_URI_DEV
    break
  case 'test':
    MONGODB_URI = process.env.MONGODB_URI_TEST
}

export default { PORT, MONGODB_URI }

import * as mongoose from 'mongoose'
import config from './config'
import app from './app'

const server = async () => {
  try {
    await mongoose.connect(config.DATABASE as string)
    console.log(`🛢   Database is connected successfully`)

    app.listen(config.PORT, () => {
      console.log(`Application  listening on port ${config.PORT}`)
    })
  } catch (error) {
    console.log('Failed to connect database', error)
  }
}

server()

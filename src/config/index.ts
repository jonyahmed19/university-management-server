import dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE_URL,
  DEFAULT_PASS: process.env.DEFAULT_PASS,
}

import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev'
dotenv.config({ path: envFile})

const secret = process.env.APP_SECRET

export const makeToken = (user) => jwt.sign({ userId: user._id }, secret, { expiresIn: '365 days'})

export const parseToken = (token) => jwt.verify(token, secret)
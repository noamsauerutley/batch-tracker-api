const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
import { parseToken } from '../utils/tokenManager'
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function hashPassword(next){
    try {
      if (!this.isModified('password')) return next()
      
      const hashedPassword = await bcrypt.hash(this.password, 10)
      this.password = hashedPassword
    } catch (error) {
        next(error)
    }
}) 

UserSchema.methods.isCorrectPassword = async function(password) {
  const isCorrect = await bcrypt.compare(password, this.password)
  return isCorrect
  }

  UserSchema.statics.fromToken = async function fromToken(token){
      const { userId } = parseToken(token)
      const user = await this.findById(userId)
      return user
  }


module.exports = mongoose.model('User', UserSchema)

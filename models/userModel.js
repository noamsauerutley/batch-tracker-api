let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

let User = module.exports = mongoose.model('user', userSchema)

module.exports.get = (callback, limit) => {
    User.find(callback).limit(limit)
}
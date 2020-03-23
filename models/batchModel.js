let mongoose = require('mongoose')

let batchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: false
    },
    due_date: {
        type: Date,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

let Batch = module.exports = mongoose.model('batch', batchSchema)

module.exports.get = (callback, limit) => {
    Batch.find(callback).limit(limit)
}
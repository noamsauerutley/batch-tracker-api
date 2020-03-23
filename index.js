import express from 'express'
let routes = require('./routes')
let mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

mongoose.connect('mongodb://localhost/batchTrackerDB', {useNewUrlParser: true})

let db = mongoose.connection

if (!db){
  console.log("Error: unable to connect to db")
} else {
  console.log("Success: connected to db")
}

app.get('/', (request, response) => {
    response.status(200).send({
      success: 'true',
      message: 'success',
    })
  })

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

import express from 'express'

const app = express()
const PORT = 5000

// parse incoming request data
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.get('/', (request, response) => {
    response.status(200).send({
      success: 'true',
      message: 'success',
    })
  })

app.get('/batches', (request, response) => {
  response.status(200).send({
    success: 'true',
    message: 'success: retrieved all batches',
    // batches: db
  })
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

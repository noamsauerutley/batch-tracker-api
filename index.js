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

// app.post('/batches', (req, res) => {
//   if(!req.body.name) {
//     return res.status(400).send({
//       succes: 'false',
//       message: 'name is required'
//     })
//   } else if (!req.body.description){
//     return res.status(400).send({
//       success: 'false',
//       message: 'description is required'
//     })
//   }
//   const batch = {
//     id: db.length + 1,
//     title: req.body.title,
//     description: req.body.description
//   }
//   db.push(batch)
//   return res.status(201).send({
//     success: 'true', 
//     message: 'batch added successfully',
//     batch
//   })
// })
  


// app.get('/api/v1/batchs/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10)

//   db.map((batch) => {
//     if(batch.id === id){
//       return res.status(200).send({
//         success: 'true',
//         message: "success: retrieved batch",
//         batch,
//       })
//     }
//   })
//   return res.status(404).send({
//     success: 'false',
//     message: 'batch does not exist',
//   })
// })

// app.put('/api/v1/batchs/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10)
//   let batchFound
//   let itemIndex
//   db.map((batch, index) => {
//     if (batch.id === id) {
//       batchFound = batch
//       itemIndex = index
//     }
//   })
//   if (!batchFound){
//     return res.status(404).send({
//       success: 'false',
//       message: 'batch not found',
//     })
//   }
//   if (!req.body.title){
//     return res.status(400).send({
//       success: 'false',
//       message: 'title is required',
//     }) 
//   } else if (!req.body.description){
//     return res.status(400).send({
//       success: 'false',
//       message: 'description is required',
//     })
//   }
//   const updatedbatch = {
//     id: batchFound.id,
//     title: req.body.title || batchFound.title,
//     description: req.body.description || batchFound.description,
//   }
//   db.splice(itemIndex, 1, updatedbatch)

//   return res.status(201).send({
//     success: 'true',
//     message: 'success: updated batch',
//     updatedbatch
//   })
// })

// app.delete('/api/v1/batchs/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10)

//   db.map((batch, index) => {
//     if(batch.id === id) {
//       db.splice(index, 1)
//       return res.status(200).send({
//         success: 'true',
//         message: 'success: deleted batch'
//       })
//     }
//   })
//   return res.status(404).send({
//     success: 'false',
//     message: 'batch not found'
//   })
// })



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

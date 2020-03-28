const Batch = require('../models/Batch')

// all batches index read
exports.index = (request, response) => {
    Batch.get( (error, batches) => {
            if(error){
                    response.json({
                            status: "error",
                            message: error,
                        })
                    }
                    response.json({
                            status: "success",
                            message: "Success: Batches retrieved",
                            data: batches
                        })
                    })
}

// batch create
exports.new = (request, response) => {
    let batch = new Batch()
    batch.name = request.body.name ? request.body.name: batch.name
    batch.notes = request.body.notes
    batch.rating = request.body.rating
    batch.due_date = request.body.due_date
    batch.create_date = request.body.create_date

    batch.save( (error) => {
        if (error){
            response.json(error)
        }
        response.json({
            message: "Success: New batch created!",
            data: batch
        })
    })
}

// batch view read
exports.view = (request, response) => {
    Batch.findById(request.params.batch_id, (error, batch) => {
        if(error){
            response.send(error)
        }
        response.json({
            message: "Success: batch details loaded!",
            data: batch
        })
    })
}

// batch update
exports.update = (request, response) => {
    Batch.findById(request.params.batch_id, (error, batch) => {
        if(error){
            response.send(error)
        }
        batch.name = request.body.name ? request.body.name: batch.name
        batch.notes = request.body.notes
        batch.rating = request.body.rating
        batch.due_date = request.body.due_date
        batch.create_date = request.body.create_date

        batch.save((error) => {
            if (error) {
                response.json(eror)
            }
            response.json({
                message: "Success: batch info updated",
                data: batch
            })
        })
    })
}

// batch delete
exports.delete = (request, response) => {
    Batch.remove({
        _id: request.params.batch_id
    }, (error, batch) => {
        if (error){
            response.send(error)
        }
        response.json({
            status: "success",
            message: "batch deleted"
        })
    })
}

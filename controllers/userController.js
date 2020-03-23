const User = require('../models/userModel')

// all users index read
exports.index = (request, response) => {
    User.get( (error, users) => {
        if(error){
            response.json({
                status: "error",
                message: error,
            })
        }
        response.json({
            status: "success",
            message: "Success: Users retrieved",
            data: users
        })
    })
}

// user create
exports.new = (request, response) => {
    let user = new User()
    user.username = request.body.username ? request.body.username: user.username
    user.email = request.body.email

    user.save( (error) => {
        if (error){
            response.json(error)
        }
        response.json({
            message: "Success: New user created!",
            data: user
        })
    })
}

// user view read
exports.view = (request, response) => {
    User.findById(request.params.user_id, (error, user) => {
        if(error){
            response.send(error)
        }
        response.json({
            message: "User details loading...",
            data: user
        })
    })
}

// user update
exports.update = (request, response) => {
    User.findById(request.params.user_id, (error, user) => {
        if(error){
            response.send(error)
        }
        user.username = request.body.username ? request.body.username : user.username
        user.email = request.body.email

        user.save((error) => {
            if (error) {
                response.json(eror)
            }
            response.json({
                message: "Success: user info updated",
                data: user
            })
        })
    })
}

// user delete
exports.delete = (request, response) => {
    User.remove({
        _id: request.params.user_id
    }, (error, user) => {
        if (error){
            response.send(error)
        }
        response.json({
            status: "success",
            message: "user deleted"
        })
    })
}


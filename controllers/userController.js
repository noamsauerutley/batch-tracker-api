import { body, validationResult } from 'express-validator';
const User = require('../models/User')
import {makeToken} from '../utils/tokenManager'

export const validateSignupFunctions = [
	body('username'),
	body('username').notEmpty().withMessage('Username cannot be blank.'),
	body('password').notEmpty().withMessage('Password cannot be blank.'),
	body('confirmPassword').exists().custom((value, { req }) => value === req.body.password),
]


export const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		res.status(400).json({ errors })
		return // stop the fn from running
	}
	next()
}

// // all users index read
// exports.index = async (request, response) => {
//     User.find({}, (error, users) => {
//         if(error){
//             response.json({
//                 status: "error",
//                 message: error,
//             })
//         }
//         response.json({
//             status: "success",
//             message: "Success: Users retrieved",
//             data: users
//         })
//     })
// }

// user create
exports.new = async (request, response) => {
    const {username, password } = request.body

    if (!username || !password) throw new Error('username and password required')

    const user = new User({ username, password})

    await user.save()

    const token = makeToken(user)

    response.status(201).json({token})
   
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


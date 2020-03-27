import User from '../models/User'

exports.checkAuthHeader = async (request, response, next) => {
    try {
        const token = request.headers.authorization
        if (!token) throw new Error('Missing authorization header')
        const user = await User.fromToken(token)
        if (!user) throw new Error('Invalid authorization header')
        request.user = user
        next()
    } catch (error) {
       next(error) 
    }
}

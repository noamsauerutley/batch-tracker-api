// initialize express router
let router = require('express').Router()

// set default API response
router.get('/', (request, response) => {
    response.json({
        status: "Success: API is up",
        message: ":)"
    })
})

let userController = require('./controllers/userController')

router.route('/users')
    .get(userController.index)
    .post(userController.new)

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete)

module.exports = router

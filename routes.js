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
let batchController = require('./controllers/batchController')

router.route('/users')
    .get(userController.index)
    .post(userController.new)

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete)

router.route('/batches')
    .get(batchController.index)
    .post(batchController.new)

router.route('/batches/:batch_id')
    .get(batchController.view)
    .patch(batchController.update)
    .put(batchController.update)
    .delete(batchController.delete)

module.exports = router

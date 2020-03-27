// initialize express router
let router = require('express').Router()
const { checkAuthHeader } = require('./middleware/checks')

// set default API response
router.get('/', (request, response) => {
    response.json({
        status: "Success: API is up",
        message: ":)"
    })
})

const userController = require('./controllers/userController')
const batchController = require('./controllers/batchController')

router.route('/users')
    .get(checkAuthHeader, userController.index)
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

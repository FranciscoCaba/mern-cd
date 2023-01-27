const HelloController = require('../controllers/hello.controller')

module.exports = app => {
    app.get('/api', HelloController.index)
}
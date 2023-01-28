const HelloController = require('../controllers/person.controller')

module.exports = app => {
    app.get('/api', HelloController.index),
    app.post('/api/people', HelloController.createPerson)
}
const ProductoController = require('../controllers/producto.controller')

module.exports = app => {
    app.post("/api/producto/new", ProductoController.addProduct)
}
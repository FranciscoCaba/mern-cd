const ProductoController = require('../controllers/producto.controller')

module.exports = app => {
    app.post("/api/productos/new", ProductoController.addProduct)
    app.get("/api/productos", ProductoController.getAllProducts)
    app.get("/api/productos/:id", ProductoController.getProduct)
}
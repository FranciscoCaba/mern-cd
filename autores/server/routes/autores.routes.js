const AutorController = require('../controllers/autores.controllers')

module.exports = app => {
    app.get("/api/autores", AutorController.getAllAuthors)
    app.post("/api/autores", AutorController.createAuthor)
    app.get("/api/autores/:id", AutorController.getAuthor)
    app.put("/api/autores/:id", AutorController.updateAuthor)
    app.delete("/api/autores/:id", AutorController.deleteAuthor)
}
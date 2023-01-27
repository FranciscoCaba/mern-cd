const Chistes = require('../controllers/chiste.controller')

module.exports = app => {
    app.get("/api/jokes", Chistes.todosLosChistes),
    app.get("/api/jokes/random", Chistes.chisteAleatorio),
    app.get("/api/jokes/:_id", Chistes.unChiste),
    app.post("/api/jokes/new", Chistes.crearChiste),
    app.put("/api/jokes/update/:_id", Chistes.actualizarChiste),
    app.delete("/api/jokes/delete/:_id", Chistes.eliminarChiste)
}
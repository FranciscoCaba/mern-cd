const mongoose = require('mongoose')

const ChisteSchema = new mongoose.Schema({
    setup: {
        type: String,
        minLength: [10, "El setup del chiste debe ser de al menos 10 caracteres"]
    },
    punchline: {
        type: String,
        minLength: [3, "El punchline del chiste debe ser de al menos 3 caracteres"]
    }
})

const Chiste = mongoose.model("Chiste",ChisteSchema)

module.exports = Chiste
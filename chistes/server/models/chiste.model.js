const mongoose = require('mongoose')

const ChisteSchema = new mongoose.Schema({
    setup: String,
    punchline: String
})

const Chiste = mongoose.model("Chiste",ChisteSchema)

module.exports = Chiste
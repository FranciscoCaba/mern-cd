const mongoose = require('mongoose')

const AutorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "The first name is required"],
        minLength: [3, "The first name must be at least 3 characters long"]
    }
},{ timestamps: true })

module.exports = mongoose.model("Autor", AutorSchema)
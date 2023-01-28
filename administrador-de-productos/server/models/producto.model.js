const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    price: {
        type: Number,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Title is required"]
    }
})

module.exports = mongoose.model( "Producto", ProductoSchema )
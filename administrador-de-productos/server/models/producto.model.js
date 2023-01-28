const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [1, "Title is required"]
    },
    price: {
        type: Number,
        min: [1, "Price is required"]
    },
    description: {
        type: String,
        minLength: [1, "Description is required"]
    }
})

module.exports = mongoose.model( "Producto", ProductoSchema )
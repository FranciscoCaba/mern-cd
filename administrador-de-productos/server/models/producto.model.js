const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
})

module.exports = mongoose.model( "Producto", ProductoSchema )
const Producto = require('../models/producto.model')

module.exports = {
    addProduct: (req,res) => {
        const { title, price, description } = req.body
        Producto.create({
            title,
            price,
            description
        })
            .then( newProduct => res.json(newProduct) )
            .catch( err => res.json({message: "Ha ocurrido un error.", error: err}))
    },
    getAllProducts: (req,res) => {
        Producto.find({})
            .then( productos => res.json(productos))
            .catch( err => res.json({message: "Ha ocurrido un error.", error: err}))
    },
    getProduct: (req,res) => {
        Producto.findOne({ _id: req.params.id })
            .then(producto => res.json(producto))
            .catch( err => res.json({message: "Ha ocurrido un error.", error: err}))
    }
}
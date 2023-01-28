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
    }
}
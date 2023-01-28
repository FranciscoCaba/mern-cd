const Autor = require('../models/autores.model')

module.exports = {
    getAllAuthors: (req,res) => {
        Autor.find({})
            .then( autores => res.json(autores))
            .catch( err => res.status(400).json(err))
    },
    getAuthor: (req,res) => {
        Autor.findOne( {_id: req.params.id } )
            .then( autor => res.json(autor) )
            .catch( err => res.status(400).json(err))
    },
    updateAuthor: (req,res) => {
        Autor.findOneAndUpdate( {_id: req.params.id }, req.body, { new: true } )
            .then( autorEditado => res.json(autorEditado) )
            .catch( err => res.status(400).json(err))
    },
    deleteAuthor: (req,res) => {
        Autor.findOneAndRemove( {_id: req.params.id } )
            .then( autor => res.json(autor) )
            .catch( err => res.status(400).json(err))
    },
    createAuthor: (req,res) => {
        Autor.create( req.body )
            .then( autor => res.json(autor) )
            .catch( err => res.status(400).json(err))
    }
}
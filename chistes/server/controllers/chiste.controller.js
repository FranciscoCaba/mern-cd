const Chiste = require('../models/chiste.model')

module.exports = {
    todosLosChistes: (req,res) => {
        Chiste.find()
            .then(chistes => res.json( chistes ) )
            .catch(err => res.json({message: "Ha ocurrido un error", error: err}))
    },
    unChiste: (req,res) => {
        Chiste.findOne({_id: req.params._id})
            .then(chiste => res.json( chiste ))
            .catch(err => res.json({message: "Ha ocurrido un error", error: err}))
    },
    chisteAleatorio: (req,res) =>{
        Chiste.aggregate().sample(1)
            .then( chiste => res.json( chiste ))
            .catch( err => res.json( { message: "Ha ocurrido un error", error: err } ))
    },
    crearChiste: (req,res) => {
        Chiste.create(req.body)
            .then(chiste => res.json( chiste ))
            .catch(err => res.json({message: "Ha ocurrido un error", error: err}))
    },
    actualizarChiste: (req,res) => {
        Chiste.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
            .then( chiste => res.json( chiste ) )
            .catch( err => res.json( { message: "Ha ocurrido un error", error: err } ) )
    },
    eliminarChiste: (req,res) => {
        Chiste.deleteOne({ _id: req.params._id })
            .then( chiste => res.json( chiste ) )
            .catch( err => res.json({message: "Ha ocurrido un error", error: err}) )
    }
}
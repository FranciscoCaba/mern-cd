const Person = require('../models/person.models')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.createPerson = (req,res) => {
    const { firstName, lastName } = req.body
    Person.create({
        firstName,
        lastName
    })
        .then( newPerson => res.json(newPerson) )
        .catch( err => res.json({ message: "Ha ocurrido un error", error: err}))
}

module.exports.getAllPeople = (req,res) => {
    Person.find({})
        .then( people => res.json(people) )
        .catch( err => res.json({ message: "Ha ocurrido un error", error: err}))
}

module.exports.getPerson = (req,res) => {
    Person.findOne({ _id: req.params.id })
        .then( person => res.json(person))
        .catch( err => res.json({ message: "Ha ocurrido un error", error: err}))
}
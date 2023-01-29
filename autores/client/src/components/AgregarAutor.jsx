import React from 'react'
import axios from 'axios'
import AutorForm from '../components/AutorForm'

const AgregarAutor = () => {

    const crearAutor = (name) => {
        axios.post("http://localhost:8000/api/autores", name)
            .then( res => console.log(res.data) )
    }

    return (
        <AutorForm subtitle="Add a new author:" initialName="" onSubmitProp={crearAutor} />
    )
}

export default AgregarAutor
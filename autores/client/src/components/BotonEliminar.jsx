import React from 'react'
import axios from 'axios'

const BotonEliminar = (props) => {
    const { id, successCallback } = props

    const eliminarAutor = () => {
        axios.delete("http://localhost:8000/api/autores/"+id)
            .then( res => successCallback() )
    }

    return (
        <button onClick={eliminarAutor}>
            Delete
        </button>
    )
}

export default BotonEliminar
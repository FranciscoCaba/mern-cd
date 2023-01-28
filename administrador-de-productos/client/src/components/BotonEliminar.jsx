import React from 'react'
import axios from 'axios'

const BotonEliminar = (props) => {
    const { idProducto, successCallback } = props

    const eliminarProducto = (e) => {
        axios.delete("http://localhost:8000/api/productos/"+idProducto)
            .then( res => {
                successCallback()
            })
    }

    return (
        <button onClick={eliminarProducto}>
            Delete
        </button>
    )
}

export default BotonEliminar
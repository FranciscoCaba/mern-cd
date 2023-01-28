import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const ProductoListado = () => {
    const [productos, setProductos] = useState([])
    const [cargado, setCargado] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos")
            .then( res => {
                setProductos(res.data)
                setCargado(true)
            })
    }, [])
    
    const eliminarProducto = (id) => {
        axios.delete("http://localhost:8000/api/productos/"+id)
            .then( res => setProductos( productos.filter( value => value._id !== id ) ) )
    }

    return (
        <div>
            <h1>All Products:</h1>
            {cargado && productos.map( (producto, indice) => {
                return  <p key={indice}>
                            <NavLink to={`/${producto._id}`}>{producto.title}</NavLink>
                            <button onClick={ e => eliminarProducto(producto._id) }>Delete</button>
                        </p>
            })}
        </div>
    )
}

export default ProductoListado
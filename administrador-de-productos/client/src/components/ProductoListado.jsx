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
    

    return (
        <div>
            <h1>All Products:</h1>
            {cargado && productos.map( (producto, indice) => {
                return <NavLink key={indice} to={`/${producto._id}`}>{producto.title}</NavLink>
            })}
        </div>
    )
}

export default ProductoListado
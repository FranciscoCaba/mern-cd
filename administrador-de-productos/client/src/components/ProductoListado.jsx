import React from 'react'
import { NavLink } from 'react-router-dom'
import BotonEliminar from './BotonEliminar'

const ProductoListado = (props) => {
    const { productos, eliminarDelDom } = props

    return (
        <div>
            <h1>All Products:</h1>
            {
                productos.map( (producto, indice) => {
                    return  <p key={indice}>
                                <NavLink to={`/${producto._id}`}>{producto.title}</NavLink>
                                <BotonEliminar idProducto={producto._id} successCallback={()=>eliminarDelDom( producto._id )}/>
                            </p>
                })
            }
        </div>
    )
}

export default ProductoListado
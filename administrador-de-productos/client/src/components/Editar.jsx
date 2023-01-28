import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import ProductoForm from './ProductoForm'

const Editar = () => {
    const [producto, setProducto] = useState([])
    const [cargado, setCargado] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/"+id)
            .then( res => {
                setProducto(res.data)
                setCargado(true)
            })
    }, [id])
    
    const actualizarProducto = (producto) => {
        axios.put("http://localhost:8000/api/productos/"+id, producto)
            .then( res => {
                navigate("/")
            })
    }

    return (
        <div>
            <h1>Update Product</h1>
            {
                cargado && (
                    <ProductoForm
                        initialTitle={producto.title}
                        initialPrice={producto.price}
                        initialDescription={producto.description}
                        onSubmitProp={actualizarProducto}
                    />
                )
            }
        </div>
    )
}

export default Editar
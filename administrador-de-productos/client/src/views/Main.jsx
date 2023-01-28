import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductoForm from '../components/ProductoForm'
import ProductoListado from '../components/ProductoListado'

const Main = () => {

    const [productos, setProductos] = useState([])
    const [cargado, setCargado] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos")
            .then( res => {
                setProductos(res.data)
                setCargado(true)
            } )
    }, [])

    const crearProducto = (producto) => {
        axios.post("http://localhost:8000/api/productos/new", producto)
            .then( res => {
                if(!res.data.error)
                    setProductos([...productos, res.data])
                else
                    alert("Favor complete todos los campos")
            })
            .catch( err => console.log(err))
    }

    const eliminarDelDom = (idProducto) => {
        setProductos( productos.filter( valor => valor._id !== idProducto))
    }
    
    return (
        <div>
            <h2>Product Manager</h2>
            <ProductoForm
                initialTitle=""
                initialPrice=""
                initialDescription=""
                onSubmitProp={crearProducto}
            />
            <hr />
            {
                cargado && (
                    <ProductoListado productos={productos} eliminarDelDom={eliminarDelDom}/>
                )
            }
        </div>
    )
}

export default Main
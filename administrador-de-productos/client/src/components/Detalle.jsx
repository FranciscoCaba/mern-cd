import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Detalle = () => {
    const [producto, setProducto] = useState({})
    const [cargado, setCargado] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/"+id)
            .then( res => {
                setProducto(res.data)
                setCargado(true)
            })
    }, [id])

    const printInfo = (values) => {
        return (
            <div className='info-container'>
                <p className='product-title'>{values[0]}</p>
                <p className='product-info'>Price: {values[1]}</p>
                <p className='product-info'>Description: {values[2]}</p>
            </div>
        )
    }
    
    return (
        <div>
            <NavLink to='/'>&lt;-- Go Back</NavLink>
            {
                cargado ?
                    printInfo(Object.values(producto).slice(1,4))
                    :
                    "Cargando..."
            }
        </div>
    )
}

export default Detalle
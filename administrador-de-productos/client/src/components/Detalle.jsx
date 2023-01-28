import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Detalle = () => {
    const [producto, setProducto] = useState({})
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

    const eliminarProducto = (id) => {
        axios.delete("http://localhost:8000/api/productos/"+id)
            .then( res => {
                navigate("/")
            })
    }

    const printInfo = (values) => {
        return (
            <div className='info-container'>
                <p className='product-title'>{values[1]}</p>
                <p className='product-info'>Price: {values[2]}</p>
                <p className='product-info'>Description: {values[3]}</p>
                <NavLink to={'/'+values[0]+'/edit'}>Edit</NavLink>
                <button onClick={ e => eliminarProducto(producto._id) }>Delete</button>
            </div>
        )
    }
    
    return (
        <div>
            <NavLink to='/'>&lt;-- Go Back</NavLink>
            {
                cargado && producto ?
                    printInfo(Object.values(producto).slice(0,4))
                    :
                    "Cargando..."
            }
        </div>
    )
}

export default Detalle
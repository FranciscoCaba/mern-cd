import React, { useState, useEffect } from 'react'
import AutorForm from './AutorForm'
import axios from 'axios'
import { useParams, NavLink } from 'react-router-dom'

const EditarAutor = () => {
    const [firstName, setFirstName] = useState("")
    const [cargado, setCargado] = useState(false)
    const [hayError, setHayError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores/"+id)
            .then( res => {
                setFirstName(res.data.firstName)
                setCargado(true)
            } )
            .catch( err => {
                setHayError(true)
            } )
    }, [id])
    
    const editarAutor = (autor) => {
        axios.put("http://localhost:8000/api/autores/"+id, autor)
            .then( res => console.log(res.data))
            .catch( err => alert(err.response.data.errors.firstName.message))
    }

    return (
        <>
            {
                cargado ?
                    <AutorForm subtitle="Edit this author" initialName={firstName} onSubmitProp={editarAutor}/>
                :
                    hayError ?
                        <>
                            <NavLink to='/'>Home</NavLink>
                            <p>Lo sentimos, pero no pudimos encontrar el autor que estás buscando. ¿Deseas agregar este autor a nuestra base de datos?</p>
                            <NavLink to='/new'>Add author</NavLink>
                        </>
                    :
                        "Cargando..."
            }
        </>
    )
}

export default EditarAutor
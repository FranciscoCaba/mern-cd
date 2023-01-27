import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [mensaje, setMensaje] = useState("Cargando...")

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then( response => {
                setMensaje(response.data.message)
            })
    }, [])
    
    return (
        <div>
            Mensaje desde el back-end: {mensaje}
        </div>
    )
}

export default Main
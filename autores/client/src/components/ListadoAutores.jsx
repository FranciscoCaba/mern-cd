import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'
import BotonEliminar from './BotonEliminar'

const ListadoAutores = () => {
    const [autores, setAutores] = useState([])
    const [cargado, setCargado] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores")
            .then( res => {
                setAutores(res.data)
                setCargado(true)
            })
    }, [])

    const ordenarAutores = () => {
        const sorted = autores.sort((a,b)=>{
            if(a.firstName < b.firstName){
                return -1
            }
            if(a.firstName > b.firstName){
                return 1
            }
            return 0
        })
        return (sorted)
    }
    
    const eliminarDelDom = (id) => {
        setAutores( autores.filter( valor => valor._id !== id) )
    }

    return (
        <div>
            <NavLink to='/new'>Add an author</NavLink>
            <p className='subtitle'>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th className='wide-col'>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cargado ?
                        (
                            autores.length > 0 ?
                            ordenarAutores().map( (valor, indice) => {
                                return (
                                    <tr key={indice}>
                                        <td className='wide-col'>{valor.firstName}</td>
                                        <td>
                                            <button onClick={()=>navigate('/edit/'+valor._id)}>Edit</button>
                                            <BotonEliminar id={valor._id} successCallback={()=>eliminarDelDom(valor._id)} />
                                        </td>
                                    </tr>
                                )
                            } )
                            :
                            <tr>
                                <td>
                                    "No existen autores"
                                </td>
                            </tr>
                        )
                        :
                        <tr>
                            <td>
                                "Cargando..."
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListadoAutores
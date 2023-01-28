import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Editar = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/"+id)
            .then( res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [id])
    
    const actualizarProducto = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/productos/"+id, {
            title,
            price,
            description
        })
            .then( res => console.log(res))
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={actualizarProducto}>
                <p className='form-p'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={ e => setTitle(e.target.value) }/>
                </p>
                <p className='form-p'>
                    <label>Price</label>
                    <input type="text" value={price} onChange={ e => setPrice(e.target.value) }/>
                </p>
                <p className='form-p'>
                    <label>Description</label>
                    <input type="text" value={description} onChange={ e => setDescription(e.target.value) }/>
                </p>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default Editar
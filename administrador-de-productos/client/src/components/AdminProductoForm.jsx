import React, { useState } from 'react'
import axios from 'axios'

const AdminProductoForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/productos/new",{
            title,
            price,
            description
        })
            .then( res => {
                console.log(res.data)
                if( res.data.error === undefined){
                    setTitle("")
                    setPrice("")
                    setDescription("")
                }
            })
            .catch( err => console.log(err))
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <p className='form-p'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={ e => setTitle(e.target.value) }/>
                </p>
                <p className='form-p'>
                    <label>Price</label>
                    <input type="number" value={price} onChange={ e => setPrice(e.target.value) }/>
                </p>
                <p className='form-p'>
                    <label>Description</label>
                    <input type="text" value={description} onChange={ e => setDescription(e.target.value) }/>
                </p>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AdminProductoForm
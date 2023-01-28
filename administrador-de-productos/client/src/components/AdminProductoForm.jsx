import React, { useState } from 'react'
import axios from 'axios'

const AdminProductoForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/producto/new",{
            title,
            price,
            description
        })
            .then( res => console.log(res.data))
            .catch( err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={ e => setTitle(e.target.value) }/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" onChange={ e => setPrice(e.target.value) }/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" onChange={ e => setDescription(e.target.value) }/>
                </p>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AdminProductoForm
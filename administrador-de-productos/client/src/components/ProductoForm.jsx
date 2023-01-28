import React, { useState } from 'react'

const ProductoForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)
    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({ title, price, description })
    }

    return (
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
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ProductoForm
import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

const AutorForm = (props) => {
    const { subtitle, initialName, onSubmitProp } = props
    const [firstName, setFirstName] = useState(initialName)
    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        onSubmitProp({firstName})
        navigate('/')
    }

    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <p className='subtitle'>{subtitle}</p>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <div>
                    <button className='form-btn' onClick={()=>navigate('/')}>Cancel</button>
                    <button className='form-btn' type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default AutorForm
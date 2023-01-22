import React, { useState } from 'react'

const SearchBar = (props) => {
    const [id, setId] = useState('')
    const [selectedOption, setSelectedOption] = useState('people')
    function handleOnSubmit(e){
        e.preventDefault()
        props.setInfo({
            id,
            action: selectedOption
        })
    }
    return (
        <div style={{textAlign: "center"}}>
            <form action="submit" onSubmit={handleOnSubmit}>
                <label>Search for: </label>
                <select value={selectedOption} onChange={ e => setSelectedOption(e.target.value) }>
                    <option value='people'>People</option>
                    <option value='films'>Films</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='species'>Species</option>
                    <option value='planets'>Planets</option>
                </select>
                <label>Id:</label>
                <input value={id} type='text' onChange={e=>setId(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
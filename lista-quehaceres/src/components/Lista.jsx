import React, { useState } from 'react'

const Lista = () => {
    const [listaQuehacer, setListaQuehacer] = useState([])
    const [inputValue, setInputValue] = useState({
        contenido: "",
        completado: false
    })
    function handleInputTextChange(e){
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }
    function handleCheckboxChange(e, value){
        setListaQuehacer(
            listaQuehacer.map( quehacer => {
                return quehacer === value ? {...quehacer, [e.target.name]: e.target.checked} : quehacer;
            })
        )
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.checked
        })
    }
    function handleOnSubmit(e){
        e.preventDefault()
        setInputValue({
            contenido: "",
            completado: false
        })
        setListaQuehacer([
            ...listaQuehacer,
            inputValue
        ])
    }
    function handleEliminar(e, value){
        setListaQuehacer(listaQuehacer.filter( quehacer => quehacer !== value))
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input name='contenido' value={inputValue.contenido} type="text" onChange={handleInputTextChange}/>
            <button type="submit">Agregar</button>
            {
                listaQuehacer.map(
                    (quehacer, i) =>
                        <div key={i}>
                            <label className={quehacer.completado?"quehacer-completado":""}>
                                {quehacer.contenido}
                                <input name="completado" checked={quehacer.completado} type='checkbox' onChange={(e)=>handleCheckboxChange(e, quehacer)}/>
                            </label>
                            <button type='button' onClick={(e)=>handleEliminar(e,quehacer)}>Eliminar</button>
                        </div>
                    )
            }
        </form>
    )
}

export default Lista
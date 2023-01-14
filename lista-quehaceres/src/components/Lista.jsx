import React, { useState, useEffect } from 'react'

const Lista = () => {
    const [listaQuehacer, setListaQuehacer] = useState(()=>{
        const valores = JSON.parse(localStorage.getItem("lista-quehaceres"))
        return valores || []
    })
    const [inputValue, setInputValue] = useState({
        contenido: "",
        completado: false
    })
    useEffect(() => {
        localStorage.setItem("lista-quehaceres", JSON.stringify(listaQuehacer))
    }, [listaQuehacer])
    
    function handleInputTextChange(e){
        const nuevaLista = {
            ...inputValue,
            [e.target.name]: e.target.value
        }
        setInputValue(nuevaLista)
    }
    function handleCheckboxChange(e, value){
        const nuevaLista = listaQuehacer.map( quehacer => {
            return quehacer === value ? {...quehacer, [e.target.name]: e.target.checked} : quehacer;
        })
        setListaQuehacer(nuevaLista)
    }
    function handleOnSubmit(e){
        e.preventDefault()
        const nuevaLista = [
            ...listaQuehacer,
            inputValue
        ]
        const nuevaTarea = {
            contenido: "",
            completado: false
        }
        setInputValue(nuevaTarea)
        setListaQuehacer(nuevaLista)
    }
    function handleEliminar(e, value){
        const nuevaLista = listaQuehacer.filter( quehacer => quehacer !== value )
        setListaQuehacer(nuevaLista)
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
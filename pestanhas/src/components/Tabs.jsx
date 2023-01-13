import React, { useState } from 'react'

function Tabs(props) {
    const [activeButton, setActiveButton] = useState({})
    function changeButtonColor(boton){
        if(activeButton.etiqueta!==undefined){
            activeButton.activo.classList.remove("colored")
            boton.classList.add("colored")
            setActiveButton({...activeButton, activo: boton})
        }else{
            boton.classList.add("colored")
        }
    }
    function addAnimation(){
        const elemento = document.querySelector("textarea");
        const agrandar = [
            { transform: 'translateY(100px) scale(0)' },
            { transform: 'translateY(0px) scale(1)' }
        ];
        
        const tiempoAgrandar = {
            duration: 500,
            iterations: 1,
        }
        elemento.animate(agrandar, tiempoAgrandar);
    }
    function handleOnClick(e, etiqueta){
        changeButtonColor(e.target)
        setActiveButton({etiqueta,activo: e.target})
        addAnimation()
    }
    return (
        <>
            <div>
                {
                    props.array.map((value, i)=>{
                        return <button key={i} onClick={(e)=>handleOnClick(e, value.etiqueta)}>{value.etiqueta}</button>
                    })
                }
            </div>
            <textarea
                value={
                    props.array.filter(value => value.etiqueta===activeButton.etiqueta).map(value=>value.contenido)
                }
                disabled rows="6" cols="30" style={{resize: 'none'}}/>
        </>
    )
}

export default Tabs
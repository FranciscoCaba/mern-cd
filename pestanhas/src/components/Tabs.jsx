import React, { useState } from 'react'

function Tabs(props) {
    const [activeButton, setActiveButton] = useState()
    function handleOnClick(e, etiqueta){
        setActiveButton(etiqueta)
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
                    props.array.filter(value => value.etiqueta===activeButton).map(value=>value.contenido)
                }
                disabled rows="6" cols="30" style={{resize: 'none'}}/>
        </>
    )
}

export default Tabs
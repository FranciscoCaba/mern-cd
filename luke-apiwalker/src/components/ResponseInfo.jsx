import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import obiwan from '../assets/obiwan.jpg'

const ResponseInfo = (props) => {
    const { id: idParams } = useParams()
    const { info, setInfo } = props
    const [response, setResponse] = useState("")
    useEffect(() => {
        if(idParams)
            setInfo({
                id: idParams,
                action: 'people'
            })
    }, [idParams,setInfo])
    
    useEffect(() => {
        if(info.id!==''){
            axios.get(`https://swapi.dev/api/${info.action}/${info.id}`)
            .then(res=>{
                setResponse(res.data)
                console.log(res.data);
            })
            .catch(()=>setResponse({error:"Estos no son los droides que está buscando"}))
        }
    }, [info])
    return (
        <div>
            {
                response !== "" ?
                    Object.keys(response).slice(0,5).map((key,i)=>{
                        return key === "error" ?
                        <div key={i} style={{textAlign: "center"}}>
                            <h2>{response[key]}</h2>
                            <img src={obiwan} alt='hello there' style={{width: "120px",height: "100px"}}/>
                        </div>
                        : (i === 0 ? 
                            <h1 key={i}>{response[key]}</h1>
                            :
                            <p key={i}>{key+": "+response[key]}</p>)
                    })
                    :
                    ""
            }</div>
    )
}

export default ResponseInfo
import './App.css';
import React, { useState } from 'react'

function App() {
  const [state, setState] = useState([])
  function fetchPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon-species?limit=1008")
      .then(response => response.json())
      .then(response => {
        const responseArray = response.results.map( (value,i) => {
          return value.name.charAt(0).toUpperCase() + value.name.slice(1)
        })
        setState(responseArray)
      }).catch(err=>{
        console.log(err);
      })
  }

  return (
    <div className="App">
      <div className='button-container'>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
      </div>
      <ol>
        {
          state.map((value,i)=>{
            return <li key={i}>{value}</li>
          })
        }
      </ol>
    </div>
  );
}

export default App;

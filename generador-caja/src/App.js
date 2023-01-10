import React, {useState} from 'react'
import ColorInput from './components/ColorInput'
import ColorBoxes from './components/ColorBoxes'
import './App.css';


function App() {
  const [state, setState] = useState([])
  
  function addProps(newProps){
    setState([...state, newProps]);
  }

  return (
    <div className="App">
      <ColorInput addProps={addProps}/>
      <ColorBoxes colorBoxStyle={state}/>
    </div>
  );
}

export default App;

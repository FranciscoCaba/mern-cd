import React, {useState} from 'react'
import ColorInput from './components/ColorInput'
import ColorBoxes from './components/ColorBoxes'
import './App.css';

function App() {
  const [colores, setColores] = useState([])

  return (
    <div className="App">
      <ColorInput />
      <ColorBoxes />
    </div>
  );
}

export default App;

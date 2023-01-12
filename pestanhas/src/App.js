import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs array={[{etiqueta: "Tab 1", contenido: "Contenido de tab 1"},{etiqueta: "Tab 2", contenido: "Contenido de tab 2"},{etiqueta: "Tab 3", contenido: "Contenido de tab 3"}]}/>
    </div>
  );
}

export default App;

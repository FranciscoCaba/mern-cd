import './App.css';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalle from './components/Detalle';
import Editar from './components/Editar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/:id' element={<Detalle />} />
          <Route path='/:id/edit' element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

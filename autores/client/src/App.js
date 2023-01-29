import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListadoAutores from './components/ListadoAutores';
import AgregarAutor from './components/AgregarAutor';
import EditarAutor from './components/EditarAutor';

function App() {
  return (
    <div className="App">
      <h2>Favorite Authors</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListadoAutores />}/>
          <Route path='/new' element={<AgregarAutor />}/>
          <Route path='/edit/:id' element={<EditarAutor />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

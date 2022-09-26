import { useState } from 'react'
import './App.css';
import Agregar from './components/Agregar';
import Contenido from './components/contenido/Contenido';
import Editar from './components/Editar';
import Filtros from './components/Filtros';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Ver from './components/Ver';

function App() {
  const [current, setCurrent] = useState(0);
  const [agregar, setAgregar] = useState(false);
  const [ver, setVer] = useState(false);
  const [editar, setEditar] = useState(false);
  return (
    <div className="App">
      <div className="left">
        <NavLeft/>
      </div>
      <div className="right">
        <Header/>
        <Filtros agregar={agregar} setAgregar={setAgregar} current={current} setCurrent={setCurrent}/>
        <Contenido editar={editar} setEditar={setEditar} ver={ver} setVer={setVer} agregar={agregar} setAgregar={setAgregar} current={current} setCurrent={setCurrent}/>
      </div>
      <Agregar agregar={agregar} setAgregar={setAgregar}/>
      <Editar editar={editar} setEditar={setEditar}/>
      <Ver ver={ver} setVer={setVer}/>
    </div>
  );
}

export default App;

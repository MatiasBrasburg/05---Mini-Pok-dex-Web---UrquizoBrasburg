import { useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import MostrarPokemon from './MostrarPokemon'

function App() {
  
  const [pokemon, setPokemon] = useState(null);

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="container">
      <h1 className="Titulo" style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
        Mini Pokédex
      </h1>

      <div className="row">
        <div className="one-half column">
          <Formulario
         
            setPokemon={setPokemon}
            setCargando={setCargando}
            setError={setError}
          />
        </div>

        <div className="one-half column">
          <MostrarPokemon 
            pokemon={pokemon}
            cargando={cargando}
            error={error}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
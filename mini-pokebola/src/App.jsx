import { useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import MostrarPokemon from './MostrarPokemon'
import ListaPokemon from './ListaPokemon'

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
            ContenidoH2="Buscador"
            setPokemon={setPokemon}
            setCargando={setCargando}
            setError={setError}
          />
          <MostrarPokemon 
            pokemon={pokemon}
            cargando={cargando}
            error={error}
          />
        </div>

        <div className="one-half column">
          <ListaPokemon />
        </div>
      </div>
    </div>
  )
}

export default App;
import React from 'react';
import './MostrarPokemon.css'; 

function MostrarPokemon({ pokemon, cargando, error }) {
  // 1. Mostrar estado de loading
  if (cargando) {
    return (
      <div className="cita">
        <p>Cargando Pokémon...</p>
      </div>
    );
  }

  // 2. Mostrar manejo de errores
  if (error) {
    return (
      <div className="cita">
        <p className="alerta-error">{error}</p>
      </div>
    );
  }

  // 3. Si todavía no se buscó nada, no mostramos nada
  if (!pokemon) {
    return null;
  }

  // 4. Mostrar los datos obligatorios de la consigna
  return (
    <div className="cita">
      <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
      <img 
        src={pokemon.sprites.front_default} 
        alt={`Imagen de ${pokemon.name}`} 
        style={{ width: '150px' }}
      />
      <p>Peso: <span>{pokemon.weight / 10} kg</span></p>
      <p>Altura: <span>{pokemon.height / 10} m</span></p>
      <p>Tipo(s): 
        <span>
          {/* Los tipos vienen en un arreglo, los mapeamos y los separamos por coma */}
          {pokemon.types.map((t) => t.type.name).join(', ')}
        </span>
      </p>
    </div>
  );
}

export default MostrarPokemon;
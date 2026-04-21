import React from 'react';
import './MostrarPokemon.css'; 

function MostrarPokemon({ pokemon, cargando, error }) {

  if (cargando) {
    return (
      <div className="cita">
        <p>Cargando Pokémon...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="cita">
        <p className="alerta-error">{error}</p>
      </div>
    );
  }


  if (!pokemon) {
    return null;
  }

 
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
          {pokemon.types.map((t) => t.type.name).join(', ')}
        </span>
      </p>
    </div>
  );
}

export default MostrarPokemon;
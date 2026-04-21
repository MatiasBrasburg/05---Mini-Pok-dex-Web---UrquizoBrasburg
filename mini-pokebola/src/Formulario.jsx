import './Formulario.css'; 
import { useState } from 'react'

function Formulario({ ContenidoH2, setPokemon, setCargando, setError }) {
    const [VariableABuscar, setVariableABuscar] = useState('');

    const buscarPokemon = async (e) => {
        e.preventDefault(); 
        if (VariableABuscar.trim() === '') return;

     
        setCargando(true);
        setError('');
        setPokemon(null);

        try {
           
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${VariableABuscar.toLowerCase()}`);
            
           
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }

            const data = await response.json();
            setPokemon(data); 
            setVariableABuscar('');t
            
        } catch (error) {
            setError('No existe un Pokémon con ese nombre o ID.');
            console.log("Algo salió mal:", error);
        } finally {
            
            setCargando(false);
        }
    };

    return (
        <>
            <h2>{ContenidoH2}</h2>
            
            <form onSubmit={buscarPokemon}>
                <label>Introduzca nombre o ID del Pokémon</label>
                <input 
                  type="text" 
                  value={VariableABuscar} 
                  onChange={(e) => setVariableABuscar(e.target.value)} 
                  placeholder="Ej: pikachu o 25"
                  className="u-full-width"
                />
                
                <button type="submit" className="button-primary u-full-width">
                    Buscar Pokémon
                </button>
            </form>
        </>
    );
}

export default Formulario;
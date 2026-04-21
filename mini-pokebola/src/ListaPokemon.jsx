import { useState, useEffect } from 'react';
import './Formulario.css';
import './ListaPokemon.css';

function ListaPokemon() {
    const [lista, setLista] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        obtenerLista();
    }, []);

    const obtenerLista = async () => {
        setCargando(true);
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
            const data = await response.json();

            const promesas = data.results.map(async (poke) => {
                const res = await fetch(poke.url);
                return await res.json();
            });

            const pokemonesDetallados = await Promise.all(promesas);
            setLista(pokemonesDetallados);
        } catch (error) {
            console.error(error);
        } finally {
            setCargando(false);
        }
    };

    const listaFiltrada = lista.filter(poke => {
        const coincideNombre = poke.name.toLowerCase().includes(filtroNombre.toLowerCase());
        const coincideTipo = filtroTipo === '' || poke.types.some(t => t.type.name === filtroTipo);
        return coincideNombre && coincideTipo;
    });

    return (
        <div>
            <h2 className="lista-titulo">Lista de Pokémon</h2>
            
            <input
                type="text"
                placeholder="Filtrar por nombre"
                value={filtroNombre}
                onChange={(e) => setFiltroNombre(e.target.value)}
                className="u-full-width"
            />
            
            <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="u-full-width"
            >
                <option value="">Todos los tipos</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="grass">Planta</option>
                <option value="electric">Eléctrico</option>
                <option value="normal">Normal</option>
                <option value="bug">Bicho</option>
                <option value="poison">Veneno</option>
            </select>

            {cargando ? (
                <p className="mensaje-blanco">Cargando lista...</p>
            ) : (
                <div className="lista-container">
                    <div className="lista-scroll">
                        {listaFiltrada.map(poke => (
                            <div key={poke.id} className="pokemon-item">
                                <img src={poke.sprites.front_default} alt={poke.name} />
                                <div>
                                    <div className="pokemon-item-name">{poke.name}</div>
                                    <div className="pokemon-item-types">
                                        {poke.types.map(t => t.type.name).join(' / ')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaPokemon;
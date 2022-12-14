// useEffect: HTTP requests

import * as React from 'react'
import {
    PokemonForm,
    PokemonInfoFallback,
    PokemonDataView,
    fetchPokemon
} from '../pokemon'

function PokemonInfo({ pokemonName }) {
    const [pokemon, setPokemon] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [status, setStatus] = React.useState('idle');

    React.useEffect(() => {
        if (!pokemonName) {
            return
        }
        setStatus('pending');
        fetchPokemon(pokemonName).then(
            pokemon => {
                setPokemon(pokemon)
                setStatus('resolved')
            },
            error => {
                setError(error)
                setStatus('rejected')
            },
        )
    }, [pokemonName]);

    if (status === 'idle') {
        return 'Submit a Pokemon'
    }
    else if (status === 'pending') {
        return <PokemonInfoFallback name={pokemonName} />
    }
    else if (status === 'rejeted') {
        return (
            <div role="alert">
                There was an error: {' '}
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
            </div>
        )
    }
    else if (status === 'resolved') {
        return <PokemonDataView pokemon={pokemon} />
    }
    throw new Error('This should be impossible');
}

function App() {
    const [pokemonName, setPokemonName] = React.useState('')

    function handleSubmit(newPokemonName) {
        setPokemonName(newPokemonName)
    }

    return (
        <div className="pokemon-info-app">
            <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
            <hr />
            <div className="pokemon-info">
                <PokemonInfo pokemonName={pokemonName} />
            </div>
        </div>
    )
}

export default App

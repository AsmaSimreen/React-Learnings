// useEffect: HTTP requests

import * as React from 'react'
import { PokemonForm, PokemonInfoFallback, PokemonDataView, fetchPokemon } from '../pokemon'

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    if (!pokemonName) {
      return
    }
    setPokemon(null)
    fetchPokemon(pokemonName).then(
      pokemonData => {
        setPokemon(pokemonData)
      },
    )

  }, [pokemonName]);
  if (!pokemonName) {
    return 'Submit a Pokemon'
  }
  else if (!pokemon) {
    return <PokemonInfoFallback name={pokemonName} />
  }
  else {
    <PokemonDataView pokemon={pokemon} />
  }
  // 💣 remove this
  return 'TODO'
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

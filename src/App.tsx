import React from "react";
import { PokemonCard } from "./PokemonCard";
import { usePokemon } from "./use-pokemon";

function App() {
  const pokemon = usePokemon();

  return (
    <div>
      {pokemon.map((p) => (
        <PokemonCard key={p.name} pokemon={p} />
      ))}
    </div>
  );
}

export default App;

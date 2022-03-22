import React, { useState } from "react";
import { Berry, BerrySelect } from "./BerrySelect";
import { PokemonCard } from "./PokemonCard";
import { usePokemon, Pokemon } from "./use-pokemon";

function App() {
  const pokemon: Pokemon[] = usePokemon();
  const [berry, setBerry] = useState<Berry>("Berry");

  return (
    <>
      <div>
        <BerrySelect selectedBerry={berry} onBerrySelected={(b) => setBerry(b)}></BerrySelect>
      </div>

      <div>
        {
          /* Put the pokemon cards here! */
          pokemon.map((data) => {
            console.log(data);
            return <PokemonCard pokemon={data} berry={berry} />;
          })
        }
      </div>
    </>
  );
}

export default App;

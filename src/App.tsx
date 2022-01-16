import { useState } from "react";
import { BerrySelect } from "./BerrySelect";
import { PokemonCard, CapturedPokemonCard } from "./PokemonCard";
import { usePokemon } from "./use-pokemon";

function App() {
  const pokemon = usePokemon();
  const [berry, setBerry] = useState("Berry");

  return (
    <div>
      <div>
        <BerrySelect selectedBerry={berry} onBerrySelected={(b: any) => setBerry(b)}></BerrySelect>
      </div>
      {pokemon.map((p) => {
        const CardComponent = p.name[0] === "c" ? CapturedPokemonCard : PokemonCard;
        return <CardComponent key={p.name} pokemon={p} berry={berry} />;
      })}
    </div>
  );
}

export default App;

import { PokemonCard, CapturedPokemonCard } from "./PokemonCard";
import { usePokemon } from "./use-pokemon";

function App() {
  const pokemon = usePokemon();

  return (
    <div>
      {pokemon.map((p) => {
        const CardComponent = p.name[0] === "c" ? CapturedPokemonCard : PokemonCard;
        return <CardComponent key={p.name} pokemon={p} />;
      })}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

export type Pokemon = {
  name: string;
} & Record<string, any>;

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((data) => data.json())
      .then((data) => data.results)
      .then((results) => setPokemon(results));
  }, []);

  return pokemon;
};

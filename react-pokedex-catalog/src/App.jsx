import { useEffect, useState } from "react";
import "./App.css";
import { getPokemonList } from "./api/utils";
import { Card } from "./components/card";

export function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonId, setPokemonId] = useState("1");

  async function getAllPokemons() {
    const list = await getPokemonList();
    setPokemonList(list.results);
  }

  function handlePokemonSelection(e) {
    const id = Number(e.target.value) + 1;
    setPokemonId(id);
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <div>
        <select onChange={(e) => handlePokemonSelection(e)}>
          {pokemonList.map((pokemon, index) => {
            return (
              <option key={index} value={index}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <Card pokemonId={pokemonId} pokemonName={""} />
      </div>
    </>
  );
}

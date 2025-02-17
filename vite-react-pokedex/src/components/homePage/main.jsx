import { useContext, useState } from "react";
import { PokedexContext } from "../../context/pokemonContext";
import { Card } from "./card";
import { Navigation } from "./navigation";

export function Main() {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [resultList, setResultList] = useState([]);

  const { pokemonList, pokemonNameAndUrlList } = useContext(PokedexContext);

  function handleSearchSubmit(e) {
    e.preventDefault();
    const chosenPokemon = pokemonNameAndUrlList.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search) {
      setSearching(true);
    }
    setResultList(chosenPokemon);
  }

  return (
    <main className="max-w-xs md:max-w-2xl xl:max-w-5xl mx-auto">
      <div className="flex items-center justify-center py-10">
        <form onSubmit={handleSearchSubmit}>
          <input
            placeholder="Search Pokemon"
            className="bg-white/50 placeholder:text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {searching ? (
          resultList.map((pokemon, index) => {
            return <Card name={pokemon.name} url={pokemon.url} key={index} />;
          })
        ) : (
          <>
            {pokemonList.map((pokemon, index) => {
              return <Card name={pokemon.name} url={pokemon.url} key={index} />;
            })}
          </>
        )}
      </div>
      <Navigation />
    </main>
  );
}

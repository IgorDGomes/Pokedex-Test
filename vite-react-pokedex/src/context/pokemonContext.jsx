import { createContext, useCallback, useEffect, useState } from "react";
import { fetchPokemons, getAllPokemonNames } from "../utils/fetchRequest";

export const PokedexContext = createContext();

function PokedexProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(24);

  const [pokemonList, setPokemonList] = useState([]);
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [pokemonNameAndUrlList, setPokemonNameAndUrlList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const data = useCallback(async (offset, limit) => {
    const { pokemonList, totalPages, nextPage, previousPage } =
      await fetchPokemons(offset, limit);

    setPokemonList(pokemonList);
    setTotalPages(totalPages);
    setPreviousPage(previousPage);
    setNextPage(nextPage);
  }, []);

  const allPokemons = useCallback(async () => {
    const { allPokemonList, allPokemonNamesAndUrl } =
      await getAllPokemonNames();

    setAllPokemonList(allPokemonList);
    setPokemonNameAndUrlList(allPokemonNamesAndUrl);
  }, []);

  useEffect(() => {
    allPokemons();
    data(offset, limit);
  }, [offset, limit]);

  return (
    <PokedexContext.Provider
      value={{
        pokemonList,
        previousPage,
        nextPage,
        totalPages,
        offset,
        limit,
        setOffset,
        setLimit,
        pokemonNameAndUrlList,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export default PokedexProvider;

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { PokedexContext } from "../../context/context";

export function NavBar({ id }) {
  const { totalPokemons, setChangePokemon } = useContext(PokedexContext);
  const pokemonId = Number(id);

  function previousPokemon(pokemonId) {
    console.log(typeof Number(id));
    setChangePokemon(true);
    if (pokemonId > 1) {
      return `/pokemon/${pokemonId - 1}`;
    }
  }

  function nextPokemon(id) {
    if (pokemonId !== totalPokemons) {
      return `/pokemon/${pokemonId + 1}`;
    }
  }

  return (
    <div>
      <NavLink to={previousPokemon(pokemonId)}>
        <ArrowLeftCircleIcon />
      </NavLink>
      <NavLink to={nextPokemon(pokemonId)}>
        <ArrowRightCircleIcon />
      </NavLink>
    </div>
  );
}

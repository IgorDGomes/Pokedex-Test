import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { PokedexContext } from "../../context/pokemonContext";

export function NavBar({ id }) {
  const { totalPokemons } = useContext(PokedexContext);
  const pokemonId = Number(id);
  const navigate = useNavigate();

  function previousPokemon() {
    if (pokemonId > 1) {
      return navigate(`/pokemon/${pokemonId - 1}`);
    }
  }

  function nextPokemon() {
    if (pokemonId !== totalPokemons) {
      return navigate(`/pokemon/${pokemonId + 1}`);
    }
  }

  return (
    <div>
      <button onClick={previousPokemon}>
        <ArrowLeftCircleIcon />
      </button>
      <button onClick={nextPokemon}>
        <ArrowRightCircleIcon />
      </button>
    </div>
  );
}

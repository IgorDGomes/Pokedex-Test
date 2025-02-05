import { useParams } from "react-router";
import { PokemonCard } from "../components/pokemon/pokemonCard";
import { NavBar } from "../components/pokemon/prev-next";

export default function Pokemon() {
  const { id } = useParams();

  return (
    <>
      <NavBar id={id} />
      <PokemonCard id={id} />
    </>
  );
}

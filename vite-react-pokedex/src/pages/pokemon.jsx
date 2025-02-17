import { useParams } from "react-router";
import { PokemonCard } from "../components/pokemon/pokemonCard";
import { NavBar } from "../components/pokemon/prev-next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Pokemon() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <NavBar id={id} />
      <PokemonCard id={id} />
      <Footer />
    </>
  );
}

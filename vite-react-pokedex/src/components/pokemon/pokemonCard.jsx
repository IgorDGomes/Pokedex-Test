import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export function PokemonCard({ id }) {
  const [frontImage, setFrontImage] = useState("");
  const [frontGif, setFrontGif] = useState("");
  const [name, setName] = useState();

  async function getPokemonById() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    setFrontImage(data.sprites.front_default);
    setFrontGif(
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default
    );

    setName(data.species.name[0].toUpperCase() + data.species.name.slice(1));

    console.log(data);

    return data;
  }

  useEffect(() => {
    getPokemonById();
  }, []);

  return (
    <div>
      <h1>Pokemon {id}</h1>
      <NavLink to={"/"}>Home</NavLink>

      <div>
        <img src={frontImage} width={200} />
        <img src={frontGif} width={200} />
        <h1>{name}</h1>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { getPokemonInfo } from "../../utils/fetchRequest";
import { pokemonColor } from "../../utils/pokemonColor";

export function PokemonCard({ id }) {
  const [frontImage, setFrontImage] = useState("");
  const [frontGif, setFrontGif] = useState("");
  const [name, setName] = useState();
  const [pokemonBackgroundColor, setPokemonBackgroundColor] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");
  const [evolutionChain, setEvolutionChain] = useState([]);

  async function getPokemonById() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    setFrontImage(data.sprites.front_default);
    setFrontGif(
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default
    );

    setName(data.name[0].toUpperCase() + data.name.slice(1));

    return data;
  }

  async function pokemonInfo() {
    try {
      const { evolutionChain, pokemonTypeArray, pokemonWeight } =
        await getPokemonInfo(id);

      const typeArray = pokemonTypeArray.map((pokemonType) => {
        return pokemonType.type.name;
      });

      setPokemonBackgroundColor(pokemonColor(typeArray[0]));
      setPokemonWeight(pokemonWeight);

      console.log(evolutionChain);
      // evolutionChain.map((evolution) => {
      //   return {
      //     name: evolution.species.name,
      //     nextEvolution: evolution.evolves_to[0].species.name,
      //   };
      // })

      // setEvolutionChain(evolutionChain);
    } catch (error) {
      console.error("Error fetching more info about the pokemon: ", error);
    }
  }

  useEffect(() => {
    getPokemonById();
    pokemonInfo();
  }, [id]);

  // console.log("Evolution Chain: ", evolutionChain);

  return (
    <div>
      <h2>Pokemon #{id}</h2>

      <div
        style={{ backgroundColor: pokemonBackgroundColor }}
        className="rounded-xl w-[300px] h-[450px] p-2.5"
      >
        <div className="bg-zinc-700 size-full rounded-md overflow-hidden">
          <img src={frontImage} width={100} className="bg-white" />
          <img src={frontGif} className="w-40" />
          <h1>{name}</h1>
          <p>Weight: {pokemonWeight}</p>
          {/* <p>Evolution Chain: {evolutionChain}</p> */}
        </div>
      </div>
    </div>
  );
}

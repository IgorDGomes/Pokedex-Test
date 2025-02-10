import { useCallback, useEffect, useState } from "react";
import { getPokemonDescription, getPokemonSpriteUrl } from "../api/utils";

export function Card({ pokemonId, pokemonName }) {
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  const getData = useCallback(async () => {
    const descriptionData = await getPokemonDescription(pokemonId);
    const imageData = await getPokemonSpriteUrl(pokemonId);

    setPokemonImageUrl(imageData);
    setPokemonDescription(descriptionData);
  }, [pokemonId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <img src={pokemonId} alt={pokemonName} />
      <h1>{pokemonName}</h1>
      {pokemonImageUrl && (
        <img src={pokemonImageUrl} alt={pokemonName} width={200} />
      )}
      <p>{pokemonDescription}</p>
    </div>
  );
}

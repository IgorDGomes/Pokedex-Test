import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { getPokemonInfo } from "../utils/fetchRequest";

export function Card({ name, url }) {
  const [id, setId] = useState("");
  const [link, setLink] = useState("");
  const [dataLoading, setDataLoading] = useState(true);
  const [frontDefault, setFrontDefault] = useState("");
  const [backDefault, setBackDefault] = useState("");

  async function getImages(url) {
    try {
      const { frontImage, backImage, pokemonId } = await getPokemonInfo(url);
      setFrontDefault(frontImage);
      setBackDefault(backImage);
      setId(pokemonId);
      setLink(`/pokemon/${pokemonId}`);
    } catch (error) {
      console.error("Failed fetching Image", error);
    } finally {
      setDataLoading(false);
    }
  }

  useEffect(() => {
    getImages(url);
  }, [name]);

  return (
    <div className="bg-zinc-700 rounded-md py-4 px-10">
      {dataLoading ? (
        <div className="loader" />
      ) : (
        <>
          <NavLink to={link}>{name}</NavLink>
          <div>
            <img src={frontDefault} />
            <p>ID: #{id}</p>
          </div>
        </>
      )}
    </div>
  );
}

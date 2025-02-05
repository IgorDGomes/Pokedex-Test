const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokemons(offset, limit) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();

    const pokemonList = data.results;
    const totalPages = Math.ceil(data.count / 24);
    const nextPage = data.next;
    const previousPage = data.previous;

    return { pokemonList, totalPages, nextPage, previousPage };
  } catch (error) {
    console.error("Error fetch pokemons ", error);
  }
}

async function getAllPokemonNames() {
  const response = await fetch(`${BASE_API_URL}/?offset=0&limit=100000`);
  const data = await response.json();
  const allPokemonList = data.results;
  const allPokemonNamesAndUrl = allPokemonList.map((pokemon) => {
    return { name: pokemon.name, url: pokemon.url };
  });

  return { allPokemonList, allPokemonNamesAndUrl };
}

async function getPokemonInfo(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const frontImage = data.sprites.front_default;
    const backImage = data.sprites.back_default;
    const pokemonId = data.id;

    return { frontImage, backImage, pokemonId };
  } catch (error) {
    console.error("Error fetching images", error);
  }
}

export { fetchPokemons, getAllPokemonNames, getPokemonInfo };

//! SORT ARRAY

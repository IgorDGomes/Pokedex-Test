export async function getPokemonList() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching pokemon list: ", error);
  }
}

export async function getPokemonDescription(id) {
  try {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    ).then((res) => res.json());

    const descriptionList = pokemon.flavor_text_entries;
    for (let i = 0; i < descriptionList.length; i++) {
      if (descriptionList[i].language.name === "en") {
        return descriptionList[i].flavor_text.replace(/[\n\f]/g, " ");
      }
    }

    return "Description in English not found :/";
  } catch (error) {
    console.error("Error fetching description: ", error);
  }
}

export function getPokemonSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

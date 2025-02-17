function pokemonColor(type) {
  const pokemonType = type.toLowerCase();

  switch (pokemonType) {
    case "normal":
      return "#9fa19f";

    case "fighting":
      return "#ff8000";

    case "flying":
      return "#81b9ef";

    case "poison":
      return "#9040cc";

    case "ground":
      return "#915121";

    case "rock":
      return "#afa981";

    case "bug":
      return "#91a119";

    case "ghost":
      return "#704170";

    case "steel":
      return "#60a1b8";

    case "fire":
      return "#e62829";

    case "water":
      return "#2980ef";

    case "grass":
      return "#42a129";

    case "electric":
      return "#fac000";

    case "psychic":
      return "#ef4179";

    case "ice":
      return "#3fd8ff";

    case "dragon":
      return "#5061e1";

    case "dark":
      return "#50413f";

    case "fairy":
      return "#f170f1";

    default:
      break;
  }
}

export { pokemonColor };

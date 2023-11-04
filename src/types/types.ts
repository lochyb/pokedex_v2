export const pokemonTypes: Record<string, string> = {
  normal: "bg-normal",
  fire: "bg-fire",
  water: "bg-water",
  electric: "bg-electric",
  grass: "bg-grass",
  ice: "bg-ice",
  fighting: "bg-fighting",
  poison: "bg-poison",
  ground: "bg-ground",
  flying: "bg-flying",
  psychic: "bg-psychic",
  bug: "bg-bug",
  rock: "bg-rock",
  ghost: "bg-ghost",
  dragon: "bg-dragon",
  dark: "bg-dark",
  steel: "bg-steel",
  fairy: "bg-fairy",
};

export const pokedexVersionRange: Record<string, { from: number; till: number }> = {
  1: {
    from: 0,
    till: 151,
  },
  2: {
    from: 151,
    till: 251,
  },
  3: {
    from: 251,
    till: 386,
  },
  4: {
    from: 386,
    till: 494,
  },
  5: {
    from: 494,
    till: 649,
  },
  6: {
    from: 649,
    till: 721,
  },
  7: {
    from: 721,
    till: 809,
  },
  8: {
    from: 809,
    till: 917,
  },
};

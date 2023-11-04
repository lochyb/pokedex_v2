import { PokemonSprite } from "../shared/PokemonSprite.tsx";
import { Pokemon } from "pokenode-ts";

interface PokemonBackFrontSpritesProps {
  pokemon: Pokemon;
}

function PokemonBackFrontSprites({ pokemon }: PokemonBackFrontSpritesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <PokemonSprite alt={pokemon.name} src={pokemon.sprites.front_default} />
      <PokemonSprite alt={pokemon.name} src={pokemon.sprites.back_default} />
      <PokemonSprite alt={pokemon.name} src={pokemon.sprites.front_shiny} />
      <PokemonSprite alt={pokemon.name} src={pokemon.sprites.back_shiny} />
    </div>
  );
}

export default PokemonBackFrontSprites;

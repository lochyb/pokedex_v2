import { pokemonTypes } from "../../types/types.ts";
import { PokemonType } from "pokenode-ts";

interface PokemonTypeBadgeProps {
  type: PokemonType;
}

export const PokemonTypeBadge = ({ type }: PokemonTypeBadgeProps) => {
  const typeBase = "badge badge-sm w-auto justify-start text-white h-5 rounded-md";

  return <span className={`${pokemonTypes[type.type.name]} ${typeBase}`}>{type.type.name}</span>;
};

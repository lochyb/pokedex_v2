import { Pokemon } from "pokenode-ts";
import { PokemonTypeBadge } from "../shared/PokemonTypeBadge.tsx";

interface PokemonPhysicalDetailsProps {
  pokemon: Pokemon;
}

function PokemonPhysicalDetails({ pokemon }: PokemonPhysicalDetailsProps) {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4">
      <div className="card-title">
        <h2 className="card-title">Types:</h2>
        {pokemon.types.map((type) => (
          <PokemonTypeBadge type={type} key={type.type.name} />
        ))}
      </div>

      <h2 className="card-title">Height: {pokemon.height / 10}m</h2>
      <h2 className="card-title">Weight: {pokemon.weight / 10}kg</h2>
    </div>
  );
}

export default PokemonPhysicalDetails;

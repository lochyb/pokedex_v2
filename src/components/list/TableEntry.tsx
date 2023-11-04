import { Pokemon } from "pokenode-ts";
import { Link } from "react-router-dom";
import { PokemonTypeBadge } from "../shared/PokemonTypeBadge.tsx";

interface TableEntryProps {
  pokemon: Pokemon;
}

function TableEntry({ pokemon }: TableEntryProps) {
  return (
    <tr>
      <td>
        <div className="inline-flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle h-16 w-16">
              <img src={pokemon.sprites.front_default ?? undefined} alt="pokemon_image" />
            </div>
          </div>
          <div>
            <Link className="link font-bold" to={`/search/${pokemon.name}`}>
              {pokemon.name}
            </Link>
            <div className="text-sm opacity-50">#{pokemon.id}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="inline-flex flex-col gap-1">
          {pokemon.types.map((type) => (
            <PokemonTypeBadge type={type} key={type.type.name} />
          ))}
        </div>
      </td>
      <td className="hidden xs:table-cell">
        <div className="flex w-fit flex-col gap-1">
          {pokemon.abilities.map((ability) => (
            <span className="badge badge-sm h-5 w-auto justify-start rounded-md" key={ability.ability.name}>
              {ability.ability.name}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
}

export default TableEntry;

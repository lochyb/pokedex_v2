import { Pokemon } from "pokenode-ts";
import { useSelector } from "react-redux";

import TablePagination from "./TablePagination.tsx";
import TableEntry from "./TableEntry.tsx";
import { TableFoot, TableHead } from "./TableParts.tsx";
import { RootState } from "../../redux/store.ts";

function PokemonTable() {
  const pokemonList: Pokemon[] | [] = useSelector((state: RootState) => state.pokemonList.pokemon);
  const range = useSelector((state: RootState) => state.pokemonList.range);

  return (
    <div className="mx-auto overflow-x-auto px-4">
      <div className="flex justify-center">
        <span className="btn join-item mb-4">{range}</span>
      </div>

      <TablePagination />

      <table className="table table-zebra mx-auto my-4 w-full max-w-[700px] overflow-hidden bg-primary-content/5">
        <TableHead />

        <tbody>
          {pokemonList.map((pokemon) => (
            <TableEntry key={`pokemon-${pokemon.id}`} pokemon={pokemon} />
          ))}
        </tbody>

        <TableFoot />
      </table>

      <TablePagination />
    </div>
  );
}

export default PokemonTable;

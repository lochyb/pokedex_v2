import { useSelector } from "react-redux";

import { RootState } from "../../redux/store.ts";
import PokemonStatsTable from "./PokemonStatsTable.tsx";
import PokemonEvolutionChain from "./PokemonEvolutionChain.tsx";
import { capitalizeFirstLetter } from "../../helpers/helpers.ts";
import PokemonBackFrontSprites from "./PokemonBackFrontSprites.tsx";
import PokemonPhysicalDetails from "./PokemonPhysicalDetails.tsx";

interface PokemonDetailsProps {
  handleShowModal: (id: number) => void;
  status: "idle" | "loading" | "error";
}

function PokemonDetails({ status }: PokemonDetailsProps) {
  const pokemon = useSelector((state: RootState) => state.pokemon.pokemon);

  if (status === "error") {
    const dialog = document.getElementById("error_modal") as HTMLDialogElement | null;

    dialog?.showModal();
  }

  if (pokemon == null) return null;

  return (
    <div className="flex flex-col break-words">
      <div className="divider">
        <div className="flex items-baseline gap-4">
          <span className=""># {pokemon.id}</span>
          <h1 className="text-2xl font-bold">{capitalizeFirstLetter(pokemon.name)}</h1>
        </div>
      </div>
      <PokemonBackFrontSprites pokemon={pokemon} />

      <div className="divider font-bold">Details</div>
      <PokemonPhysicalDetails pokemon={pokemon} />

      <div className="divider font-bold">Evolutions</div>
      <PokemonEvolutionChain id={pokemon.id} />

      <div className="divider font-bold">Stats</div>
      <PokemonStatsTable stats={pokemon.stats} />
    </div>
  );
}

export default PokemonDetails;

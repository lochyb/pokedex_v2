import { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import PokemonTable from "../components/list/PokemonTable.tsx";
import { usePokemonList } from "../hooks/usePokemonList.ts";
import TableNavigation from "../components/list/TableNavigation.tsx";
import { usePokemonGenerationList } from "../hooks/usePokemonGenerationList.ts";
import LoadingUI from "../components/base/LoadingUI.tsx";
import { pokedexVersionRange } from "../types/types.ts";
import ErrorModal from "../components/shared/ErrorModal.tsx";

function List() {
  const location = useLocation();
  const [URLSearchParams] = useSearchParams();
  const { generationId } = useParams();

  const { status: pokemonStatus, fetchPokemon } = usePokemonList();
  const { status: pokemonListStatus, updatePokemonGenerationList } = usePokemonGenerationList();

  const isLoading = pokemonStatus === "loading" || pokemonListStatus === "loading";
  const hasError = pokemonStatus === "error" || pokemonListStatus === "error";

  if (hasError) {
    const dialog = document.getElementById("error_modal") as HTMLDialogElement | null;

    dialog?.showModal();
  }

  useEffect(() => {
    (async () => {
      const generation = pokedexVersionRange[generationId ?? 1];

      const chunkedList = await updatePokemonGenerationList(generation);

      const page = URLSearchParams.get("page") ?? "1";

      await fetchPokemon(chunkedList![Number(page) - 1]);
    })();
  }, [location]);

  return (
    <>
      <LoadingUI isLoading={isLoading} />
      <ErrorModal />

      <div className="divider m-0 px-4 py-8">Generations</div>

      <TableNavigation />

      <div className="divider m-0 px-4 py-8">Pokemon</div>

      <PokemonTable />
    </>
  );
}
export default List;

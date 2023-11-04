import { useEffect } from "react";
import { Form, useLocation, useParams } from "react-router-dom";

import { usePokemonHook } from "../hooks/usePokemon.ts";
import PokemonDetails from "../components/search/PokemonDetails.tsx";
import LoadingUI from "../components/base/LoadingUI.tsx";
import ErrorModal from "../components/shared/ErrorModal.tsx";

function Search() {
  const location = useLocation();
  const { name } = useParams();

  const { setPokemon, status } = usePokemonHook();

  const handleShowModal = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.details_modal.showModal();
  };

  useEffect(() => {
    setPokemon(name ?? "pikachu");
  }, [location]);

  return (
    <>
      <LoadingUI isLoading={status === "loading"} />
      <ErrorModal />

      <div className="divider">Search</div>
      <div className="rounded-box mx-auto w-full max-w-sm bg-primary-content/95 p-4">
        <Form method="post" action="/search">
          <label>
            <input
              name="pokemonIdentifier"
              className="input w-full"
              type="text"
              placeholder="Try searching Pikachu or 25"
            />
          </label>
        </Form>
      </div>

      <PokemonDetails status={status} handleShowModal={handleShowModal} />
    </>
  );
}

export default Search;

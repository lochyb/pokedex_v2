import { NamedAPIResource, NamedAPIResourceList, PokemonClient } from "pokenode-ts";
import { useDispatch } from "react-redux";
import { setPages, setPokemonGenerationList } from "../redux/pokemonListSlice.ts";
import { useState } from "react";

const pokemonClient = new PokemonClient();

interface usePokemonGenerationListProps {
  status: "idle" | "loading" | "error";
  updatePokemonGenerationList: (generation: {
    from: number;
    till: number;
  }) => Promise<NamedAPIResource[][] | undefined>;
}

export const usePokemonGenerationList = (): usePokemonGenerationListProps => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const _getPokemonList = async (generation: { from: number; till: number }): Promise<NamedAPIResourceList> => {
    const limit = generation.till - generation.from;
    return await pokemonClient.listPokemons(generation.from, limit);
  };

  const updatePokemonGenerationList = async (generation: { from: number; till: number }) => {
    setStatus("loading");

    try {
      const pokemonList = await _getPokemonList(generation);
      const chunkedList = chunkArray(pokemonList.results);

      dispatch(setPokemonGenerationList(chunkedList));
      dispatch(setPages(chunkedList.length));

      setStatus("idle");
      return chunkedList;
    } catch ($e) {
      setStatus("error");
    }
  };

  return {
    status,
    updatePokemonGenerationList,
  };
};

const chunkArray = (inputArray: NamedAPIResource[]): NamedAPIResource[][] => {
  const perChunk = 20;

  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      resultArray[chunkIndex] = []; // start a new chunk
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};

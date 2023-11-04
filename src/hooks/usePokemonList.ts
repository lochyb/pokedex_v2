import { NamedAPIResource, PokemonClient } from "pokenode-ts";
import { useDispatch } from "react-redux";
import { setPokemon, setRange } from "../redux/pokemonListSlice.ts";
import { useState } from "react";

const pokemonClient = new PokemonClient();

interface usePokemonList {
  fetchPokemon: (list: NamedAPIResource[]) => Promise<void>;
  status: "idle" | "loading" | "error";
}

export const usePokemonList = (): usePokemonList => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const fetchPokemon = async (list: NamedAPIResource[]) => {
    try {
      setStatus("loading");

      const pokemonList = await Promise.all(
        list.map(async (resource: NamedAPIResource) => {
          return await pokemonClient.getPokemonByName(resource.name);
        }),
      );
      dispatch(setPokemon(pokemonList));

      const from = pokemonList[0].id;
      const till = pokemonList[pokemonList.length - 1].id;
      const range = `${from} - ${till}`;
      dispatch(setRange(range));

      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  };

  return {
    fetchPokemon,
    status,
  };
};

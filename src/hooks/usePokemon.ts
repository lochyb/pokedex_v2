import { Pokemon, PokemonClient } from "pokenode-ts";
import { useDispatch } from "react-redux";
import { set } from "../redux/pokemonSlice.ts";
import { useState } from "react";

const pokemonClient = new PokemonClient();

interface usePokemon {
  fetchPokemon: (name: string) => Promise<Pokemon | undefined>;
  setPokemon: (name: string) => Promise<void>;
  status: "idle" | "loading" | "error";
}

export const usePokemonHook = (): usePokemon => {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const dispatch = useDispatch();

  const setPokemon = async (name: string) => {
    const poke = await fetchPokemon(name);

    if (poke) {
      dispatch(set(poke));
      setStatus("idle");
    }
  };

  const fetchPokemon = async (name: string) => {
    try {
      setStatus("loading");
      return await pokemonClient.getPokemonByName(name);
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return {
    setPokemon,
    fetchPokemon,
    status,
  };
};

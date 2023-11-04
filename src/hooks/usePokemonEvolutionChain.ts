import { useState } from "react";
import { ChainLink, EvolutionClient, PokemonClient } from "pokenode-ts";
import { getIdFromUrl } from "../helpers/helpers.ts";

const pokemonClient = new PokemonClient();
const evolutionClient = new EvolutionClient();

interface UsePokemonEvolutionChain {
  status: "idle" | "loading" | "error";
  getEvolutions: (id: number) => Promise<void>;
  phaseOneIds: number[];
  phaseTwoIds: number[];
  phaseThreeIds: number[][];
}

export const usePokemonEvolutionChain = (): UsePokemonEvolutionChain => {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [phaseOneIds, setPhaseOneIds] = useState<number[]>([0]);
  const [phaseTwoIds, setPhaseTwoIds] = useState<number[]>([0]);
  const [phaseThreeIds, setPhaseThreeIds] = useState<number[][]>([[0]]);

  const getEvolutions = async (id: number): Promise<void> => {
    setStatus("loading");

    try {
      const species = await pokemonClient.getPokemonSpeciesById(id);
      const evolutionId = getIdFromUrl(species.evolution_chain.url);

      const evolutions = await evolutionClient.getEvolutionChainById(evolutionId);

      setPhaseOneIds([getIdFromUrl(evolutions.chain.species.url)]);

      const phaseThreePokemon: number[][] = [];

      const phaseTwoPokemon = evolutions.chain.evolves_to.map((chainLink: ChainLink) => {
        const thirdEvolutions = chainLink.evolves_to.map((chainLink) => {
          return getIdFromUrl(chainLink.species.url);
        });
        phaseThreePokemon.push(thirdEvolutions);

        return getIdFromUrl(chainLink.species.url);
      });

      setPhaseTwoIds(phaseTwoPokemon);
      setPhaseThreeIds(phaseThreePokemon);

      setStatus("idle");
    } catch (e) {
      setStatus("error");
      console.error(e);
    }
  };

  return { status, getEvolutions, phaseOneIds, phaseTwoIds, phaseThreeIds };
};

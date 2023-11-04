import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePokemonEvolutionChain } from "../../hooks/usePokemonEvolutionChain.ts";
import { PokemonSprite } from "../shared/PokemonSprite.tsx";

interface PokemonEvolutionChainProps {
  id: number;
}

function PokemonEvolutionChain({ id }: PokemonEvolutionChainProps) {
  const { status, getEvolutions, phaseOneIds, phaseTwoIds, phaseThreeIds } = usePokemonEvolutionChain();
  const location = useLocation();

  useEffect(() => {
    getEvolutions(id);
  }, [id, location]);

  if (status === "loading") {
    return (
      <div className="flex w-full">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col justify-center gap-4">
        {phaseOneIds.map((id) => {
          return (
            <Link to={`/search/${id}`} key={`pokemon-${id}`}>
              <PokemonSprite
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`${id}`}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center gap-4">
        {phaseTwoIds.map((id) => {
          return (
            <Link to={`/search/${id}`} key={`pokemon-${id}`}>
              <PokemonSprite
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`${id}`}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center gap-4">
        {phaseThreeIds.map((ids) => {
          return ids.map((id: number) => {
            return (
              <Link to={`/search/${id}`} key={`pokemon-${id}`}>
                <PokemonSprite
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={`${id}`}
                />
              </Link>
            );
          });
        })}
      </div>
    </div>
  );
}

export default PokemonEvolutionChain;

interface PokemonSpriteProps {
  src: string | null;
  alt: string;
}

export const PokemonSprite = ({ src, alt }: PokemonSpriteProps) => {
  return (
    <figure className="h-auto">
      <img className="min-h-24 mask mask-squircle h-32 w-32 bg-base-300 p-4" src={src ?? undefined} alt={alt} />
    </figure>
  );
};

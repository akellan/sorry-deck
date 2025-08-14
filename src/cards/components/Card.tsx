interface CardProps {
  id: string;
}

export function Card({ id }: CardProps) {
  return (
    <img
      src={`/cards/${id}.png`}
      className="rounded-xl max-w-sm bg-red cursor-pointer"
    />
  );
}

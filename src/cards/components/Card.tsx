import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { ALL_CARDS } from "../Deck";

interface CardProps {
  idObj: { id: string };
}

export const Card = function Card({
  idObj,
  className,
  ...props
}: CardProps & React.ComponentProps<typeof motion.img>) {
  const isRotated = useRef(false);

  isRotated.current = !isRotated.current;

  useEffect(() => {
    Object.values(ALL_CARDS).forEach((cardId) => {
      const img = new Image();
      img.src = `cards/${cardId}.png`;
    });
  }, []);

  return (
    <motion.img
      src={`cards/${idObj.id}.png`}
      className={cn("rounded-2xl bg-red cursor-pointer", className)}
      key={"test"}
      animate={{ rotate: isRotated.current ? 0 : 180 }}
      transition={{ type: "spring", duration: 0.5 }}
      {...props}
    ></motion.img>
  );
};

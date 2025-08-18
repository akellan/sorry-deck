import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";
import { usePreloadDeck } from "../useDeck";

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

  usePreloadDeck();

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

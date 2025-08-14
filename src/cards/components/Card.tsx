import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface CardProps {
  id: string;
}

export const Card = function Card({
  id,
  className,
  ...props
}: CardProps & React.ComponentProps<typeof motion.img>) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.img
        src={`cards/${id}.png`}
        className={cn("rounded-2xl bg-red cursor-pointer", className)}
        key={id}
        drag="x"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        {...props}
      ></motion.img>
    </AnimatePresence>
  );
};

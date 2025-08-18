import { useEffect, useMemo, useState } from "react";
import { shuffle } from "./shuffle";

export const ALL_CARDS = {
  One: "1" as const,
  Two: "2" as const,
  Three: "3" as const,
  Four: "4" as const,
  Five: "5" as const,
  Seven: "7" as const,
  Eight: "8" as const,
  Ten: "10" as const,
  Eleven: "11" as const,
  Twelve: "12" as const,
  Sorry: "sorry" as const,
};

type Card = (typeof ALL_CARDS)[keyof typeof ALL_CARDS];
type Deck = Card[];

function create(): Deck {
  const cards: Deck = [];

  for (let i = 0; i < 4; i++) {
    cards.push(...Object.values(ALL_CARDS));
  }

  cards.push(ALL_CARDS["Sorry"]);

  shuffle(cards);

  return cards;
}

export function useDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deck, setDeck] = useState<Deck>(create);

  return useMemo(
    () => ({
      currentCard: deck[currentIndex],
      forward: () => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1;

          if (newIndex >= deck.length) {
            setDeck(shuffle);
            return 0;
          }

          return newIndex;
        });
      },

      back: () => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex > 0) {
            return prevIndex - 1;
          }

          return prevIndex;
        });
      },
    }),
    [currentIndex, deck],
  );
}

export const usePreloadDeck = () => {
  useEffect(() => {
    Object.values(ALL_CARDS).forEach((cardId) => {
      const img = new Image();
      img.src = `cards/${cardId}.png`;
    });
  }, []);
};

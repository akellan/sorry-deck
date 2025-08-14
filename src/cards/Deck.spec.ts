import { describe, test, beforeEach, expect } from "vitest";
import { Deck, ALL_CARDS } from "./Deck";

describe("Deck", () => {
  let deck: Deck;
  const fullDeckLength = Object.values(ALL_CARDS).length * 4 + 1;

  beforeEach(() => {
    deck = new Deck();
  });

  test("should be shuffled", () => {
    const sortedCards = Object.values(ALL_CARDS);
    const shuffledCards = [];

    while (shuffledCards.length < sortedCards.length) {
      shuffledCards.push(deck.current);
      deck.forward();
    }

    expect(shuffledCards).not.toEqual(sortedCards);
  });

  test("should contain full deck", () => {
    const map = new Map();

    for (let i = 0; i < fullDeckLength; i++) {
      map.set(deck.current, (map.get(deck.current) ?? 0) + 1);
      deck.forward();
    }

    for (const type of Object.values(ALL_CARDS)) {
      expect(map.get(type)).toBe(type === "sorry" ? 5 : 4);
    }
  });

  test("backward should respect the order", () => {
    const cards = [];

    for (let i = 0; i < fullDeckLength - 1; i++) {
      cards.push(deck.current);
      deck.forward();
    }

    while (cards.length > 0) {
      const current = cards.pop();
      deck.back();
      expect(current).toBe(deck.current);
    }
  });
});

import { expect, describe, test } from "vitest";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
  test("shoudld return new array and shuffled", () => {
    const deck = new Array(10).fill(null).map((_, i) => i);

    const shuffledDeck = shuffle(deck);

    expect(shuffledDeck).not.toBe(deck);
    expect(shuffledDeck).not.toEqual(deck);
  });
});

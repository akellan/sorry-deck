export function shuffle<T>(deck: T[]): T[] {
  const newDeck = deck.slice(0);

  for (let i = deck.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i - 1));

    [newDeck[randomIndex], newDeck[i]] = [newDeck[i], newDeck[randomIndex]];
  }

  return newDeck;
}

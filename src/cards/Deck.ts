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

type AllCards = typeof ALL_CARDS;
type CardId = AllCards[keyof AllCards];

export class Deck {
  private cards: CardId[] = [];
  private currentIndex: number = 0;

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.cards.push(...Object.values(ALL_CARDS));
    }

    this.cards.push(ALL_CARDS["Sorry"]);

    this.shuffle();
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);

      [this.cards[randomIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randomIndex],
      ];
    }
  }

  get current(): string {
    return this.cards[this.currentIndex];
  }

  forward() {
    this.currentIndex++;
    if (this.currentIndex >= this.cards.length) {
      this.currentIndex = 0;
      this.shuffle();
    }
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

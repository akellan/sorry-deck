import { Button } from "@/components/ui/button";
import { Card } from "./cards/components/Card";
import { Deck } from "./cards/Deck";
import { useState } from "react";

const deck = new Deck();

function App() {
  const [currentCardId, setCurrentCardId] = useState(deck.current);

  return (
    <div className="p-5 flex min-h-svh flex-col items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div
        onClick={() => {
          deck.forward();
          setCurrentCardId(deck.current);
        }}
      >
        <Card
          className="max-h-[75vh]"
          onDragEnd={() => {
            deck.forward();
            setCurrentCardId(deck.current);
          }}
          id={currentCardId}
        />
      </div>
      <div className="p-5 h-20">
        <Button
          onClick={() => {
            deck.back();
            setCurrentCardId(deck.current);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default App;

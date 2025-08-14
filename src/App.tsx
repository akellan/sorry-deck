import { Button } from "@/components/ui/button";
import { Card } from "./cards/components/Card";
import { Deck } from "./cards/Deck";
import { useState } from "react";

const deck = new Deck();

function App() {
  const [currentCardId, setCurrentCardId] = useState<{ id: string }>({
    id: deck.current,
  });

  return (
    <div className="select-none p-5 gap-10 flex min-h-svh flex-col items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div>
        <Card
          onClick={() => {
            deck.forward();
            setCurrentCardId({ id: deck.current });
          }}
          className="h-[70vh] shadow-xl"
          idObj={currentCardId}
        />
      </div>
      <div>
        <Button
          className="select-none"
          onClick={() => {
            deck.back();
            setCurrentCardId(currentCardId);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default App;

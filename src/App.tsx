import { Button } from "@/components/ui/button";
import { Card } from "./cards/components/Card";
import { useDeck } from "./cards/useDeck";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const { back, currentCard, forward } = useDeck();
  const debounceFn = useDebounce(100);

  return (
    <div className="select-none p-5 gap-10 flex min-h-svh flex-col items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div>
        <Card
          onClick={() => debounceFn(forward)}
          onTouchEnd={() => debounceFn(forward)}
          className="h-[70vh] shadow-xl"
          idObj={{ id: currentCard }}
        />
      </div>
      <div>
        <Button className="select-none" onClick={back}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default App;

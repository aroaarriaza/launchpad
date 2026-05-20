import Tile from "./Tile";
import type { GuessResult, GameStatus } from "@/types/wordle";

interface BoardProps {
  guesses: GuessResult[];
  current: string;
  gameStatus: GameStatus;
  shake: boolean;
}

export default function Board({ guesses, current, gameStatus, shake }: BoardProps) {
  return (
    <div className="flex flex-col gap-2">
      {guesses.map((guess, i) => (
        <div key={i} className="flex gap-2">
          {guess.word.split("").map((letter, j) => (
            <Tile key={j} letter={letter} status={guess.statuses[j]} delay={j * 80} />
          ))}
        </div>
      ))}

      {gameStatus === "playing" && (
        <div className={`flex gap-2 ${shake ? "animate-shake" : ""}`}>
          {Array(5).fill(null).map((_, i) => (
            <Tile key={i} letter={current[i] ?? ""} status="empty" />
          ))}
        </div>
      )}
    </div>
  );
}

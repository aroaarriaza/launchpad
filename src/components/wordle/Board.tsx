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
    <div className="flex flex-col gap-1.5">
      {Array(6)
        .fill(null)
        .map((_, rowIndex) => {
          const isCompleted = rowIndex < guesses.length;
          const isCurrent = rowIndex === guesses.length && gameStatus === "playing";

          if (isCompleted) {
            const guess = guesses[rowIndex];
            return (
              <div key={rowIndex} className="flex gap-1.5">
                {guess.word.split("").map((letter, i) => (
                  <Tile key={i} letter={letter} status={guess.statuses[i]} />
                ))}
              </div>
            );
          }

          if (isCurrent) {
            const letters = current.padEnd(5).split("");
            return (
              <div
                key={rowIndex}
                className={`flex gap-1.5 ${shake ? "animate-shake" : ""}`}
              >
                {letters.map((letter, i) => (
                  <Tile key={i} letter={letter.trim()} status="empty" />
                ))}
              </div>
            );
          }

          return (
            <div key={rowIndex} className="flex gap-1.5">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Tile key={i} letter="" status="empty" />
                ))}
            </div>
          );
        })}
    </div>
  );
}

import type { TileStatus } from "@/types/wordle";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

const keyStyles: Record<TileStatus, string> = {
  correct: "bg-green-600 text-white",
  present: "bg-yellow-500 text-white",
  absent: "bg-neutral-400 text-white dark:bg-neutral-600",
  empty: "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100",
};

interface KeyboardProps {
  letterMap: Record<string, TileStatus>;
  onLetter: (letter: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
}

export default function Keyboard({ letterMap, onLetter, onBackspace, onEnter }: KeyboardProps) {
  const handleKey = (key: string) => {
    if (key === "⌫") onBackspace();
    else if (key === "ENTER") onEnter();
    else onLetter(key);
  };

  return (
    <div className="flex flex-col items-center gap-1.5 w-full">
      {ROWS.map((row, i) => (
        <div key={i} className="flex gap-1.5">
          {row.map((key) => {
            const status = letterMap[key] ?? "empty";
            const isWide = key === "ENTER" || key === "⌫";
            return (
              <button
                key={key}
                onClick={() => handleKey(key)}
                className={`
                  ${isWide ? "px-3 text-xs" : "w-9"} h-14 rounded font-semibold text-sm
                  select-none transition-colors active:scale-95
                  ${keyStyles[status]}
                `}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

import type { TileStatus } from "@/types/wordle";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BORRAR"],
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
    if (key === "BORRAR") onBackspace();
    else if (key === "ENTER") onEnter();
    else onLetter(key);
  };

  return (
    <div className="flex flex-col items-center gap-1.5 w-full">
      {ROWS.map((row, i) => (
        <div key={i} className="flex gap-1.5">
          {row.map((key) => {
            const isAction = key === "ENTER" || key === "BORRAR";
            const status = isAction ? "empty" : (letterMap[key] ?? "empty");
            return (
              <button
                key={key}
                onClick={() => handleKey(key)}
                className={`
                  ${isAction ? "px-2.5 text-xs min-w-[3.5rem]" : "w-9 text-sm"} h-14 rounded font-semibold
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

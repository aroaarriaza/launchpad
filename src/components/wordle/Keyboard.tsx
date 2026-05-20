import type { TileStatus } from "@/types/wordle";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BORRAR"],
];

const keyStyles: Record<TileStatus, string> = {
  correct: "bg-emerald-500 text-white shadow-md shadow-emerald-500/30",
  present: "bg-amber-400 text-white shadow-md shadow-amber-400/30",
  absent: "bg-neutral-300 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400",
  empty:
    "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30",
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
                  ${isAction ? "px-2.5 text-xs min-w-[3.5rem]" : "w-9 text-sm"} h-12 rounded-lg font-semibold
                  select-none transition-all duration-150 active:scale-90
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

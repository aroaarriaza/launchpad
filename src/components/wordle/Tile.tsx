import type { TileStatus } from "@/types/wordle";

const styles: Record<TileStatus, string> = {
  correct: "bg-green-600 border-green-600 text-white",
  present: "bg-yellow-500 border-yellow-500 text-white",
  absent: "bg-neutral-400 border-neutral-400 text-white dark:bg-neutral-600 dark:border-neutral-600",
  empty: "border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100",
};

interface TileProps {
  letter: string;
  status: TileStatus;
}

export default function Tile({ letter, status }: TileProps) {
  return (
    <div
      className={`w-14 h-14 border-2 flex items-center justify-center text-xl font-bold uppercase select-none transition-colors duration-300 ${styles[status]}`}
    >
      {letter}
    </div>
  );
}

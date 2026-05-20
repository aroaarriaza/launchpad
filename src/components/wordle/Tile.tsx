import type { TileStatus } from "@/types/wordle";

const styles: Record<TileStatus, string> = {
  correct:
    "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20",
  present:
    "bg-amber-400 border-amber-400 text-white shadow-lg shadow-amber-400/30 dark:shadow-amber-400/20",
  absent:
    "bg-neutral-300 border-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300",
  empty:
    "border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 bg-white/60 dark:bg-neutral-900/40",
};

interface TileProps {
  letter: string;
  status: TileStatus;
  delay?: number;
}

export default function Tile({ letter, status, delay = 0 }: TileProps) {
  const isRevealed = status !== "empty";
  return (
    <div
      className={`w-14 h-14 border-2 rounded-xl flex items-center justify-center text-xl font-bold uppercase select-none transition-all duration-300 ${styles[status]} ${isRevealed && letter ? "scale-100" : ""}`}
      style={isRevealed && letter ? { animationDelay: `${delay}ms` } : undefined}
    >
      {letter}
    </div>
  );
}

"use client";

import { useWordle } from "@/hooks/useWordle";
import Board from "./Board";
import Keyboard from "./Keyboard";

export default function WordleGame() {
  const { guesses, current, gameStatus, letterMap, target, hint, shake, addLetter, removeLetter, submitGuess, restart } =
    useWordle();

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="font-display text-3xl font-semibold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-700 to-violet-700 dark:from-white dark:via-neutral-200 dark:to-violet-400 bg-clip-text text-transparent">
          Wordle
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Adivina la palabra de 5 letras en 6 intentos
        </p>
      </div>

      {/* Hint card */}
      {hint && (
        <div className="w-full rounded-2xl border border-violet-100 dark:border-violet-900 bg-violet-50/60 dark:bg-violet-950/30 px-4 py-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 dark:text-violet-500 mb-1">
            Pista
          </p>
          <p className="text-sm text-violet-800 dark:text-violet-200 italic">"{hint}"</p>
        </div>
      )}

      {/* Status */}
      <div className="min-h-[3.5rem] flex items-center justify-center">
        {gameStatus === "won" && (
          <div className="text-center space-y-2 slide-in">
            <p className="text-2xl">🎉</p>
            <p className="font-semibold text-emerald-600 dark:text-emerald-400">
              ¡Lo conseguiste en {guesses.length} {guesses.length === 1 ? "intento" : "intentos"}!
            </p>
            <button
              onClick={restart}
              className="text-sm px-4 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
            >
              Jugar de nuevo
            </button>
          </div>
        )}
        {gameStatus === "lost" && (
          <div className="text-center space-y-2 slide-in">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">La palabra era</p>
            <p className="font-display text-2xl font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
              {target}
            </p>
            <button
              onClick={restart}
              className="text-sm px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-colors"
            >
              Intentar de nuevo
            </button>
          </div>
        )}
        {gameStatus === "playing" && (
          <div className="flex items-center gap-2">
            {Array(6).fill(null).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i < guesses.length
                    ? "bg-neutral-400 dark:bg-neutral-500"
                    : "bg-violet-200 dark:bg-violet-800"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <Board guesses={guesses} current={current} gameStatus={gameStatus} shake={shake} />
      <Keyboard letterMap={letterMap} onLetter={addLetter} onBackspace={removeLetter} onEnter={submitGuess} />

      <p className="text-xs text-neutral-300 dark:text-neutral-600">
        También puedes usar el teclado físico
      </p>
    </div>
  );
}

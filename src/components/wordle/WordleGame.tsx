"use client";

import { useWordle } from "@/hooks/useWordle";
import Board from "./Board";
import Keyboard from "./Keyboard";

export default function WordleGame() {
  const { guesses, current, gameStatus, letterMap, target, shake, addLetter, removeLetter, submitGuess, restart } =
    useWordle();

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Wordle</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Adivina la palabra de 5 letras en 6 intentos
        </p>
      </div>

      <div className="min-h-[2rem] text-center">
        {gameStatus === "won" && (
          <div className="space-y-1">
            <p className="font-semibold text-green-600">
              ¡Lo conseguiste en {guesses.length} {guesses.length === 1 ? "intento" : "intentos"}!
            </p>
            <button onClick={restart} className="text-sm underline underline-offset-4 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200">
              Jugar de nuevo
            </button>
          </div>
        )}
        {gameStatus === "lost" && (
          <div className="space-y-1">
            <p className="text-neutral-600 dark:text-neutral-400">
              La palabra era{" "}
              <span className="font-bold text-neutral-900 dark:text-neutral-100">{target}</span>
            </p>
            <button onClick={restart} className="text-sm underline underline-offset-4 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200">
              Jugar de nuevo
            </button>
          </div>
        )}
        {gameStatus === "playing" && (
          <p className="text-xs text-neutral-400">
            {6 - guesses.length} {6 - guesses.length === 1 ? "intento restante" : "intentos restantes"}
          </p>
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

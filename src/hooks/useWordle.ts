"use client";

import { useState, useEffect, useCallback } from "react";
import { getRandomEntry } from "@/lib/wordle-words";
import type { TileStatus, GameStatus, GuessResult } from "@/types/wordle";

const STATUS_PRIORITY: Record<TileStatus, number> = {
  correct: 3,
  present: 2,
  absent: 1,
  empty: 0,
};

function evaluateGuess(guess: string, target: string): TileStatus[] {
  const result: TileStatus[] = Array(5).fill("absent");
  const remaining = target.split("");

  // First pass: mark exact matches (green)
  guess.split("").forEach((letter, i) => {
    if (letter === remaining[i]) {
      result[i] = "correct";
      remaining[i] = "#";
    }
  });

  // Second pass: mark letters present but in wrong position (yellow)
  guess.split("").forEach((letter, i) => {
    if (result[i] === "correct") return;
    const idx = remaining.indexOf(letter);
    if (idx !== -1) {
      result[i] = "present";
      remaining[idx] = "#";
    }
  });

  return result;
}

export function useWordle() {
  const [target, setTarget] = useState("");
  const [hint, setHint] = useState("");
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [current, setCurrent] = useState("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [letterMap, setLetterMap] = useState<Record<string, TileStatus>>({});
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const entry = getRandomEntry();
    setTarget(entry.word);
    setHint(entry.hint);
  }, []);

  const addLetter = useCallback(
    (letter: string) => {
      if (gameStatus !== "playing" || current.length >= 5) return;
      setCurrent((prev) => prev + letter);
    },
    [gameStatus, current.length]
  );

  const removeLetter = useCallback(() => {
    if (gameStatus !== "playing") return;
    setCurrent((prev) => prev.slice(0, -1));
  }, [gameStatus]);

  const submitGuess = useCallback(() => {
    if (gameStatus !== "playing") return;
    if (current.length !== 5) {
      // Shake animation for incomplete word
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    const guess = current;
    const statuses = evaluateGuess(guess, target);

    // Update letter keyboard map, keeping the best status per letter
    setLetterMap((prev) => {
      const next = { ...prev };
      guess.split("").forEach((letter, i) => {
        const existing = next[letter];
        const incoming = statuses[i];
        if (!existing || STATUS_PRIORITY[incoming] > STATUS_PRIORITY[existing]) {
          next[letter] = incoming;
        }
      });
      return next;
    });

    setGuesses((prev) => {
      const next = [...prev, { word: guess, statuses }];
      if (guess === target) setGameStatus("won");
      else if (next.length >= 6) setGameStatus("lost");
      return next;
    });

    setCurrent("");
  }, [gameStatus, current, target]);

  const restart = useCallback(() => {
    const entry = getRandomEntry();
    setTarget(entry.word);
    setHint(entry.hint);
    setGuesses([]);
    setCurrent("");
    setGameStatus("playing");
    setLetterMap({});
    setShake(false);
  }, []);

  // Physical keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) return;
      const key = e.key.toUpperCase();
      if (key === "BACKSPACE") removeLetter();
      else if (key === "ENTER") submitGuess();
      else if (/^[A-Z]$/.test(key)) addLetter(key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [addLetter, removeLetter, submitGuess]);

  return { target, hint, guesses, current, gameStatus, letterMap, shake, addLetter, removeLetter, submitGuess, restart };
}

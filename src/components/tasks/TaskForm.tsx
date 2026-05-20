"use client";

import { useState, useRef } from "react";

interface TaskFormProps {
  onAdd: (text: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nueva tarea..."
        autoFocus
        className="flex-1 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="px-4 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium disabled:opacity-30 transition-opacity"
      >
        Añadir
      </button>
    </form>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import type { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const commitEdit = () => {
    if (value.trim()) {
      onEdit(task.id, value);
    } else {
      setValue(task.text);
    }
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") commitEdit();
    if (e.key === "Escape") {
      setValue(task.text);
      setEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-3 py-3.5 border-b border-neutral-100 dark:border-neutral-800 last:border-0 group">
      {/* Toggle done */}
      <button
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? "Marcar como pendiente" : "Marcar como completada"}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
          task.done
            ? "bg-neutral-900 dark:bg-white border-neutral-900 dark:border-white"
            : "border-neutral-300 dark:border-neutral-600 hover:border-neutral-600 dark:hover:border-neutral-400"
        }`}
      />

      {/* Text or inline edit input */}
      {editing ? (
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-b border-neutral-400 dark:border-neutral-500 text-sm focus:outline-none py-0.5"
        />
      ) : (
        <span
          onDoubleClick={() => !task.done && setEditing(true)}
          title={task.done ? undefined : "Doble clic para editar"}
          className={`flex-1 text-sm select-none ${
            task.done
              ? "line-through text-neutral-400 dark:text-neutral-500"
              : "cursor-default"
          }`}
        >
          {task.text}
        </span>
      )}

      {/* Edit button (visible on hover, hidden when done or editing) */}
      {!task.done && !editing && (
        <button
          onClick={() => setEditing(true)}
          aria-label="Editar tarea"
          className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-all text-xs"
        >
          editar
        </button>
      )}

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
        className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-500 transition-all text-sm leading-none"
      >
        ✕
      </button>
    </div>
  );
}

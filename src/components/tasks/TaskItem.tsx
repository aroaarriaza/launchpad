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
    <div className="flex items-center gap-3 py-3.5 group">
      {/* Toggle done */}
      <button
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? "Marcar como pendiente" : "Marcar como completada"}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
          task.done
            ? "bg-violet-600 border-violet-600 shadow-sm shadow-violet-400/30"
            : "border-neutral-300 dark:border-neutral-600 hover:border-violet-400 dark:hover:border-violet-500"
        }`}
      >
        {task.done && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
            <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Text or inline edit input */}
      {editing ? (
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-b border-violet-400 dark:border-violet-600 text-sm focus:outline-none py-0.5"
        />
      ) : (
        <span
          onDoubleClick={() => !task.done && setEditing(true)}
          title={task.done ? undefined : "Doble clic para editar"}
          className={`flex-1 text-sm select-none transition-colors ${
            task.done
              ? "line-through text-neutral-400 dark:text-neutral-600"
              : "cursor-default"
          }`}
        >
          {task.text}
        </span>
      )}

      {/* Edit button */}
      {!task.done && !editing && (
        <button
          onClick={() => setEditing(true)}
          aria-label="Editar tarea"
          className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all text-xs"
        >
          editar
        </button>
      )}

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
        className="opacity-0 group-hover:opacity-100 text-neutral-300 dark:text-neutral-600 hover:text-red-500 dark:hover:text-red-400 transition-all text-sm leading-none"
      >
        ✕
      </button>
    </div>
  );
}

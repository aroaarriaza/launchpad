"use client";

import { useTasks } from "@/hooks/useTasks";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import type { FilterType } from "@/types/task";

const FILTERS: { value: FilterType; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendientes" },
  { value: "done", label: "Completadas" },
];

export default function TasksApp() {
  const {
    tasks,
    total,
    pendingCount,
    doneCount,
    filter,
    setFilter,
    addTask,
    toggleTask,
    editTask,
    deleteTask,
    clearDone,
  } = useTasks();

  const emptyMessage =
    filter === "done"
      ? "Ninguna tarea completada aún."
      : filter === "pending"
      ? "No quedan tareas pendientes. ¡Todo listo!"
      : "No hay tareas. Añade una arriba.";

  const emptyIcon =
    filter === "done" ? "✓" : filter === "pending" ? "🎉" : "📋";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-700 to-violet-700 dark:from-white dark:via-neutral-200 dark:to-violet-400 bg-clip-text text-transparent mb-1">
          Tareas
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {total === 0
            ? "Empieza añadiendo tu primera tarea"
            : pendingCount === 0
            ? "¡Todo listo! No quedan pendientes"
            : `${pendingCount} ${pendingCount === 1 ? "tarea pendiente" : "tareas pendientes"} de ${total}`}
        </p>
      </div>

      {/* Progress bar */}
      {total > 0 && (
        <div className="h-1 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500"
            style={{ width: `${(doneCount / total) * 100}%` }}
          />
        </div>
      )}

      <TaskForm onAdd={addTask} />

      {total > 0 && (
        <>
          {/* Filter tabs */}
          <div className="flex gap-1 border-b border-neutral-100 dark:border-neutral-800">
            {FILTERS.map((f) => {
              const count = f.value === "pending" ? pendingCount : f.value === "done" ? doneCount : total;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-3 py-2 text-sm transition-all border-b-2 -mb-px flex items-center gap-1.5 ${
                    filter === f.value
                      ? "border-violet-600 text-violet-700 dark:text-violet-300 dark:border-violet-500 font-medium"
                      : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                >
                  {f.label}
                  {count > 0 && (
                    <span
                      className={`text-xs rounded-full px-1.5 py-0.5 leading-none transition-colors ${
                        filter === f.value
                          ? "bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Task list */}
          {tasks.length === 0 ? (
            <div className="text-center py-14 space-y-3">
              <p className="text-3xl">{emptyIcon}</p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">{emptyMessage}</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-neutral-100 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800 px-4 bg-white/50 dark:bg-neutral-900/30">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          )}

          {/* Footer */}
          {doneCount > 0 && (
            <div className="flex justify-end">
              <button
                onClick={clearDone}
                className="text-xs text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                Limpiar completadas ({doneCount})
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

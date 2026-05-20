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
      ? "No quedan tareas pendientes."
      : "No hay tareas. ¡Añade una arriba!";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Tareas</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {total === 0
            ? "Empieza añadiendo tu primera tarea"
            : pendingCount === 0
            ? "¡Todo listo! No quedan pendientes"
            : `${pendingCount} ${pendingCount === 1 ? "tarea pendiente" : "tareas pendientes"}`}
        </p>
      </div>

      <TaskForm onAdd={addTask} />

      {total > 0 && (
        <>
          {/* Filter tabs */}
          <div className="flex gap-1 border-b border-neutral-100 dark:border-neutral-800">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${
                  filter === f.value
                    ? "border-neutral-900 dark:border-white font-medium"
                    : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {f.label}
                {f.value === "pending" && pendingCount > 0 && (
                  <span className="ml-1.5 text-xs bg-neutral-200 dark:bg-neutral-700 rounded-full px-1.5 py-0.5">
                    {pendingCount}
                  </span>
                )}
                {f.value === "done" && doneCount > 0 && (
                  <span className="ml-1.5 text-xs bg-neutral-200 dark:bg-neutral-700 rounded-full px-1.5 py-0.5">
                    {doneCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Task list */}
          {tasks.length === 0 ? (
            <p className="text-sm text-neutral-400 text-center py-10">{emptyMessage}</p>
          ) : (
            <div className="rounded-lg border border-neutral-100 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800 px-4">
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
                className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
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

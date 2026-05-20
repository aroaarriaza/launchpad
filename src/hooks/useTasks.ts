"use client";

import { useState, useEffect, useCallback } from "react";
import type { Task, FilterType } from "@/types/task";

const STORAGE_KEY = "ev-tasks";

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function loadFromStorage(): Task[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  // Load from localStorage on mount
  useEffect(() => {
    setTasks(loadFromStorage());
  }, []);

  // Persist to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text: string) => {
    if (!text.trim()) return;
    setTasks((prev) => [
      { id: generateId(), text: text.trim(), done: false, createdAt: Date.now() },
      ...prev,
    ]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const editTask = useCallback((id: string, text: string) => {
    if (!text.trim()) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: text.trim() } : t))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearDone = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.done));
  }, []);

  const filtered = tasks.filter((t) => {
    if (filter === "pending") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  const pendingCount = tasks.filter((t) => !t.done).length;
  const doneCount = tasks.filter((t) => t.done).length;

  return {
    tasks: filtered,
    total: tasks.length,
    pendingCount,
    doneCount,
    filter,
    setFilter,
    addTask,
    toggleTask,
    editTask,
    deleteTask,
    clearDone,
  };
}

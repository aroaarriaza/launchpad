import { Metadata } from "next";
import TasksApp from "@/components/tasks/TasksApp";

export const metadata: Metadata = {
  title: "Tareas",
  description: "Gestiona tus tareas pendientes.",
};

export default function TasksPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <TasksApp />
    </main>
  );
}

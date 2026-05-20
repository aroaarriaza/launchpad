export interface Task {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
}

export type FilterType = "all" | "pending" | "done";

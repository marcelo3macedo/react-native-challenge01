import { Task } from "./Task";

export interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}
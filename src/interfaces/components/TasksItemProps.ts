import { Task } from "./Task";

export interface TasksItemProps {
    index: number;
    task: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}
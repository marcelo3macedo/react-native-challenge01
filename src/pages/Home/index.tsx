import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { TodoInput } from '../../components/TodoInput';
import { TaskList } from '../../components/TaskList';
import { style } from './styles';
import { Task } from '../../interfaces/components/Task';
import uuid from 'react-native-uuid';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(title: string) {
    const task: Task = { 
      id: uuid.v4(),
      title,
      done: false
    }

    setTasks([
      ...tasks,
      task
    ])
  }

  function handleToggleTaskDone(taskId: string) {
    const selectedTask = tasks.filter(t => t.id === taskId)
    if (!selectedTask || selectedTask.length === 0) {
      return;
    }

    let updatedTask = selectedTask[0]
    updatedTask.done = !updatedTask.done
    
    const filteredTasks = tasks.filter(t => t.id !== taskId)
    setTasks([
      ...filteredTasks,
      updatedTask
    ])
  }

  function handleRemoveTask(taskId: string) {
    const filteredTasks = tasks.filter(t => t.id !== taskId)
    setTasks(filteredTasks)
  }

  return (
    <View style={style.container}>
      <Header tasksCounter={tasks.length} />
      <TodoInput addTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}
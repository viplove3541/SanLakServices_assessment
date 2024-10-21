import { useState } from 'react';
import { Task } from '../types/TaskTypes';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: new Date().toISOString() }]);
  };

  const filteredTasks = filterStatus === 'all' ? tasks : tasks.filter((task) => task.status === filterStatus);

  return {
    tasks: filteredTasks,
    filterStatus,
    setFilterStatus,
    addTask,
  };
};

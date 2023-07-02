```typescript
type Task = {
  id: string;
  title: string;
  description: string;
  priority: number;
  estimatedTime: number;
};

type Schedule = {
  date: Date;
  tasks: Task[];
};

export function createSchedule(tasks: Task[]): Schedule {
  const sortedTasks = tasks.sort((a, b) => b.priority - a.priority);
  const date = new Date();
  date.setDate(date.getDate() + 1); // schedule for the next day

  return {
    date,
    tasks: sortedTasks,
  };
}

export function addTaskToSchedule(schedule: Schedule, task: Task): Schedule {
  return {
    ...schedule,
    tasks: [...schedule.tasks, task].sort((a, b) => b.priority - a.priority),
  };
}

export function removeTaskFromSchedule(schedule: Schedule, taskId: string): Schedule {
  return {
    ...schedule,
    tasks: schedule.tasks.filter((task) => task.id !== taskId),
  };
}

export function updateTaskInSchedule(schedule: Schedule, updatedTask: Task): Schedule {
  return {
    ...schedule,
    tasks: schedule.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
  };
}
```
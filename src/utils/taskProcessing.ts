```typescript
type Task = {
  id: string;
  title: string;
  description: string;
  priority: number;
  estimatedTime: number;
  completed: boolean;
};

type TaskList = Task[];

const createTask = (id: string, title: string, description: string, priority: number, estimatedTime: number): Task => {
  return {
    id,
    title,
    description,
    priority,
    estimatedTime,
    completed: false,
  };
};

const updateTask = (task: Task, title?: string, description?: string, priority?: number, estimatedTime?: number): Task => {
  return {
    ...task,
    title: title || task.title,
    description: description || task.description,
    priority: priority || task.priority,
    estimatedTime: estimatedTime || task.estimatedTime,
  };
};

const completeTask = (task: Task): Task => {
  return {
    ...task,
    completed: true,
  };
};

const sortTasks = (tasks: TaskList): TaskList => {
  return tasks.sort((a, b) => b.priority - a.priority);
};

export { Task, TaskList, createTask, updateTask, completeTask, sortTasks };
```
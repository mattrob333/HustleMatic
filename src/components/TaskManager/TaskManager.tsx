import React, { useState, useEffect } from 'react';
import { taskProcessing } from '../../utils/taskProcessing';
import Task from '../Task/Task';

interface TaskType {
  id: string;
  title: string;
  description: string;
  priority: number;
  estimatedTime: number;
  actionItems: string[];
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const processedTasks = await taskProcessing();
      setTasks(processedTasks);
    };

    fetchTasks();
  }, []);

  return (
    <div id="task-manager">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskManager;
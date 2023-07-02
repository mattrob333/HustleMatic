import React, { useState } from 'react';

interface TaskProps {
  task: {
    id: string;
    title: string;
    description: string;
    priority: string;
    estimatedTime: number;
    actionItems: string[];
  };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div id={`task-${task.id}`} className={`task ${selected ? 'selected' : ''}`} onClick={handleSelect}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Estimated time: {task.estimatedTime} hours</p>
      <ul>
        {task.actionItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
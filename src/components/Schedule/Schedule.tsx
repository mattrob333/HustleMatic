import React, { useState, useEffect } from 'react';
import { scheduleProcessing } from '../../utils/scheduleProcessing';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: number;
  estimatedTime: number;
}

interface ScheduleProps {
  tasks: Task[];
}

const Schedule: React.FC<ScheduleProps> = ({ tasks }) => {
  const [schedule, setSchedule] = useState<Task[]>([]);

  useEffect(() => {
    const processedSchedule = scheduleProcessing(tasks);
    setSchedule(processedSchedule);
  }, [tasks]);

  return (
    <div id="schedule">
      <h2>Your Schedule</h2>
      {schedule.map((task) => (
        <div key={task.id} className="task">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Estimated Time: {task.estimatedTime} hours</p>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
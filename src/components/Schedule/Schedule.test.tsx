```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Schedule from './Schedule';

test('renders Schedule component', () => {
  render(<Schedule />);
  const linkElement = screen.getByTestId('schedule');
  expect(linkElement).toBeInTheDocument();
});

test('scheduleProcessing function is called', () => {
  const scheduleProcessing = jest.fn();
  render(<Schedule scheduleProcessing={scheduleProcessing} />);
  expect(scheduleProcessing).toHaveBeenCalled();
});

test('renders tasks in schedule', () => {
  const tasks = [
    { id: 1, name: 'Task 1', time: '10:00', priority: 'high' },
    { id: 2, name: 'Task 2', time: '11:00', priority: 'medium' },
  ];
  render(<Schedule tasks={tasks} />);
  tasks.forEach(task => {
    expect(screen.getByText(task.name)).toBeInTheDocument();
  });
});
```
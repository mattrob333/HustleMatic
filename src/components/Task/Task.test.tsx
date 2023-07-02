import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from './Task';

test('renders task component', () => {
  const { getByTestId } = render(<Task />);
  const taskElement = getByTestId('task');
  expect(taskElement).toBeInTheDocument();
});

test('task can be marked as completed', () => {
  const { getByTestId } = render(<Task />);
  const taskCheckbox = getByTestId('task-checkbox');
  fireEvent.click(taskCheckbox);
  expect(taskCheckbox.checked).toEqual(true);
});

test('task can be deleted', () => {
  const { getByTestId, queryByTestId } = render(<Task />);
  const deleteButton = getByTestId('delete-button');
  fireEvent.click(deleteButton);
  expect(queryByTestId('task')).toBeNull();
});
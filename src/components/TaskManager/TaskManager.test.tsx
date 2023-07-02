import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskManager from './TaskManager';
import { taskProcessing } from '../../utils/taskProcessing';

jest.mock('../../utils/taskProcessing');

describe('TaskManager', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<TaskManager />);
    expect(getByTestId('task-manager')).toBeInTheDocument();
  });

  it('processes tasks when voice input is received', () => {
    const { getByTestId } = render(<TaskManager />);
    const voiceInput = getByTestId('voice-input');
    fireEvent.change(voiceInput, { target: { value: 'Test task' } });
    expect(taskProcessing).toHaveBeenCalledWith('Test task');
  });

  it('displays tasks after processing', async () => {
    taskProcessing.mockResolvedValueOnce([
      { id: 1, text: 'Test task', priority: 'high', estimatedTime: '1 hour' },
    ]);
    const { findByText } = render(<TaskManager />);
    const voiceInput = getByTestId('voice-input');
    fireEvent.change(voiceInput, { target: { value: 'Test task' } });
    expect(await findByText('Test task')).toBeInTheDocument();
  });
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Meditation from './Meditation';

test('renders Meditation component', () => {
  const { getByTestId } = render(<Meditation />);
  const meditationElement = getByTestId('meditation');
  expect(meditationElement).toBeInTheDocument();
});

test('starts meditation on button click', () => {
  const { getByTestId } = render(<Meditation />);
  const startButton = getByTestId('start-meditation');
  fireEvent.click(startButton);
  expect(getByTestId('meditation-running')).toBeInTheDocument();
});

test('stops meditation on button click', () => {
  const { getByTestId } = render(<Meditation />);
  const startButton = getByTestId('start-meditation');
  fireEvent.click(startButton);
  const stopButton = getByTestId('stop-meditation');
  fireEvent.click(stopButton);
  expect(getByTestId('meditation-stopped')).toBeInTheDocument();
});
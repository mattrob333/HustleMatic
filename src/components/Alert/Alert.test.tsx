import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './Alert';

test('renders Alert component without crashing', () => {
  render(<Alert />);
});

test('displays alert message when triggered', () => {
  const { getByTestId } = render(<Alert />);
  const alertElement = getByTestId('alert');
  
  expect(alertElement.textContent).toBe('');
  
  fireEvent.click(getByTestId('trigger-alert'));
  
  expect(alertElement.textContent).not.toBe('');
});

test('clears alert message when dismissed', () => {
  const { getByTestId } = render(<Alert />);
  const alertElement = getByTestId('alert');
  
  fireEvent.click(getByTestId('trigger-alert'));
  expect(alertElement.textContent).not.toBe('');
  
  fireEvent.click(getByTestId('dismiss-alert'));
  expect(alertElement.textContent).toBe('');
});
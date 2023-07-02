import React from 'react';
import { render, screen } from '@testing-library/react';
import Report from './Report';

test('renders Report component', () => {
  render(<Report />);
  const linkElement = screen.getByText(/report/i);
  expect(linkElement).toBeInTheDocument();
});

test('calls reportProcessing function on render', () => {
  const reportProcessing = jest.fn();
  render(<Report reportProcessing={reportProcessing} />);
  expect(reportProcessing).toHaveBeenCalled();
});
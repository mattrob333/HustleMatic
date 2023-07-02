import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VoiceInput from './VoiceInput';

test('renders VoiceInput component', () => {
  const { getByTestId } = render(<VoiceInput />);
  const voiceInput = getByTestId('voice-input');
  expect(voiceInput).toBeInTheDocument();
});

test('voice input button click triggers voice input', () => {
  const { getByTestId } = render(<VoiceInput />);
  const voiceInputButton = getByTestId('voice-input-button');
  fireEvent.click(voiceInputButton);
  expect(voiceInputButton).toHaveTextContent('Listening...');
});

test('voice input button click again stops voice input', () => {
  const { getByTestId } = render(<VoiceInput />);
  const voiceInputButton = getByTestId('voice-input-button');
  fireEvent.click(voiceInputButton);
  fireEvent.click(voiceInputButton);
  expect(voiceInputButton).toHaveTextContent('Start Voice Input');
});
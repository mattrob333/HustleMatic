import React, { useState } from 'react';
import { voiceProcessing } from '../../utils/voiceProcessing';

const VoiceInput: React.FC = () => {
  const [voiceInput, setVoiceInput] = useState<string>('');

  const handleVoiceInput = async () => {
    const result = await voiceProcessing();
    setVoiceInput(result);
  };

  return (
    <div id="voice-input-component">
      <button onClick={handleVoiceInput}>Start Voice Input</button>
      <p>{voiceInput}</p>
    </div>
  );
};

export default VoiceInput;
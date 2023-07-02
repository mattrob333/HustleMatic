import React, { useState, useEffect } from 'react';
import { meditationProcessing } from '../../utils/meditationProcessing';

const Meditation: React.FC = () => {
  const [meditation, setMeditation] = useState<string>('');

  useEffect(() => {
    const fetchMeditation = async () => {
      const result = await meditationProcessing();
      setMeditation(result);
    };

    fetchMeditation();
  }, []);

  return (
    <div id="meditation-component">
      <h2>Guided Meditation</h2>
      <audio controls>
        <source src={meditation} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Meditation;
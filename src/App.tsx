import React from 'react';
import { VoiceInput } from './components/VoiceInput/VoiceInput';
import { TaskManager } from './components/TaskManager/TaskManager';
import { Schedule } from './components/Schedule/Schedule';
import { Alert } from './components/Alert/Alert';
import { Report } from './components/Report/Report';
import { Meditation } from './components/Meditation/Meditation';

function App() {
  return (
    <div className="App">
      <VoiceInput />
      <TaskManager />
      <Schedule />
      <Alert />
      <Report />
      <Meditation />
    </div>
  );
}

export default App;
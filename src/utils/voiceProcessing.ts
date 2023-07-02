```typescript
import { SpeechRecognition } from 'web-speech-api';

export interface VoiceInput {
  transcript: string;
  isFinal: boolean;
}

export class VoiceProcessing {
  private recognition: SpeechRecognition | null = null;
  private finalTranscript = '';
  private interimTranscript = '';

  constructor() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.onresult = this.onResult;
      this.recognition.onerror = this.onError;
    }
  }

  start = () => {
    this.finalTranscript = '';
    this.recognition?.start();
  };

  stop = () => {
    this.recognition?.stop();
  };

  onResult = (event: SpeechRecognitionEvent) => {
    this.interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        this.finalTranscript += event.results[i][0].transcript;
      } else {
        this.interimTranscript += event.results[i][0].transcript;
      }
    }
  };

  onError = (event: SpeechRecognitionError) => {
    console.error('Speech recognition error', event.error);
  };

  getTranscript = (): VoiceInput => {
    return {
      transcript: this.finalTranscript + this.interimTranscript,
      isFinal: this.finalTranscript !== '',
    };
  };
}
```
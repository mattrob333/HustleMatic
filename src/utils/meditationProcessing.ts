```typescript
type Meditation = {
  id: string;
  title: string;
  duration: number; // in minutes
  audioFile: string; // URL to the audio file
};

let meditations: Meditation[] = [];

export function addMeditation(meditation: Meditation) {
  meditations.push(meditation);
}

export function getMeditation(id: string): Meditation | undefined {
  return meditations.find(meditation => meditation.id === id);
}

export function deleteMeditation(id: string) {
  meditations = meditations.filter(meditation => meditation.id !== id);
}

export function updateMeditation(id: string, updatedMeditation: Partial<Meditation>) {
  const meditationIndex = meditations.findIndex(meditation => meditation.id === id);
  if (meditationIndex !== -1) {
    meditations[meditationIndex] = { ...meditations[meditationIndex], ...updatedMeditation };
  }
}

export function getAllMeditations(): Meditation[] {
  return meditations;
}
```
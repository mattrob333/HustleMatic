```typescript
type Alert = {
  id: string;
  message: string;
  time: Date;
};

let alerts: Alert[] = [];

export function addAlert(message: string, time: Date): void {
  const id = Math.random().toString(36).substring(7);
  alerts.push({ id, message, time });
}

export function removeAlert(id: string): void {
  alerts = alerts.filter((alert) => alert.id !== id);
}

export function getAlerts(): Alert[] {
  return alerts;
}

export function clearAlerts(): void {
  alerts = [];
}
```
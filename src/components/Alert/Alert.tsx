import React, { useState, useEffect } from 'react';
import { alertProcessing } from '../../utils/alertProcessing';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  const alertMessage = alertProcessing(message, type);

  return (
    <div id={`alert-${type}`} className={`alert alert-${type}`}>
      {alertMessage}
    </div>
  );
};

export default Alert;
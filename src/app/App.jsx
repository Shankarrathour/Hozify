import React from 'react';
import { AppProvider } from './providers/AppProvider';
import { Router } from './router/Router';
import { ToastProvider } from '../components/common/ToastNotification';

export default function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </AppProvider>
  );
}

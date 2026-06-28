import React from 'react';
import { AppProvider } from './providers/AppProvider';
import { Router } from './router/Router';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <AppProvider>
      <Toaster position="top-right" />
      <Router />
    </AppProvider>
  );
}

import React from 'react';
import { AppProvider } from './providers/AppProvider';
import { Router } from './router/Router';
import { Toaster } from 'react-hot-toast';
import { DateFilterProvider } from '../contexts/DateFilterContext';

export default function App() {
  return (
    <AppProvider>
      <DateFilterProvider>
        <Toaster position="top-right" />
        <Router />
      </DateFilterProvider>
    </AppProvider>
  );
}

import { renderToString } from 'react-dom/server';
import React from 'react';
import ActiveJobs from './src/pages/LiveTracking/ActiveJobs.jsx';
import { MemoryRouter } from 'react-router-dom';
import { ShellProvider } from './src/components/layouts/ShellContext.jsx';

export function renderTest() {
  try {
    const html = renderToString(
      React.createElement(MemoryRouter, null,
        React.createElement(ShellProvider, null, 
          React.createElement(ActiveJobs)
        )
      )
    );
    console.log("RENDER SUCCESS, output length:", html.length);
  } catch (e) {
    console.error("RENDER ERROR:", e);
  }
}

renderTest();

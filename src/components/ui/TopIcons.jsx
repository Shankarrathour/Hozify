import React from 'react';
import { CircleHelp, Moon } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export default function TopIcons({ globe = false }) {
  const { theme, setTheme } = useApp();
  return (
    <div className="top-icons">
      <button className="icon-btn" type="button" aria-label="Help">
        <CircleHelp size={21} />
      </button>
      <button className="icon-btn" type="button" aria-label="Toggle theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Moon size={21} />
      </button>
      {globe && (
        <button className="icon-btn" type="button" aria-label="Language">
          <span className="globe">◎</span>
        </button>
      )}
    </div>
  );
}

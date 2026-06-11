import React from 'react';
import { Check, KeyRound, Shield } from 'lucide-react';

export default function SecurityPlaceholder({ variant = 'shield', title, subtitle }) {
  return (
    <div className={`security-placeholder ${variant}`}>
      <div className="placeholder-frame">
        <div className="placeholder-card">
          {variant === 'success' ? <Check size={40} /> : variant === 'key' ? <KeyRound size={42} /> : <Shield size={48} />}
        </div>
        <div className="placeholder-bars">
          <span />
          <span />
          <span />
        </div>
      </div>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

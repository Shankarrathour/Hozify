import React from 'react';
import { Check } from 'lucide-react';

export default function Requirement({ ok, label }) {
  return (
    <div className={ok ? 'requirement ok' : 'requirement'}>
      <span>{ok && <Check size={13} />}</span>
      {label}
    </div>
  );
}

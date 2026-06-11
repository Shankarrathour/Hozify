import React from 'react';
import { Shield } from 'lucide-react';

export default function Brand({ compact = false }) {
  return (
    <button className={compact ? 'brand brand-compact' : 'brand'} onClick={() => {}} type="button">
      {compact && <Shield className="brand-shield" size={24} />}
      <span>HOZIFY Admin</span>
    </button>
  );
}

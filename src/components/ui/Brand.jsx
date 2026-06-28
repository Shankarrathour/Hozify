import React from 'react';
import brandLogo from '../../assets/logo.png';

export default function Brand({ compact = false }) {
  return (
    <div className={compact ? 'brand brand-compact' : 'brand'} style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: compact ? 'center' : 'flex-start', background: 'transparent' }}>
      <img 
        src={brandLogo} 
        alt="HOZIFY Partner" 
        style={{ 
          height: '42px', 
          width: 'auto', 
          objectFit: 'contain',
          background: 'transparent',
          display: 'block'
        }} 
      />
      <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)' }}>HOZIFY Admin</span>
    </div>
  );
}

import React from 'react';

export default function Toggle({ checked, onChange, disabled = false, label = '' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div 
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: '40px',
          height: '22px',
          background: checked ? '#4f46e5' : '#e2e8f0',
          borderRadius: '11px',
          position: 'relative',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          transition: 'background-color 0.2s ease'
        }}
      >
        <div 
          style={{
            width: '18px',
            height: '18px',
            background: '#fff',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: checked ? '20px' : '2px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
            transition: 'left 0.2s ease'
          }}
        />
      </div>
      {label && (
        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>
          {label}
        </span>
      )}
    </div>
  );
}

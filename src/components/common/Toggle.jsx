import React, { useState } from 'react';
import toast from 'react-hot-toast';
export default function Toggle({ checked, onChange, disabled = false, label = '', defaultChecked = false }) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const newState = !isChecked;
    if (!isControlled) {
      setInternalChecked(newState);
    }
    if (onChange) {
      onChange(newState);
    } else {
      toast.success(newState ? 'Enabled successfully' : 'Disabled successfully');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div 
        onClick={handleClick}
        style={{
          width: '40px',
          height: '22px',
          background: isChecked ? '#4f46e5' : '#e2e8f0',
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
            left: isChecked ? '20px' : '2px',
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

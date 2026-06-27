import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown, X, Check } from 'lucide-react';

const PRESETS = [
  { label: 'Today', days: 0 },
  { label: 'Yesterday', days: 1 },
  { label: 'Last 7 Days', days: 7 },
  { label: 'Last 30 Days', days: 30 },
  { label: 'Last 90 Days', days: 90 },
  { label: 'This Month', days: 'month' },
  { label: 'Last 3 Months', days: 90 },
  { label: 'This Year', days: 'year' },
];

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getPresetRange(preset) {
  const now = new Date();
  const end = new Date(now);
  if (preset.days === 'month') {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    return { start, end };
  }
  if (preset.days === 'year') {
    const start = new Date(now.getFullYear(), 0, 1);
    return { start, end };
  }
  const start = new Date(now);
  start.setDate(now.getDate() - preset.days);
  return { start, end };
}

export default function DateRangePicker({ value, onChange, label = 'Last 30 Days' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePreset, setActivePreset] = useState(label);
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handlePreset = (preset) => {
    const range = getPresetRange(preset);
    setActivePreset(preset.label);
    setCustomStart('');
    setCustomEnd('');
    onChange?.({ label: preset.label, ...range });
    setIsOpen(false);
  };

  const handleCustomApply = () => {
    if (!customStart || !customEnd) return;
    const start = new Date(customStart);
    const end = new Date(customEnd);
    if (start > end) return;
    const label = `${formatDate(start)} – ${formatDate(end)}`;
    setActivePreset(label);
    onChange?.({ label, start, end });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#e0e7ff',
          color: '#1e1b4b',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 14px',
          fontSize: '13px',
          fontWeight: '700',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'background 0.2s',
        }}
        type="button"
      >
        <Calendar size={15} />
        <span>{activePreset}</span>
        <ChevronDown size={13} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          zIndex: 1000,
          background: '#fff',
          borderRadius: '14px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          border: '1px solid #e2e8f0',
          minWidth: '280px',
          overflow: 'hidden',
        }}>
          {/* Preset List */}
          <div style={{ padding: '8px' }}>
            <p style={{ fontSize: '10px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', padding: '8px 10px 4px' }}>Quick Select</p>
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => handlePreset(preset)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activePreset === preset.label ? '#eef2ff' : 'transparent',
                  color: activePreset === preset.label ? '#4f46e5' : '#374151',
                  fontSize: '13px',
                  fontWeight: activePreset === preset.label ? '700' : '500',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {preset.label}
                {activePreset === preset.label && <Check size={13} color="#4f46e5" />}
              </button>
            ))}
          </div>

          {/* Custom Range */}
          <div style={{ borderTop: '1px solid #f1f5f9', padding: '12px 14px' }}>
            <p style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', marginBottom: '8px' }}>Custom Range</p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                style={{ flex: 1, padding: '7px 10px', borderRadius: '7px', border: '1px solid #e2e8f0', fontSize: '12px', outline: 'none' }}
              />
              <span style={{ color: '#94a3b8', fontSize: '12px' }}>→</span>
              <input
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                style={{ flex: 1, padding: '7px 10px', borderRadius: '7px', border: '1px solid #e2e8f0', fontSize: '12px', outline: 'none' }}
              />
            </div>
            <button
              onClick={handleCustomApply}
              disabled={!customStart || !customEnd}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '8px',
                borderRadius: '8px',
                border: 'none',
                background: (!customStart || !customEnd) ? '#e2e8f0' : '#4f46e5',
                color: (!customStart || !customEnd) ? '#94a3b8' : '#fff',
                fontSize: '13px',
                fontWeight: '700',
                cursor: (!customStart || !customEnd) ? 'not-allowed' : 'pointer',
              }}
            >
              Apply Range
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

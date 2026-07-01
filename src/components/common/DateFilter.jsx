import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronDown, X, Check } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useDateFilter } from '../../contexts/DateFilterContext';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DateFilter.css'; // We will create this for custom styling if needed

const PRESETS = [
  { label: 'Today', id: 'Today' },
  { label: 'Yesterday', id: 'Yesterday' },
  { label: 'Last 7 Days', id: 'Last 7 Days' },
  { label: 'Last 30 Days', id: 'Last 30 Days' },
  { label: 'This Week', id: 'This Week' },
  { label: 'Last Week', id: 'Last Week' },
  { label: 'This Month', id: 'This Month' },
  { label: 'Last Month', id: 'Last Month' },
  { label: 'This Quarter', id: 'This Quarter' },
  { label: 'Last Quarter', id: 'Last Quarter' },
  { label: 'This Year', id: 'This Year' },
  { label: 'Custom Range', id: 'Custom' }
];

export default function DateFilter() {
  const { preset, dateRange, setDateFilter } = useDateFilter();
  const [isOpen, setIsOpen] = useState(false);
  const [localPreset, setLocalPreset] = useState(preset);
  const [localRange, setLocalRange] = useState([dateRange]);
  const popoverRef = useRef(null);

  // Sync local state when context changes outside
  useEffect(() => {
    setLocalPreset(preset);
    setLocalRange([dateRange]);
  }, [preset, dateRange]);

  // Handle outside click to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
        // Reset local state if closed without applying
        setLocalPreset(preset);
        setLocalRange([dateRange]);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, preset, dateRange]);

  const handleApply = () => {
    setDateFilter(localPreset, localPreset === 'Custom' ? localRange[0] : null);
    setIsOpen(false);
  };

  const handleReset = () => {
    setLocalPreset('Last 30 Days');
    setDateFilter('Last 30 Days', null);
    setIsOpen(false);
  };

  const renderTriggerText = () => {
    if (preset === 'Custom') {
      return `${format(dateRange.startDate, 'MMM d, yyyy')} - ${format(dateRange.endDate, 'MMM d, yyyy')}`;
    }
    return preset;
  };

  return (
    <div className="date-filter-container" ref={popoverRef} style={{ position: 'relative', zIndex: 50 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#1e293b',
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          minWidth: '200px',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={16} color="#64748b" />
          {renderTriggerText()}
        </div>
        <ChevronDown size={16} color="#64748b" />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
            display: 'flex',
            overflow: 'hidden',
            minWidth: '300px'
          }}
        >
          {/* Sidebar Presets */}
          <div style={{ width: '180px', borderRight: '1px solid #e2e8f0', background: '#f8fafc', padding: '12px', maxHeight: '420px', overflowY: 'auto' }}>
            <h4 style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px', padding: '0 8px' }}>Date Range</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setLocalPreset(p.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: localPreset === p.id ? '#eef2ff' : 'transparent',
                    color: localPreset === p.id ? '#4f46e5' : '#475569',
                    fontSize: '13px',
                    fontWeight: localPreset === p.id ? '700' : '500',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {p.label}
                  {localPreset === p.id && <Check size={14} color="#4f46e5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar or Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
            {localPreset === 'Custom' ? (
              <div style={{ padding: '12px' }}>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setLocalRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={localRange}
                  rangeColors={['#2563eb']}
                />
              </div>
            ) : (
              <div style={{ padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: '#64748b', fontSize: '13px', fontWeight: '500' }}>
                Preset: {localPreset}
              </div>
            )}
            
            {/* Footer actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: '12px', borderTop: '1px solid #e2e8f0', background: '#f8fafc' }}>
              <button
                onClick={handleReset}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                  color: '#475569',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Reset
              </button>
              <button
                onClick={handleApply}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  background: '#2563eb',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

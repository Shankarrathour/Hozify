import React from 'react';
import { CalendarX2 } from 'lucide-react';

export default function EmptyState() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      background: '#ffffff',
      border: '1px dashed #cbd5e1',
      borderRadius: '12px',
      textAlign: 'center',
      minHeight: '300px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#f1f5f9',
        color: '#94a3b8',
        marginBottom: '16px'
      }}>
        <CalendarX2 size={28} />
      </div>
      <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#1e293b', margin: '0 0 8px 0' }}>No Data Found</h3>
      <p style={{ fontSize: '13px', color: '#64748b', margin: 0, maxWidth: '250px', lineHeight: '1.5' }}>
        No data available for the selected period.
      </p>
    </div>
  );
}

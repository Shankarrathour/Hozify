import React, { useState } from 'react';
import {
  Power,
  CheckCircle,
  XCircle,
  Eye,
  CheckSquare,
  AlertCircle
} from 'lucide-react';

const initialServices = [
  { id: 'SVC-ACT-101', name: 'Premium HVAC Maintenance', provider: 'HVAC Pros Ltd', region: 'North America', status: 'PENDING_ACTIVATION' },
  { id: 'SVC-ACT-102', name: 'Enterprise IT Support', provider: 'Tech Solutions Inc', region: 'Europe', status: 'ACTIVATED' },
  { id: 'SVC-ACT-103', name: '24/7 Plumbing Emergency', provider: 'QuickFix Plumbing', region: 'Asia Pacific', status: 'FAILED' }
];

export default function ServiceActivation() {
  const [services] = useState(initialServices);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Title & Actions Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Activation</h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>Manage rollouts and monitor the activation status of approved services.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#25108f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            <Power size={16} />
            <span>Activate Selected</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Activation</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>12</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fffbeb', color: '#d97706' }}>
              <Power size={20} />
            </div>
          </div>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Successfully Activated</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>485</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#ecfdf5', color: '#059669' }}>
              <CheckCircle size={20} />
            </div>
          </div>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', justifyStyle: 'stretch' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Failed Rollouts</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>2</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fef2f2', color: '#dc2626' }}>
              <XCircle size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service ID</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Name</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Provider</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Region</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px 8px', width: '110px' }} />
              </tr>
            </thead>
            <tbody>
              {services.map((svc) => (
                <tr key={svc.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>{svc.id}</td>
                  <td style={{ padding: '16px 8px', fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>{svc.name}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{svc.provider}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{svc.region}</td>
                  <td style={{ padding: '16px 8px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background:
                          svc.status === 'ACTIVATED'
                            ? '#ecfdf5'
                            : svc.status === 'PENDING_ACTIVATION'
                            ? '#fffbeb'
                            : '#fef2f2',
                        color:
                          svc.status === 'ACTIVATED'
                            ? '#059669'
                            : svc.status === 'PENDING_ACTIVATION'
                            ? '#d97706'
                            : '#dc2626'
                      }}
                    >
                      {svc.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="View"><Eye size={16} /></button>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Activate"><CheckSquare size={16} /></button>
                      <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Logs"><AlertCircle size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

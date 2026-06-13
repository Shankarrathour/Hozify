import React from 'react';
import { AlertTriangle, ShieldAlert, Users, TrendingUp } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { mockFraudAlerts } from './data/mockData';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function FraudMonitoringCenter() {
  const { navigate } = useApp();

  const handleInvestigate = (id) => {
    navigate(ROUTES.riskInvestigation.replace(':id', id));
  };

  const handleFreeze = () => {
    navigate(ROUTES.walletFreezeCenter);
  };

  return (
    <AdminShell
      activeTab="Wallet Management"
      brandText="HOZIFY Wallet"
      brandSubText="Global Ledger v1.2"
      headerTitle="Financial Admin"
      searchPlaceholder="Search risk events..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title */}
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Wallet Fraud Monitoring Ledger
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
            Real-time financial risk monitoring, duplicate payout audits, and automated chargeback detection flags.
          </p>
        </div>

        {/* 4 Risk KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { title: 'High Risk Wallets', value: '3 Active', label: 'Requires Action', color: '#d32929', bg: '#fee2e2', icon: ShieldAlert },
            { title: 'Chargeback Value', value: '₹42,500', label: '2 Active Cases', color: '#b45309', bg: '#fffbeb', icon: AlertTriangle },
            { title: 'Abnormal Activity', value: '14 Alerts', label: 'System Flagged', color: '#1e40af', bg: '#eff6ff', icon: TrendingUp },
            { title: 'Fake Transactions', value: '0 Active', label: 'All Resolved', color: '#07956f', bg: '#ecfdf5', icon: Users }
          ].map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div key={idx} className="panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {kpi.title}
                  </span>
                  <div style={{ height: '28px', width: '28px', borderRadius: '6px', background: kpi.bg, color: kpi.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={14} />
                  </div>
                </div>
                <strong style={{ display: 'block', fontSize: '20px', fontWeight: '850', color: 'var(--text)', marginTop: '12px' }}>
                  {kpi.value}
                </strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '4px' }}>
                  {kpi.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Audit list and risk score charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* Active Risk Alerts */}
          <div className="panel" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: '0 0 16px' }}>
              Active Fraud Risk Alerts
            </h2>

            <div className="table-wrap">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', fontSize: '10px' }}>ALERT TYPE</th>
                    <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', fontSize: '10px' }}>OWNER</th>
                    <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', fontSize: '10px' }}>RISK SCORE</th>
                    <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', fontSize: '10px' }}>STATUS</th>
                    <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', fontSize: '10px', textAlign: 'right' }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {mockFraudAlerts.map((alertItem) => (
                    <tr key={alertItem.id} style={{ borderBottom: '1px solid var(--lavender)' }}>
                      <td style={{ padding: '12px' }}>
                        <strong style={{ display: 'block', color: 'var(--text)' }}>{alertItem.type}</strong>
                        <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>{alertItem.description}</span>
                      </td>
                      <td style={{ padding: '12px', fontWeight: '750' }}>{alertItem.owner}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          color: alertItem.riskScore > 70 ? '#d32929' : alertItem.riskScore > 40 ? '#b45309' : '#07956f'
                        }}>
                          {alertItem.riskScore}%
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          fontSize: '9px',
                          fontWeight: '850',
                          background: alertItem.status === 'High Risk' ? '#fee2e2' : alertItem.status === 'Under Review' ? '#fffbeb' : '#ecfdf5',
                          color: alertItem.status === 'High Risk' ? '#d32929' : alertItem.status === 'Under Review' ? '#b45309' : '#07956f',
                          padding: '2px 6px',
                          borderRadius: '4px'
                        }}>
                          {alertItem.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => handleInvestigate(alertItem.id)}
                            style={{ border: 'none', background: 'transparent', color: '#25108f', fontSize: '12px', fontWeight: '800', cursor: 'pointer', padding: 0 }}
                          >
                            Investigate
                          </button>
                          <button
                            onClick={handleFreeze}
                            style={{ border: 'none', background: 'transparent', color: '#d32929', fontSize: '12px', fontWeight: '800', cursor: 'pointer', padding: 0 }}
                          >
                            Freeze
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Risk Score gauge placeholder */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
              System Risk Trend
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', background: '#fafafa', padding: '20px', borderRadius: '8px', border: '1px solid var(--line)' }}>
              <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#d32929" strokeWidth="4.5" strokeDasharray="32 100" strokeDashoffset="0" strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <strong style={{ fontSize: '20px', color: '#d32929', display: 'block' }}>32%</strong>
                  <span style={{ fontSize: '9px', color: 'var(--muted)', fontWeight: '800' }}>Overall Risk</span>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '750', textAlign: 'center' }}>
                Current threat level: <strong>STABLE</strong>
              </span>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}

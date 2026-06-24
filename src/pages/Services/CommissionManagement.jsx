import React, { useState } from 'react';
import {
  Download,
  CreditCard,
  Search,
  ListFilter,
  DollarSign,
  Briefcase,
  Users,
  ShieldCheck,
  ArrowRightLeft,
  PieChart,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Clock
} from 'lucide-react';

const MOCK_RULES = [
  { name: 'Standard Maintenance', type: 'Fixed Percentage', percentage: '12.5%', services: 'All Maintenance Services', status: 'ACTIVE' },
  { name: 'Premium Appliances', type: 'Tiered', percentage: '10-15%', services: 'AC, Refrigerator', status: 'ACTIVE' },
  { name: 'Emergency Support', type: 'Fixed Amount', percentage: '$20 Flat', services: 'Express Services', status: 'INACTIVE' },
  { name: 'New Partner Onboarding', type: 'Zero Commission', percentage: '0%', services: 'First 5 Jobs', status: 'ACTIVE' }
];

const MOCK_SETTLEMENTS = [
  { id: 'SET-9920', partner: 'FixIt Pro Services', amount: '$450.00', date: 'Oct 24, 2023', status: 'PENDING' },
  { id: 'SET-9919', partner: 'CoolBreeze ACs', amount: '$1,200.50', date: 'Oct 23, 2023', status: 'COMPLETED' },
  { id: 'SET-9918', partner: 'John Doe Plumbing', amount: '$85.00', date: 'Oct 23, 2023', status: 'FAILED' },
  { id: 'SET-9917', partner: 'Elite Home Care', amount: '$890.00', date: 'Oct 22, 2023', status: 'COMPLETED' }
];

export default function CommissionManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Commission Management</h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Control partner, branch, and platform commission distribution and settlements.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '6px' }} /> Export Report
          </button>
          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px', background: '#059669', borderColor: '#059669' }}>
            <CreditCard size={14} style={{ marginRight: '6px' }} /> Process Payouts
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Commission Generated</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>$124.5K</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700', marginTop: '4px', display: 'block' }}>+12.4% vs last month</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Platform Commission</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>$48.2K</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700', marginTop: '4px', display: 'block' }}>Net Revenue</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f5f3ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Branch Commission</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>$12.8K</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700', marginTop: '4px', display: 'block' }}>Across 14 Branches</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Partner Commission</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>$63.5K</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700', marginTop: '4px', display: 'block' }}>Provider Earnings</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f0fdf4', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Commission Rules Table */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Commission Rules</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div className="dash-search" style={{ margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px', width: '220px' }}>
                  <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
                  <input
                    placeholder="Search rules..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: '12px', border: 'none', background: 'transparent', outline: 'none', paddingLeft: '8px', flex: 1 }}
                  />
                </div>
              </div>
            </div>

            <div className="table-wrap">
              <table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Rule Name</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Type</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Percentage</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Applicable Services</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_RULES
                    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px' }}>
                          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.name}</strong>
                        </td>
                        <td style={{ padding: '12px', fontSize: '13px', color: 'var(--muted)' }}>{row.type}</td>
                        <td style={{ padding: '12px', fontSize: '13px', color: '#25108f', fontWeight: '700' }}>{row.percentage}</td>
                        <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>{row.services}</td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '800', color: row.status === 'ACTIVE' ? '#07956f' : '#d97706' }}>
                            ● {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Commission Analytics */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0' }}>Commission Trends & Top Services</h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)', marginBottom: '12px', display: 'block' }}>COMMISSION GENERATION (LAST 6 MONTHS)</span>
                <div style={{ height: '160px', display: 'flex', alignItems: 'flex-end', gap: '8px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  {[30, 45, 42, 60, 85, 75].map((h, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '2px', height: '100%' }}>
                      <div style={{ width: '100%', height: `${h}%`, background: '#8b5cf6', borderRadius: '4px 4px 0 0', opacity: 0.8 }} />
                      <div style={{ width: '100%', height: `${h * 0.4}%`, background: '#3b82f6', borderRadius: '4px 4px 0 0' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Commission Distribution */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <PieChart size={18} style={{ color: 'var(--text)' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Commission Distribution</h3>
            </div>
            
            <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ width: '15%', background: '#8b5cf6' }}></div>
              <div style={{ width: '10%', background: '#f59e0b' }}></div>
              <div style={{ width: '75%', background: '#10b981' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#8b5cf6' }}></div>
                  <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>Platform</span>
                </div>
                <strong style={{ fontSize: '14px', color: 'var(--text)' }}>15%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#f59e0b' }}></div>
                  <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>Branch</span>
                </div>
                <strong style={{ fontSize: '14px', color: 'var(--text)' }}>10%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: '#10b981' }}></div>
                  <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>Partner</span>
                </div>
                <strong style={{ fontSize: '14px', color: 'var(--text)' }}>75%</strong>
              </div>
            </div>
          </div>

          {/* Settlement Tracking */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0' }}>Settlement Tracking</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {MOCK_SETTLEMENTS.map((settle, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderRadius: '8px', background: '#f8fafc', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ color: settle.status === 'COMPLETED' ? '#10b981' : settle.status === 'FAILED' ? '#ef4444' : '#f59e0b' }}>
                      {settle.status === 'COMPLETED' ? <CheckCircle2 size={18} /> : settle.status === 'FAILED' ? <AlertCircle size={18} /> : <Clock size={18} />}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{settle.partner}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{settle.id} • {settle.date}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)' }}>{settle.amount}</strong>
                    <span style={{ fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', background: settle.status === 'COMPLETED' ? '#d1fae5' : settle.status === 'FAILED' ? '#fee2e2' : '#fef3c7', color: settle.status === 'COMPLETED' ? '#059669' : settle.status === 'FAILED' ? '#dc2626' : '#d97706' }}>
                      {settle.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="secondary-action-btn font-bold" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', borderRadius: '8px' }}>
              View All Settlements
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

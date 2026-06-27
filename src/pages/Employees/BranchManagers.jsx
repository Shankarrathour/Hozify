import React, { useState } from 'react';
import {
  Search, ListFilter, Users, Briefcase, TrendingUp, CheckCircle2, AlertCircle, Edit, ShieldCheck, MapPin, Star
} from 'lucide-react';

const MOCK_MANAGERS = [
  { id: 'BM-1001', name: 'Michael Chen', branch: 'Downtown HQ', contact: '+1 234-567-8900', employees: 45, rating: 4.8, status: 'ACTIVE' },
  { id: 'BM-1002', name: 'Sarah Jenkins', branch: 'Westside Heights', contact: '+1 234-567-8901', employees: 32, rating: 4.5, status: 'ACTIVE' },
  { id: 'BM-1003', name: 'David Rodriguez', branch: 'North Suburbs', contact: '+1 234-567-8902', employees: 28, rating: 4.9, status: 'ACTIVE' },
  { id: 'BM-1004', name: 'Emily Thompson', branch: 'East River', contact: '+1 234-567-8903', employees: 15, rating: 3.8, status: 'ON LEAVE' },
  { id: 'BM-1005', name: 'James Wilson', branch: 'South District', contact: '+1 234-567-8904', employees: 22, rating: 4.2, status: 'INACTIVE' },
];

const MOCK_TOP_MANAGERS = [
  { id: 1, name: 'David Rodriguez', branch: 'North Suburbs', score: '98%' },
  { id: 2, name: 'Michael Chen', branch: 'Downtown HQ', score: '95%' },
  { id: 3, name: 'Sarah Jenkins', branch: 'Westside Heights', score: '92%' }
];

export default function BranchManagers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredManagers = MOCK_MANAGERS.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.branch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || m.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Branch Managers</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>24</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700', marginTop: '4px', display: 'block' }}>Across all zones</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Managers</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>21</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700', marginTop: '4px', display: 'block' }}>3 Currently unavailable</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f0fdf4', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Branches Managed</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>24</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700', marginTop: '4px', display: 'block' }}>100% Coverage</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Avg Performance Score</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>4.5/5</strong>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700', marginTop: '4px', display: 'block' }}>+0.2 vs last quarter</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f5f3ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={18} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '2' }}>
          
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Manager Directory</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div className="dash-search" style={{ margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px', width: '220px', display: 'flex', alignItems: 'center' }}>
                  <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
                  <input
                    placeholder="Search managers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: '12px', border: 'none', background: 'transparent', outline: 'none', paddingLeft: '8px', flex: 1 }}
                  />
                </div>
                <select 
                  className="dash-select" 
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{ height: '34px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '12px', color: 'var(--text)', background: '#fff' }}
                >
                  <option value="All">All Status</option>
                  <option value="ACTIVE">Active</option>
                  <option value="ON LEAVE">On Leave</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>
            </div>

            <div className="table-wrap" style={{ overflowX: 'auto' }}>
              <table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Manager Name</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Branch</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Contact</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Assigned Emp.</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Rating</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredManagers.map((row) => (
                      <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px' }}>
                          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.name}</strong>
                          <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{row.id}</span>
                        </td>
                        <td style={{ padding: '12px', fontSize: '12px', color: 'var(--text)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin size={12} style={{ color: 'var(--muted)' }} /> {row.branch}
                          </div>
                        </td>
                        <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>{row.contact}</td>
                        <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>{row.employees}</td>
                        <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Star size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} /> {row.rating}
                          </div>
                        </td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', background: row.status === 'ACTIVE' ? '#d1fae5' : row.status === 'ON LEAVE' ? '#fef3c7' : '#fee2e2', color: row.status === 'ACTIVE' ? '#059669' : row.status === 'ON LEAVE' ? '#d97706' : '#dc2626' }}>
                            {row.status}
                          </span>
                        </td>
                        <td style={{ padding: '12px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            <button style={{ background: 'transparent', border: 'none', color: '#4f46e5', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>View Profile</button>
                            <button style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><Edit size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredManagers.length === 0 && (
                      <tr>
                        <td colSpan="7" style={{ padding: '24px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                          No managers found.
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '1' }}>
          
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <TrendingUp size={18} style={{ color: '#4f46e5' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Top Performing Managers</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {MOCK_TOP_MANAGERS.map((mgr, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderRadius: '8px', background: '#f8fafc', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: '24px', height: '24px', borderRadius: '12px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', color: 'var(--muted)' }}>
                      #{mgr.id}
                    </span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{mgr.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{mgr.branch}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#059669' }}>{mgr.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Briefcase size={18} style={{ color: '#25108f' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Branch Performance Overview</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Downtown HQ', val: 95, color: '#3b82f6' },
                { label: 'North Suburbs', val: 88, color: '#10b981' },
                { label: 'Westside Heights', val: 82, color: '#f59e0b' },
                { label: 'East River', val: 65, color: '#ec4899' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text)' }}>{item.label}</span>
                    <span style={{ color: 'var(--muted)' }}>{item.val}%</span>
                  </div>
                  <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.val}%`, height: '100%', background: item.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

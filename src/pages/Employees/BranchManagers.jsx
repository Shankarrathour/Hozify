import React, { useState } from 'react';
import {
  Search, ListFilter, Users, Briefcase, TrendingUp, CheckCircle2, AlertCircle, Edit, ShieldCheck, MapPin, Star
} from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';

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
  const { addToast } = useToast();
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div 
          onClick={() => addToast("Card clicked: Total Branch Managers details", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: '80px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Total Branch Managers</span>
              <strong style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: 'var(--text)', marginTop: '4px' }}>24</strong>
              <span style={{ fontSize: '9px', color: '#10b981', fontWeight: '700', marginTop: '2px', display: 'block' }}>Across all zones</span>
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={14} />
            </div>
          </div>
        </div>

        <div 
          onClick={() => addToast("Card clicked: Active Managers list", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: '80px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Active Managers</span>
              <strong style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: 'var(--text)', marginTop: '4px' }}>21</strong>
              <span style={{ fontSize: '9px', color: '#10b981', fontWeight: '700', marginTop: '2px', display: 'block' }}>3 Currently unavailable</span>
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f0fdf4', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={14} />
            </div>
          </div>
        </div>

        <div 
          onClick={() => addToast("Card clicked: Branches Managed coverage", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: '80px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Branches Managed</span>
              <strong style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: 'var(--text)', marginTop: '4px' }}>24</strong>
              <span style={{ fontSize: '9px', color: 'var(--muted)', fontWeight: '700', marginTop: '2px', display: 'block' }}>100% Coverage</span>
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={14} />
            </div>
          </div>
        </div>

        <div 
          onClick={() => addToast("Card clicked: Average Performance analysis", "success")}
          className="kpi-card" 
          style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minHeight: '80px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>Avg Performance Score</span>
              <strong style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: 'var(--text)', marginTop: '4px' }}>4.5/5</strong>
              <span style={{ fontSize: '9px', color: '#10b981', fontWeight: '700', marginTop: '2px', display: 'block' }}>+0.2 vs last quarter</span>
            </div>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f5f3ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={14} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', marginBottom: 0 }}>
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
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{ height: '34px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '12px', color: 'var(--text)', background: '#fff', outline: 'none', cursor: 'pointer', fontWeight: '700' }}
                  aria-label="Filter managers by status"
                >
                  <option value="All">All Statuses</option>
                  <option value="ACTIVE">Active</option>
                  <option value="ON LEAVE">On Leave</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>
            </div>

            <div className="table-wrap">
              <table className="partner-table">
                <thead>
                  <tr>
                    <th>MANAGER ID</th>
                    <th>NAME</th>
                    <th>BRANCH</th>
                    <th>CONTACT</th>
                    <th>STAFF COUNT</th>
                    <th>RATING</th>
                    <th>STATUS</th>
                    <th style={{ width: '60px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredManagers.map((m) => (
                    <tr 
                      key={m.id} 
                      onClick={() => addToast(`Opening console details for ${m.name}`, "success")}
                      className="partner-row-clickable"
                    >
                      <td><strong>{m.id}</strong></td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.branch}</td>
                      <td>{m.contact}</td>
                      <td>{m.employees} Employees</td>
                      <td style={{ fontWeight: '700' }}>
                        <Star size={13} fill="#4f46e5" stroke="#4f46e5" style={{ marginRight: '4px', display: 'inline' }} />
                        <span style={{ color: '#4f46e5' }}>{m.rating}</span>
                      </td>
                      <td>
                        <span
                          className="status-badge"
                          style={{
                            fontSize: '10px',
                            fontWeight: '800',
                            color: m.status === 'ACTIVE' ? '#059669' : m.status === 'ON LEAVE' ? '#d97706' : '#ef4444',
                            background: m.status === 'ACTIVE' ? '#ecfdf5' : m.status === 'ON LEAVE' ? '#fef3c7' : '#fee2e2',
                          }}
                        >
                          {m.status}
                        </span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={() => addToast(`Editing permissions & profile metrics for ${m.name}`, "success")}
                          className="table-row-action-btn cursor-pointer" 
                          type="button"
                        >
                          <Edit size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredManagers.length === 0 && (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '32px', color: 'var(--muted)' }}>No branch managers match the selection.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column: Leaderboard */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', marginBottom: 0 }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>Top Branch Managers</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {MOCK_TOP_MANAGERS.map((tm) => (
                <div 
                  key={tm.id} 
                  onClick={() => addToast(`Viewing performance leaderboard profile of ${tm.name}`, "success")}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '8px', cursor: 'pointer' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '900', color: 'var(--primary)' }}>#{tm.id}</span>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '13px' }}>{tm.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>{tm.branch}</span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '900', color: '#10b981', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>{tm.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

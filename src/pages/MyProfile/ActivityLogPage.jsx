import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { useToast } from '../../components/common/ToastNotification';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { Search, Filter, Download, Clock, Terminal, ShieldAlert, Monitor, ShieldCheck } from 'lucide-react';

const INITIAL_LOGS = [
  { id: 'LOG-901', date: '2026-06-27 10:14 AM', action: 'User Login Success', ip: '192.168.1.104', device: 'Windows 11', browser: 'Chrome v120.0', type: 'Security' },
  { id: 'LOG-902', date: '2026-06-26 04:30 PM', action: 'Modified Commissions Multiplier', ip: '192.168.1.104', device: 'Windows 11', browser: 'Chrome v120.0', type: 'Operation' },
  { id: 'LOG-903', date: '2026-06-26 11:20 AM', action: 'Approved Partner BSP Delhi Goods', ip: '192.168.1.104', device: 'Windows 11', browser: 'Chrome v120.0', type: 'Operation' },
  { id: 'LOG-904', date: '2026-06-25 09:00 AM', action: '2FA authentication challenge success', ip: '192.168.1.102', device: 'iOS 17', browser: 'Safari Mobile', type: 'Security' },
  { id: 'LOG-905', date: '2026-06-24 02:15 PM', action: 'Exported Payout Settlement History', ip: '192.168.1.66', device: 'MacOS Sonoma', browser: 'Firefox Quantum', type: 'Operation' }
];

export default function ActivityLogPage() {
  const { addToast } = useToast();
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const handleExportCSV = () => {
    const csvContent = generateCSV(['Log ID', 'Timestamp', 'Action Detail', 'IP Address', 'OS Device', 'Browser version', 'Category Type'], logs);
    triggerDownload(csvContent, 'admin_activity_logs.csv', 'text/csv');
    addToast('Admin audit ledger exported successfully!', 'success');
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.ip.includes(searchTerm);
    const matchesType = typeFilter === 'All' || log.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminShell activeTab="Profile" headerTitle="System Audit Center">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Profile &gt; <span style={{ color: '#2A2454' }}>Activity Log</span>
        </div>

        {/* Heading */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 className="custom-page-heading" style={{ margin: '0 0 6px 0' }}>Security &amp; Activity Audit Log</h1>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Review active sessions, login timestamps, IP verification logs, and historical operator action tracking.</p>
          </div>
          <button onClick={handleExportCSV} className="custom-btn-secondary" style={{ height: '38px', padding: '0 16px' }}>
            <Download size={14} style={{ marginRight: '6px' }} /> Export Logs
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '16px', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', flex: 1, minWidth: '240px' }}>
            <Search size={16} color="var(--muted)" />
            <input 
              type="text" 
              placeholder="Search by action, log ID, or IP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', border: 'none', background: 'none', padding: '8px 0', fontSize: '13px', outline: 'none' }}
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} /> Category:
            </span>
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              style={{ padding: '8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px', background: '#fff', outline: 'none' }}
            >
              <option value="All">All Types</option>
              <option value="Security">Security Events</option>
              <option value="Operation">Operational Actions</option>
            </select>
          </div>
        </div>

        {/* Audit Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>Log ID</th>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>Timestamp</th>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>Action Detail</th>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>IP Address</th>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>Device OS</th>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>Browser</th>
                <th style={{ padding: '14px 20px', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map(log => (
                  <tr key={log.id} style={{ borderBottom: '1px solid var(--line)', fontSize: '13px', color: 'var(--text)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: '700' }}>{log.id}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={12} /> {log.date}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', fontWeight: '600' }}>{log.action}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Terminal size={12} color="var(--muted)" /> {log.ip}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Monitor size={12} color="var(--muted)" /> {log.device}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', color: 'var(--muted)' }}>{log.browser}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ 
                        fontSize: '10px', 
                        fontWeight: '800', 
                        background: log.type === 'Security' ? '#fee2e2' : '#e0e7ff', 
                        color: log.type === 'Security' ? '#ef4444' : '#4f46e5', 
                        padding: '3px 8px', 
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        {log.type}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)' }}>No audit log events found matching criteria.</td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>

      </div>
    </AdminShell>
  );
}

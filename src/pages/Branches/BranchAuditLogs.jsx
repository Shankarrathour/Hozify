import React, { useState } from 'react';
import { 
  Download, SlidersHorizontal, RefreshCw, Search,
  ShieldAlert, Activity, AlertCircle, Settings,
  User, FileText, Lock, ChevronLeft, ChevronRight,
  MoreVertical, Calendar, Clock
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';

const MOCK_LOGS = [
  { id: 'LOG-99201', user: 'Admin (System)', action: 'Firewall Policy Update', module: 'Security', severity: 'CRITICAL', time: '10 mins ago', ip: '192.168.1.1', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-99200', user: 'Sarah Jenkins', action: 'Failed Login Attempt', module: 'Auth', severity: 'HIGH', time: '15 mins ago', ip: '45.22.11.90', status: 'FAILED', statusBg: '#fee2e2', statusColor: '#ef4444' },
  { id: 'LOG-99199', user: 'Michael Chen', action: 'Exported Service Report', module: 'Reports', severity: 'LOW', time: '1 hour ago', ip: '10.0.0.45', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-99198', user: 'System Worker', action: 'Automated DB Backup', module: 'System', severity: 'MEDIUM', time: '2 hours ago', ip: 'Localhost', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-99197', user: 'Amanda Torres', action: 'Modified User Role', module: 'Users', severity: 'HIGH', time: '3 hours ago', ip: '192.168.1.105', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-99196', user: 'David Smith', action: 'API Key Generation', module: 'Developer', severity: 'CRITICAL', time: '4 hours ago', ip: '192.168.1.20', status: 'BLOCKED', statusBg: '#fee2e2', statusColor: '#ef4444' },
];

const MOCK_EVENTS = [
  { title: 'Multiple Failed Logins', desc: '5 attempts from IP 45.22.11.90', time: '15m ago', icon: <Lock size={14} />, color: '#ef4444', bg: '#fee2e2' },
  { title: 'Role Escalation', desc: 'User elevated to Admin', time: '3h ago', icon: <ShieldAlert size={14} />, color: '#d97706', bg: '#fef3c7' },
  { title: 'Large Data Export', desc: '10k+ records exported', time: '5h ago', icon: <FileText size={14} />, color: '#3b82f6', bg: '#eff6ff' },
];

export default function BranchAuditLogs() {
  const { addToast } = useToast();
  const { navigate } = useApp();
  const [search, setSearch] = useState('');
  
  const handleExportLogs = () => {
    addToast('Generating branch audit logs CSV...', 'success');
    const headers = "Log ID,User/Actor,Action,Module,Severity,Time,IP Address,Status";
    const csvRows = MOCK_LOGS.map(l => 
      `"${l.id}","${l.user}","${l.action}","${l.module}","${l.severity}","${l.time}","${l.ip}","${l.status}"`
    );
    const csvContent = [headers, ...csvRows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'branch_audit_logs.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [logs, setLogs] = useState(MOCK_LOGS);
  const [severityFilter, setSeverityFilter] = useState('');
  const [moduleFilter, setModuleFilter] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Dynamic Actions
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Dynamic mock analysis: shuffling or slightly updating order to simulate live data
    setTimeout(() => {
      const reorderedLogs = [...logs].sort(() => Math.random() - 0.5);
      setLogs(reorderedLogs);
      setIsRefreshing(false);
      alert('Data analysis complete. Logs refreshed with real-time stream.');
    }, 600);
  };

  const handleToggleSort = () => {
    // Dynamic analytical filter: reverses current log sorting sequence
    const invertedLogs = [...logs].reverse();
    setLogs(invertedLogs);
    alert('Advanced filter applied: Inverted log analysis view.');
  };

  const handleExportExcel = () => {
    // Dynamic download trigger simulation
    alert(`Exporting ${filteredLogs.length} matching rows into Standard Excel (.xlsx) matrix layout...`);
  };

  const filteredLogs = logs.filter(l => {
    const matchesSearch = l.id.toLowerCase().includes(search.toLowerCase()) || 
                          l.user.toLowerCase().includes(search.toLowerCase()) || 
                          l.action.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severityFilter ? l.severity === severityFilter : true;
    const matchesModule = moduleFilter ? l.module === moduleFilter : true;
    return matchesSearch && matchesSeverity && matchesModule;
  });

  return (
    <AdminShell
      activeTab="Branch Management"
      headerTitle="Audit Logs"
      searchPlaceholder="Search system logs..."
    >
      <div className="branch-inventory-container" style={{ paddingBottom: '40px' }}>
        
        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}
        <div className="partners-page-header">
          <div>
            <h1 className="page-title">Audit Logs & Security</h1>
            <p className="page-subtitle">Monitor system activities, security events, and administrative actions.</p>
          </div>
          <div className="partners-header-buttons">
            <button onClick={() => addToast('System logs refreshed.', 'success')} className="secondary-action-btn font-bold" type="button" style={{ cursor: 'pointer', height: '36px' }}>
              <RefreshCw size={14} style={{ marginRight: '6px' }} />
              <span>Refresh</span>
            </button>
            <button onClick={() => addToast('Filters panel toggled.', 'info')} className="secondary-action-btn font-bold" type="button" style={{ cursor: 'pointer', height: '36px' }}>
              <SlidersHorizontal size={14} style={{ marginRight: '6px' }} />
              <span>Filters</span>
            </button>
            <button onClick={handleExportLogs} className="primary-action-btn font-bold" type="button" style={{ cursor: 'pointer', height: '36px' }}>
              <Download size={14} style={{ marginRight: '6px' }} />
              <span>Export Logs</span>
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* STATISTICS CARDS (Dark Blue Outline Applied)      */}
        {/* ================================================= */}
        <style>{`
          .audit-kpi-grid {
            display: grid;
            gap: 16px;
            margin-bottom: 24px;
          }
          @media (min-width: 1024px) { .audit-kpi-grid { grid-template-columns: repeat(6, 1fr); } }
          @media (min-width: 768px) and (max-width: 1023px) { .audit-kpi-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 767px) { .audit-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
          .audit-kpi-card {
            padding: 16px;
            background: #fff;
            border: 2px solid #1e3a8a; /* Dark Blue Outline */
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 110px;
          }
          .audit-kpi-card-header {
            font-size: 10px;
            font-weight: 800;
            color: var(--muted);
            text-transform: uppercase;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .audit-kpi-card-value {
            display: block;
            font-size: 24px;
            font-weight: 800;
            color: var(--text);
            margin: 6px 0;
          }
          .audit-kpi-card-footer {
            font-size: 11px;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          /* Excel-style table architecture overrides */
          .excel-format-table {
            width: 100%;
            border-collapse: collapse;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            border: 1px solid #d1d5db !important;
          }
          .excel-format-table th {
            background-color: #f3f4f6 !important;
            color: #374151 !important;
            font-weight: 600 !important;
            font-size: 11px !important;
            text-transform: uppercase;
            border: 1px solid #d1d5db !important;
            padding: 6px 10px !important;
            letter-spacing: 0.5px;
          }
          .excel-format-table td {
            border: 1px solid #e5e7eb !important;
            padding: 6px 10px !important;
            font-size: 12px !important;
            height: 28px;
            background-color: #ffffff;
          }
          .excel-format-table tr:hover td {
            background-color: #f0fdf4 !important; /* Excel selection tone indicator */
          }
        `}</style>
        <section className="audit-kpi-grid">
          <div className="audit-kpi-card">
            <div className="audit-kpi-card-header">
              <span>Total Logs</span>
              <FileText size={14} color="#64748b" />
            </div>
            <strong className="audit-kpi-card-value">124.5k</strong>
            <span className="audit-kpi-card-footer" style={{ color: '#10b981' }}>+12k this week</span>
          </div>
          
          <div className="audit-kpi-card">
            <div className="audit-kpi-card-header">
              <span>Security Events</span>
              <ShieldAlert size={14} color="#ef4444" />
            </div>
            <strong className="audit-kpi-card-value">{filteredLogs.length}</strong>
            <div style={{ height: '4px', background: '#ef4444', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="audit-kpi-card">
            <div className="audit-kpi-card-header">
              <span>User Activities</span>
              <User size={14} color="#3b82f6" />
            </div>
            <strong className="audit-kpi-card-value">84.2k</strong>
            <div style={{ height: '4px', background: '#3b82f6', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="audit-kpi-card">
            <div className="audit-kpi-card-header">
              <span>Failed Actions</span>
              <AlertCircle size={14} color="#f59e0b" />
            </div>
            <strong className="audit-kpi-card-value">342</strong>
            <span className="audit-kpi-card-footer" style={{ color: '#f59e0b' }}>Requires attention</span>
          </div>

          <div className="audit-kpi-card">
            <div className="audit-kpi-card-header">
              <span>Critical Alerts</span>
              <Activity size={14} color="#ef4444" />
            </div>
            <strong className="audit-kpi-card-value">12</strong>
            <span className="audit-kpi-card-footer" style={{ color: '#ef4444' }}>-2 from yesterday</span>
          </div>

          <div className="audit-kpi-card">
            <div className="audit-kpi-card-header">
              <span>System Changes</span>
              <Settings size={14} color="#8b5cf6" />
            </div>
            <strong className="audit-kpi-card-value">1,204</strong>
            <span className="audit-kpi-card-footer" style={{ color: '#10b981' }}>Routine updates</span>
          </div>
        </section>

        {/* ================================================= */}
        {/* MIDDLE SECTION: TIMELINE & EVENTS                 */}
        {/* ================================================= */}
        <style>{`
          .audit-middle-grid {
            display: grid;
            gap: 24px;
            margin-bottom: 24px;
          }
          @media (min-width: 1024px) { .audit-middle-grid { grid-template-columns: 2fr 1fr; } }
          @media (max-width: 1023px) { .audit-middle-grid { grid-template-columns: 1fr; } }
          
          .analytics-bar {
            height: 100%;
            border-radius: 4px 4px 0 0;
            transition: height 0.3s ease;
          }
        `}</style>
        <section className="audit-middle-grid">
          
          {/* Analytics / Charts Section */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0' }}>
              Activity Trends
            </h2>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              {/* Mock Bar Chart */}
              <div style={{ flex: 2, display: 'flex', alignItems: 'flex-end', gap: '12px', height: '180px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                <div style={{ flex: 1, height: '40%', background: '#e0e7ff' }} className="analytics-bar"></div>
                <div style={{ flex: 1, height: '70%', background: '#c7d2fe' }} className="analytics-bar"></div>
                <div style={{ flex: 1, height: '50%', background: '#a5b4fc' }} className="analytics-bar"></div>
                <div style={{ flex: 1, height: '90%', background: '#818cf8' }} className="analytics-bar"></div>
                <div style={{ flex: 1, height: '60%', background: '#6366f1' }} className="analytics-bar"></div>
                <div style={{ flex: 1, height: '100%', background: '#4f46e5' }} className="analytics-bar"></div>
                <div style={{ flex: 1, height: '80%', background: '#4338ca' }} className="analytics-bar"></div>
              </div>
              
              {/* Mock Donut Data */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px', paddingLeft: '16px', borderLeft: '1px solid var(--line)' }}>
                <div>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Auth Logs</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <div style={{ height: '6px', width: '60%', background: '#4f46e5', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: '800' }}>45%</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>System Logs</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <div style={{ height: '6px', width: '40%', background: '#10b981', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: '800' }}>30%</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Data Export</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <div style={{ height: '6px', width: '25%', background: '#f59e0b', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: '800' }}>25%</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', color: 'var(--muted)', fontSize: '10px', fontWeight: '700', width: '66%' }}>
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Recent Security Events */}
          <div className="panel" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={16} color="#ef4444" /> Security Events
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {MOCK_EVENTS.map((evt, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: evt.bg, color: evt.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {evt.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)', marginBottom: '2px' }}>{evt.title}</strong>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)' }}>{evt.desc}</span>
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>{evt.time}</span>
                </div>
              ))}
              <button className="secondary-action-btn font-bold" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                View All Events
              </button>
            </div>
          </div>
          
        </section>

        {/* ================================================= */}
        {/* LOGS TABLE SECTION (Excel Design Implemented)   */}
        {/* ================================================= */}
        <section className="panel" style={{ padding: '24px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
              Detailed Audit Logs
            </h2>
            
            {/* Filter Panel (Inline Linked with State) */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="dash-search" style={{ width: '240px', margin: 0, height: '34px' }}>
                <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
                <input
                  placeholder="Search logs by ID, user, or action..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ fontSize: '12px', paddingLeft: '8px', border: 'none', outline: 'none', background: 'transparent', flex: 1 }}
                />
              </div>
              
              <select 
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                style={{ height: '34px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', outline: 'none', cursor: 'pointer' }}
              >
                <option value="">All Severities</option>
                <option value="CRITICAL">Critical</option>
                <option value="HIGH">High</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
              </select>

              <select 
                value={moduleFilter}
                onChange={(e) => setModuleFilter(e.target.value)}
                style={{ height: '34px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', outline: 'none', cursor: 'pointer' }}
              >
                <option value="">All Modules</option>
                <option value="Auth">Auth</option>
                <option value="System">System</option>
                <option value="Security">Security</option>
                <option value="Users">Users</option>
                <option value="Developer">Developer</option>
                <option value="Reports">Reports</option>
              </select>
            </div>
          </div>

          <div className="table-wrap">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>LOG ID</th>
                  <th style={{ width: '12%' }}>TIMESTAMP</th>
                  <th style={{ width: '15%' }}>USER / ACTOR</th>
                  <th style={{ width: '25%' }}>ACTION</th>
                  <th style={{ width: '10%' }}>MODULE</th>
                  <th style={{ width: '12%' }}>IP ADDRESS</th>
                  <th style={{ width: '10%' }}>SEVERITY</th>
                  <th style={{ width: '10%' }}>STATUS</th>
                  <th style={{ width: '6%', textAlign: 'center' }}>CMD</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((row) => (
                  <tr key={row.id}>
                    <td style={{ color: '#1e3a8a', fontWeight: '600', fontFamily: 'monospace' }}>
                      {row.id}
                    </td>
                    <td style={{ color: '#555' }}>
                      {row.time}
                    </td>
                    <td style={{ color: '#333', fontWeight: '500' }}>
                      {row.user}
                    </td>
                    <td style={{ color: '#222' }}>
                      {row.action}
                    </td>
                    <td style={{ color: '#444', fontFamily: 'sans-serif' }}>
                      {row.module}
                    </td>
                    <td style={{ color: '#555', fontFamily: 'Consolas, monospace', fontSize: '11px' }}>
                      {row.ip}
                    </td>
                    <td>
                      <span style={{ 
                        fontSize: '9px', fontWeight: '700', padding: '1px 5px', borderRadius: '2px',
                        background: row.severity === 'CRITICAL' ? '#fee2e2' : row.severity === 'HIGH' ? '#ffedd5' : '#f1f5f9',
                        color: row.severity === 'CRITICAL' ? '#ef4444' : row.severity === 'HIGH' ? '#ea580c' : '#64748b'
                      }}>
                        {row.severity}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '9px', fontWeight: '700', padding: '1px 5px', borderRadius: '2px', background: row.statusBg, color: row.statusColor }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button onClick={() => addToast(`Opening options for ${row.id}`, 'info')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#9ca3af', padding: '2px' }} title="Log Options">
                        <MoreVertical size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>

            {filteredLogs.length === 0 && (
              <div style={{ padding: '30px', textAlign: 'center', color: '#6b7280', fontSize: '12px', background: '#fff', border: '1px solid #d1d5db', borderTop: 'none' }}>
                No records found matching current tabular filters.
              </div>
            )}
          </div>

          <div className="directory-table-footer" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Showing {filteredLogs.length} of 124,500 logs</span>
            <div className="pagination-wrap" style={{ display: 'flex', gap: '4px' }}>
              <button className="pag-nav-btn" type="button" disabled style={{ padding: '6px', border: '1px solid var(--line)', background: '#fff', borderRadius: '4px', color: 'var(--muted)', cursor: 'not-allowed' }}>
                <ChevronLeft size={14} />
              </button>
              <button style={{ padding: '6px 12px', border: '1px solid #4f46e5', background: '#4f46e5', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }} type="button">1</button>
              <button style={{ padding: '6px 12px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }} type="button">2</button>
              <button style={{ padding: '6px 12px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }} type="button">3</button>
              <span style={{ padding: '6px 4px', color: 'var(--muted)' }}>...</span>
              <button style={{ padding: '6px 12px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }} type="button">100</button>
              <button className="pag-nav-btn" type="button" style={{ padding: '6px', border: '1px solid var(--line)', background: '#fff', borderRadius: '4px', color: 'var(--text)', cursor: 'pointer' }}>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </section>

      </div>
    </AdminShell>
  );
}
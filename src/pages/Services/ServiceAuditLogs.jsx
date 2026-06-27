import React, { useState } from 'react';
import { 
  Download, SlidersHorizontal, RefreshCw, Search,
  ShieldAlert, Activity, AlertCircle, Settings,
  Tags, FileText, ChevronLeft, ChevronRight,
  MoreVertical, Clock, DollarSign
} from 'lucide-react';

const MOCK_LOGS = [
  { id: 'LOG-SVC-901', user: 'Admin (System)', action: 'Updated Global Pricing Strategy', module: 'Pricing', severity: 'HIGH', time: '10 mins ago', ip: '192.168.1.1', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-SVC-900', user: 'Sarah Jenkins', action: 'Failed to delete Category (Has Services)', module: 'Catalog', severity: 'MEDIUM', time: '15 mins ago', ip: '45.22.11.90', status: 'FAILED', statusBg: '#fee2e2', statusColor: '#ef4444' },
  { id: 'LOG-SVC-899', user: 'Michael Chen', action: 'Exported Services Report', module: 'Reports', severity: 'LOW', time: '1 hour ago', ip: '10.0.0.45', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-SVC-898', user: 'System Worker', action: 'Automated Commission Settlement', module: 'Commission', severity: 'HIGH', time: '2 hours ago', ip: 'Localhost', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-SVC-897', user: 'Amanda Torres', action: 'Modified Sub Category Mapping', module: 'Catalog', severity: 'MEDIUM', time: '3 hours ago', ip: '192.168.1.105', status: 'SUCCESS', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'LOG-SVC-896', user: 'David Smith', action: 'Bulk Price Update (Rejected)', module: 'Pricing', severity: 'CRITICAL', time: '4 hours ago', ip: '192.168.1.20', status: 'BLOCKED', statusBg: '#fee2e2', statusColor: '#ef4444' },
];

const MOCK_EVENTS = [
  { title: 'Multiple Pricing Failures', desc: '3 failed bulk uploads by David', time: '15m ago', icon: <DollarSign size={14} />, color: '#ef4444', bg: '#fee2e2' },
  { title: 'Commission Rule Escalation', desc: 'Partner override reached 80%', time: '3h ago', icon: <ShieldAlert size={14} />, color: '#d97706', bg: '#fef3c7' },
  { title: 'Large Catalog Export', desc: '2k+ services exported', time: '5h ago', icon: <FileText size={14} />, color: '#3b82f6', bg: '#eff6ff' },
];

export default function ServiceAuditLogs() {
  const [search, setSearch] = useState('');
  
  const filteredLogs = MOCK_LOGS.filter(l => 
    l.id.toLowerCase().includes(search.toLowerCase()) || 
    l.user.toLowerCase().includes(search.toLowerCase()) || 
    l.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* ================================================= */}
      {/* HEADER                                            */}
      {/* ================================================= */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Audit Logs</h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Monitor catalog operations, pricing adjustments, and security events.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <RefreshCw size={14} style={{ marginRight: '6px' }} /> Refresh
          </button>
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <SlidersHorizontal size={14} style={{ marginRight: '6px' }} /> Filters
          </button>
          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '6px' }} /> Export Logs
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* STATISTICS CARDS                                  */}
      {/* ================================================= */}
      <style>{`
        .audit-kpi-grid {
          display: grid;
          gap: 16px;
        }
        @media (min-width: 1024px) { .audit-kpi-grid { grid-template-columns: repeat(6, 1fr); } }
        @media (min-width: 768px) and (max-width: 1023px) { .audit-kpi-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 767px) { .audit-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
        .audit-kpi-card {
          padding: 16px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 12px;
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
      `}</style>
      <section className="audit-kpi-grid">
        <div className="audit-kpi-card">
          <div className="audit-kpi-card-header">
            <span>Total Logs</span>
            <FileText size={14} color="#64748b" />
          </div>
          <strong className="audit-kpi-card-value">24.5k</strong>
          <span className="audit-kpi-card-footer" style={{ color: '#10b981' }}>+2k this week</span>
        </div>
        
        <div className="audit-kpi-card">
          <div className="audit-kpi-card-header">
            <span>Security Events</span>
            <ShieldAlert size={14} color="#ef4444" />
          </div>
          <strong className="audit-kpi-card-value">12</strong>
          <div style={{ height: '4px', background: '#ef4444', borderRadius: '2px', marginTop: '4px' }} />
        </div>

        <div className="audit-kpi-card">
          <div className="audit-kpi-card-header">
            <span>Catalog Updates</span>
            <Tags size={14} color="#3b82f6" />
          </div>
          <strong className="audit-kpi-card-value">1,420</strong>
          <div style={{ height: '4px', background: '#3b82f6', borderRadius: '2px', marginTop: '4px' }} />
        </div>

        <div className="audit-kpi-card">
          <div className="audit-kpi-card-header">
            <span>Failed Actions</span>
            <AlertCircle size={14} color="#f59e0b" />
          </div>
          <strong className="audit-kpi-card-value">45</strong>
          <span className="audit-kpi-card-footer" style={{ color: '#f59e0b' }}>Requires attention</span>
        </div>

        <div className="audit-kpi-card">
          <div className="audit-kpi-card-header">
            <span>Critical Alerts</span>
            <Activity size={14} color="#ef4444" />
          </div>
          <strong className="audit-kpi-card-value">3</strong>
          <span className="audit-kpi-card-footer" style={{ color: '#ef4444' }}>-1 from yesterday</span>
        </div>

        <div className="audit-kpi-card">
          <div className="audit-kpi-card-header">
            <span>Pricing Changes</span>
            <DollarSign size={14} color="#8b5cf6" />
          </div>
          <strong className="audit-kpi-card-value">342</strong>
          <span className="audit-kpi-card-footer" style={{ color: '#10b981' }}>Strategy overrides</span>
        </div>
      </section>

      {/* ================================================= */}
      {/* MIDDLE SECTION: TIMELINE & EVENTS                 */}
      {/* ================================================= */}
      <style>{`
        .audit-middle-grid {
          display: grid;
          gap: 24px;
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
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px' }}>
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
                <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Catalog Logs</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <div style={{ height: '6px', width: '50%', background: '#4f46e5', borderRadius: '3px' }}></div>
                  <span style={{ fontSize: '11px', fontWeight: '800' }}>50%</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Pricing Logs</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <div style={{ height: '6px', width: '35%', background: '#10b981', borderRadius: '3px' }}></div>
                  <span style={{ fontSize: '11px', fontWeight: '800' }}>35%</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Security Events</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <div style={{ height: '6px', width: '15%', background: '#f59e0b', borderRadius: '3px' }}></div>
                  <span style={{ fontSize: '11px', fontWeight: '800' }}>15%</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', color: 'var(--muted)', fontSize: '10px', fontWeight: '700', width: '66%' }}>
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Recent Security Events */}
        <div className="panel" style={{ padding: '24px', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldAlert size={16} color="#ef4444" /> Alert Highlights
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
              View All Alerts
            </button>
          </div>
        </div>
        
      </section>

      {/* ================================================= */}
      {/* LOGS TABLE SECTION                                */}
      {/* ================================================= */}
      <section className="panel" style={{ padding: '24px', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
            Detailed Audit Logs
          </h2>
          
          {/* Filter Panel (Inline) */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="dash-search" style={{ width: '240px', margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px' }}>
              <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
              <input
                placeholder="Search logs by ID, user, or action..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontSize: '12px', paddingLeft: '8px', border: 'none', outline: 'none', background: 'transparent', flex: 1 }}
              />
            </div>
            
            <select style={{ height: '34px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', outline: 'none', cursor: 'pointer' }}>
              <option value="">All Severities</option>
              <option value="CRITICAL">Critical</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>

            <select style={{ height: '34px', fontSize: '12px', fontWeight: '600', color: 'var(--text)', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', outline: 'none', cursor: 'pointer' }}>
              <option value="">All Modules</option>
              <option value="Catalog">Catalog</option>
              <option value="Pricing">Pricing</option>
              <option value="Commission">Commission</option>
              <option value="Reports">Reports</option>
            </select>
          </div>
        </div>

        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>LOG ID</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>TIMESTAMP</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>USER / ACTOR</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>ACTION</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>MODULE</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>SEVERITY</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>STATUS</th>
                <th style={{ padding: '12px', textAlign: 'right', fontSize: '11px', color: 'var(--muted)', fontWeight: '800' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px', fontSize: '12px' }}>
                    <span style={{ color: '#4f46e5', fontWeight: '700', cursor: 'pointer' }}>{row.id}</span>
                  </td>
                  <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={12} /> {row.time}
                    </div>
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>
                    {row.user}
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)' }}>
                    {row.action}
                  </td>
                  <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>
                    {row.module}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ 
                      fontSize: '9px', fontWeight: '800', padding: '3px 8px', borderRadius: '4px',
                      background: row.severity === 'CRITICAL' ? '#fee2e2' : row.severity === 'HIGH' ? '#ffedd5' : '#f1f5f9',
                      color: row.severity === 'CRITICAL' ? '#ef4444' : row.severity === 'HIGH' ? '#ea580c' : '#64748b'
                    }}>
                      {row.severity}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ fontSize: '9px', fontWeight: '800', padding: '3px 8px', borderRadius: '4px', background: row.statusBg, color: row.statusColor }}>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}>
                      <MoreVertical size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>

          {filteredLogs.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
              No logs found matching your criteria.
            </div>
          )}
        </div>

        <div className="directory-table-footer" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Showing {filteredLogs.length} of 24,500 logs</span>
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
  );
}

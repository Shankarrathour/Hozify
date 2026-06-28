import React from 'react';
import { 
  Filter, Calendar, Zap, Download, Maximize, Settings, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import toast from 'react-hot-toast';

export default function SystemLogs() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px', maxWidth: '1300px' }}>
        
        {/* Header & Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px' }}>
              System Logs
            </h1>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
              Real-time monitoring of server health and application events.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ display: 'flex', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', padding: '0 16px', background: '#f1f5f9', border: 'none', fontSize: '12px', fontWeight: '800', color: '#0f172a', cursor: 'pointer' }}>All Logs</button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', padding: '0 16px', background: '#fff', border: 'none', borderLeft: '1px solid #e2e8f0', fontSize: '12px', fontWeight: '700', color: '#64748b', cursor: 'pointer' }}>Critical</button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', padding: '0 16px', background: '#fff', border: 'none', borderLeft: '1px solid #e2e8f0', fontSize: '12px', fontWeight: '700', color: '#64748b', cursor: 'pointer' }}>Warnings</button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', padding: '0 16px', background: '#fff', border: 'none', borderLeft: '1px solid #e2e8f0', fontSize: '12px', fontWeight: '700', color: '#64748b', cursor: 'pointer' }}>Info</button>
            </div>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', padding: '0 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <Filter size={14} /> Advanced Filters
            </button>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ height: '40px', padding: '0 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <Calendar size={14} /> Last 24 Hours
            </button>
          </div>
        </div>

        {/* Top Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '24px', marginBottom: '32px' }}>
          
          {/* Error Rate Card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ERROR RATE</span>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#dc2626' }}>+0.02%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>0.14%</span>
              <span style={{ fontSize: '11px', color: '#64748b' }}>avg/min</span>
            </div>
            {/* Fake bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '32px', background: '#fef2f2', padding: '4px', borderRadius: '4px' }}>
              <div style={{ flex: 1, background: '#ef4444', height: '40%' }}></div>
              <div style={{ flex: 1, background: '#ef4444', height: '30%' }}></div>
              <div style={{ flex: 1, background: '#ef4444', height: '60%' }}></div>
              <div style={{ flex: 1, background: '#ef4444', height: '50%' }}></div>
              <div style={{ flex: 1, background: '#ef4444', height: '90%' }}></div>
              <div style={{ flex: 1, background: '#ef4444', height: '100%' }}></div>
              <div style={{ flex: 1, background: '#ef4444', height: '70%' }}></div>
              <div style={{ flex: 1, background: 'transparent' }}></div>
              <div style={{ flex: 1, background: 'transparent' }}></div>
              <div style={{ flex: 1, background: 'transparent' }}></div>
              <div style={{ flex: 1, background: 'transparent' }}></div>
            </div>
          </div>

          {/* Total Requests Card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', width: '60px', lineHeight: '1.4' }}>TOTAL REQUESTS</span>
              <Zap size={16} color="#64748b" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>2.4M</span>
              <span style={{ fontSize: '11px', color: '#64748b' }}>past 24h</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ flex: 1, height: '4px', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: '#0f172a', borderRadius: '2px' }}></div>
              </div>
              <span style={{ fontSize: '10px', color: '#64748b' }}>72% of quota</span>
            </div>
          </div>

          {/* Node Distribution Card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px' }}>NODE DISTRIBUTION</span>
            <div style={{ display: 'flex', gap: '40px', flex: 1, alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px' }}>Node-US-East</h4>
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Operational • 12ms latency</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px' }}>Node-EU-West</h4>
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Operational • 42ms latency</p>
              </div>
            </div>
          </div>

        </div>

        {/* Main Event Registry Table */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
          
          {/* Table Toolbar */}
          <div style={{ background: '#1e1b4b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <h2 style={{ fontSize: '12px', fontWeight: '800', color: '#fff', letterSpacing: '1px', margin: 0 }}>EVENT REGISTRY</h2>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '9px', fontWeight: '800', padding: '4px 10px', borderRadius: '12px', letterSpacing: '0.5px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }}></span> LIVE STREAMING
              </span>
            </div>
            <div style={{ display: 'flex', gap: '16px', color: '#94a3b8' }}>
              <Download size={16} style={{ cursor: 'pointer' }} />
              <Maximize size={16} style={{ cursor: 'pointer' }} />
              <Settings size={16} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TIMESTAMP (UTC)</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SEVERITY</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SERVICE</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>MESSAGE</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>LATENCY</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'monospace', fontSize: '11px' }}>
              
              {/* Row 1 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:41.002</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#fee2e2', color: '#dc2626', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>CRITICAL</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>Auth-Gateway</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  <span style={{ color: '#dc2626', fontWeight: '700' }}>DB_CONNECTION_FAILURE:</span> Connection timeout on secondary replica cluster.
                </td>
                <td style={{ padding: '16px 24px', color: '#94a3b8', textAlign: 'right' }}>--</td>
              </tr>

              {/* Row 2 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:40.812</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#fef3c7', color: '#d97706', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>WARNING</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>Payment-Proxy</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  RETRIABLE_EXCEPTION: Card validation service responded with 503. Retrying in 2s.
                </td>
                <td style={{ padding: '16px 24px', color: '#16a34a', textAlign: 'right' }}>1.2s</td>
              </tr>

              {/* Row 3 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:39.155</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>INFO</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>Search-Indexer</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  INDEX_UPDATE_SUCCESS: Re-indexed 4,209 documents for 'Global-Search-V3'.
                </td>
                <td style={{ padding: '16px 24px', color: '#16a34a', textAlign: 'right' }}>420ms</td>
              </tr>

              {/* Row 4 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:38.991</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>INFO</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>API-v2</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  GET /v2/analytics/operational?period=24h&scope=full [200 OK]
                </td>
                <td style={{ padding: '16px 24px', color: '#16a34a', textAlign: 'right' }}>12ms</td>
              </tr>

              {/* Row 5 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:37.402</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#fee2e2', color: '#dc2626', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>CRITICAL</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>Node-Manager</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  MEMORY_THRESHOLD_EXCEEDED: Process id 8421 killed by OOM killer.
                </td>
                <td style={{ padding: '16px 24px', color: '#94a3b8', textAlign: 'right' }}>--</td>
              </tr>

              {/* Row 6 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:36.002</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#fef3c7', color: '#d97706', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>WARNING</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>Job-Scheduler</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  LATE_EXECUTION: Job 'Nightly-Backup' started with 12 minute delay.
                </td>
                <td style={{ padding: '16px 24px', color: '#94a3b8', textAlign: 'right' }}>--</td>
              </tr>

              {/* Row 7 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:35.812</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>INFO</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>CDN-Worker</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  CACHE_PURGE_REQUEST: Static asset purge initiated for path '/assets/v4/*'.
                </td>
                <td style={{ padding: '16px 24px', color: '#16a34a', textAlign: 'right' }}>2ms</td>
              </tr>

              {/* Row 8 */}
              <tr>
                <td style={{ padding: '16px 24px', color: '#64748b' }}>2023-11-28<br/>14:23:34.155</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', fontSize: '9px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>INFO</span>
                </td>
                <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700' }}>Invoicing-Svc</td>
                <td style={{ padding: '16px 24px', color: '#334155', maxWidth: '400px', lineHeight: '1.5' }}>
                  EMAIL_DISPATCHED: Monthly statement sent to client 88219.
                </td>
                <td style={{ padding: '16px 24px', color: '#16a34a', textAlign: 'right' }}>1.4s</td>
              </tr>
            </tbody>
          </table></div>

          {/* Pagination Footer */}
          <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Showing 1-50 of 12,402 entries</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '28px', height: '28px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}><ChevronLeft size={14} /></button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '28px', height: '28px', background: '#1e1b4b', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '11px', fontWeight: '700' }}>1</button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '28px', height: '28px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', fontSize: '11px', fontWeight: '700' }}>2</button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '28px', height: '28px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', fontSize: '11px', fontWeight: '700' }}>3</button>
              <span style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '11px' }}>...</span>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '32px', height: '28px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', fontSize: '11px', fontWeight: '700' }}>249</button>
              <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} style={{ width: '28px', height: '28px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}><ChevronRight size={14} /></button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}

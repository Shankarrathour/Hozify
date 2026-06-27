import React, { useState } from 'react';
import { 
  Server, 
  Activity, 
  Database, 
  CreditCard, 
  MessageSquare, 
  Mail, 
  Map, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  RefreshCw,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function SystemHealth({ activeTab = 'Dashboard' }) {
  const [uptimeView, setUptimeView] = useState('Month');
  const [refreshing, setRefreshing] = useState(false);

  const handleManualRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      alert("System health status updated successfully.");
    }, 800);
  };

  // 8 Health Cards
  const metrics = [
    { title: "API Health", value: "42ms", sub: "Average Latency", status: "99.98%", positive: true, icon: Activity, color: "#25108f", bg: "#f4eff8" },
    { title: "Server Health", value: "12% CPU", sub: "RAM 4.2 / 16GB", status: "Stable", positive: true, icon: Server, color: "#047857", bg: "#ecfdf5" },
    { title: "Database Health", value: "8ms", sub: "Query Execution", status: "Active", positive: true, icon: Database, color: "#1e40af", bg: "#eff6ff" },
    { title: "Payments (Stripe)", value: "100%", sub: "Last check 2m ago", status: "Online", positive: true, icon: CreditCard, color: "#07956f", bg: "#ecfdf5" },
    { title: "SMS Gateway", value: "1.2s", sub: "Avg Delivery Time", status: "Active", positive: true, icon: MessageSquare, color: "#0d9488", bg: "#f0fdfa" },
    { title: "WhatsApp API", value: "96.4%", sub: "Queue status", status: "High Load", positive: false, icon: MessageSquare, color: "#b45309", bg: "#fffbeb" },
    { title: "Email Health", value: "99.1%", sub: "Inbox Placement", status: "Normal", positive: true, icon: Mail, color: "#047857", bg: "#ecfdf5" },
    { title: "Maps API Health", value: "18ms", sub: "Geo-query latency", status: "Ready", positive: true, icon: Map, color: "#1e40af", bg: "#eff6ff" }
  ];

  // 30 days blocks mock (30 blocks: 28 green, 2 yellow warning)
  const blocksNormal = Array(20).fill('green');
  const blocksWarning1 = ['green', 'green', 'yellow', 'green', 'green', 'green', 'yellow', 'green', 'green', 'green'];
  const uptimeBlocks = [...blocksNormal, ...blocksWarning1].slice(0, 30);

  const regionalData = [
    { region: "us-east-1 (N. Virginia)", status: "OPERATIONAL", statusColor: "#07956f", statusBg: "#ecfdf5", load: "34%", errors: "0.0001%", net: "1.2 GB/s / 840 MB/s", actionText: "Metrics", actionColor: "#25108f" },
    { region: "eu-central-1 (Frankfurt)", status: "OPERATIONAL", statusColor: "#07956f", statusBg: "#ecfdf5", load: "22%", errors: "0.0000%", net: "420 MB/s / 180 MB/s", actionText: "Metrics", actionColor: "#25108f" },
    { region: "ap-south-1 (Mumbai)", status: "DEGRADED", statusColor: "#b45309", statusBg: "#fffbeb", load: "78%", errors: "1.42%", net: "2.1 GB/s / 1.9 GB/s", actionText: "Investigate", actionColor: "#b45309", isWarning: true }
  ];

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="System Health"
      searchPlaceholder="Search system logs..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title and Top status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              System Health
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Real-time status of global infrastructure and 3rd party integrations.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: '850',
              background: '#ecfdf5',
              color: '#07956f',
              padding: '6px 12px',
              borderRadius: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{ height: '8px', width: '8px', background: '#07956f', borderRadius: '50%' }} />
              ALL SYSTEMS OPERATIONAL
            </span>

            <button
              onClick={handleManualRefresh}
              style={{ height: '36px', width: '36px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Refresh status"
            >
              <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* 8 Health Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: m.bg, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={13} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)' }}>{m.title}</span>
                  </div>
                  <span style={{
                    fontSize: '9px',
                    fontWeight: '850',
                    background: m.positive ? '#ecfdf5' : '#fffbeb',
                    color: m.positive ? '#07956f' : '#b45309',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    {m.status}
                  </span>
                </div>
                <div>
                  <strong style={{ fontSize: '20px', fontWeight: '850', color: 'var(--text)' }}>{m.value}</strong>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{m.sub}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Panel grid (Uptime history & Recent incidents) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* Uptime history block grid */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Uptime History (Last 30 Days)</h2>
              
              <div style={{ display: 'flex', background: '#f4eff8', borderRadius: '6px', padding: '3px', gap: '4px' }}>
                {['Day', 'Month'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setUptimeView(tab)}
                    style={{
                      border: 'none',
                      background: uptimeView === tab ? '#25108f' : 'transparent',
                      color: uptimeView === tab ? '#fff' : 'var(--muted)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: '750',
                      cursor: 'pointer'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Timelines lists */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
              {[
                { name: "Core API Service", uptime: "100%" },
                { name: "Payment Processing", uptime: "99.9%" },
                { name: "Worker Nodes (US-East)", uptime: "100%" }
              ].map((service, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--text)' }}>{service.name}</span>
                    <span style={{ color: '#07956f', fontWeight: '850' }}>{service.uptime}</span>
                  </div>
                  {/* Grid blocks */}
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {uptimeBlocks.map((b, i) => (
                      <div key={i} style={{
                        flex: 1,
                        height: '24px',
                        background: b === 'green' ? '#07956f' : '#fbbf24',
                        borderRadius: '2px',
                        opacity: b === 'green' ? 0.75 : 1
                      }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent incidents list */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: '0 0 16px' }}>Recent Incidents</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ borderLeft: '3px solid #07956f', paddingLeft: '12px' }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Service Restored: SMS Gateway</strong>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '2px 0 0' }}>Primary gateway switched to backup provider successfully.</p>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '4px' }}>14:22 UTC — <span style={{ color: '#07956f', fontWeight: '700' }}>Resolved</span></span>
                </div>

                <div style={{ borderLeft: '3px solid #b45309', paddingLeft: '12px' }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Performance Degraded: WhatsApp API</strong>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '2px 0 0' }}>High latency detected in message delivery queues.</p>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '4px' }}>11:05 UTC — <span style={{ color: '#b45309', fontWeight: '700' }}>Investigating</span></span>
                </div>

                <div style={{ borderLeft: '3px solid #64748b', paddingLeft: '12px' }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Scheduled Maintenance Complete</strong>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '2px 0 0' }}>Database cluster upgrade v14.2 successful.</p>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '4px' }}>Aug 22, 02:00 UTC</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert("Loading full chronological system event history list...")}
              style={{
                width: '100%',
                height: '38px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                fontSize: '12px',
                fontWeight: '750',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              View Full History
            </button>
          </div>

        </div>

        {/* Regional performance table */}
        <div className="panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Regional Infrastructure Performance</h2>
            <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>Auto-refresh: 30s</span>
          </div>

          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Region</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Load</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Errors (24h)</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Network In/Out</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {regionalData.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--lavender)' }}>
                    <td style={{ padding: '16px', fontWeight: '700', color: 'var(--text)' }}>{row.region}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ fontSize: '9px', fontWeight: '850', background: row.statusBg, color: row.statusColor, padding: '3px 8px', borderRadius: '4px' }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', minWidth: '110px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, background: '#f1f5f9', height: '6px', borderRadius: '3px', width: '60px', overflow: 'hidden' }}>
                          <div style={{ background: row.isWarning ? '#fbbf24' : '#25108f', height: '100%', width: row.load }} />
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '750' }}>{row.load}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', color: row.isWarning ? '#d32929' : 'var(--text)', fontWeight: '700' }}>{row.errors}</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>{row.net}</td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <button
                        onClick={() => alert(`Opening metrics details trace for ${row.region}`)}
                        style={{ border: 'none', background: 'transparent', color: row.actionColor, cursor: 'pointer', fontWeight: '800' }}
                      >
                        {row.actionText}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}

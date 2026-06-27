import React, { useState } from 'react';
import { 
  Calendar, 
  Download, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  SlidersHorizontal, 
  X,
  CreditCard,
  DollarSign
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function RevenueDashboard({ activeTab = 'Revenue Management' }) {
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [showInsight, setShowInsight] = useState(true);

  // KPIs
  const kpis = [
    { title: "TODAY'S REVENUE", value: "$12,482.00", trend: "+8.2% from yesterday", positive: true, iconColor: "#25108f", iconBg: "#f4eff8" },
    { title: "WEEKLY REVENUE", value: "$84,210.50", trend: "+12.4% from last week", positive: true, iconColor: "#047857", iconBg: "#ecfdf5" },
    { title: "MONTHLY REVENUE", value: "$328,000.00", trend: "-2.1% from last month", positive: false, iconColor: "#b45309", iconBg: "#fffbeb" },
    { title: "YEARLY REVENUE", value: "$4.2M", trend: "+15% target completion", positive: true, iconColor: "#1e40af", iconBg: "#eff6ff" }
  ];

  // Transactions list
  const transactions = [
    { id: "TXN-882910", name: "Global Logistics Ltd.", initials: "GL", gross: 1240.00, comm: 186.00, payout: 1054.00, status: "Settled", date: "May 24, 14:20" },
    { id: "TXN-882911", name: "HomeCare Solutions", initials: "HC", gross: 450.00, comm: 67.50, payout: 382.50, status: "Pending", date: "May 24, 15:45" },
    { id: "TXN-882912", name: "Swift Delivery Co.", initials: "SD", gross: 2800.00, comm: 420.00, payout: 2380.00, status: "Settled", date: "May 23, 10:12" },
    { id: "TXN-882913", name: "Urban Cleaning Inc.", initials: "UC", gross: 85.00, comm: 12.75, payout: 72.25, status: "Refunded", date: "May 23, 09:30" }
  ];

  const handleExport = () => {
    alert("Exporting Transactions CSV...");
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Revenue Analytics"
      searchPlaceholder="Search transactions, partners, or analytics..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Title & Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Revenue Analytics
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Real-time financial performance and commission tracking.
            </p>
          </div>

          {/* Quick Filters */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', padding: '6px 12px', borderRadius: '6px' }}>
              <Calendar size={14} style={{ color: 'var(--muted)' }} />
              <select
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
                aria-label="Timeframe selection"
              >
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="This Month">This Month</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', padding: '6px 12px', borderRadius: '6px' }}>
              <MapPin size={14} style={{ color: 'var(--muted)' }} />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
                aria-label="City selection"
              >
                <option value="All Cities">All Cities</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
            </div>

            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', padding: '7px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              <SlidersHorizontal size={14} />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* 4 KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {kpis.map((kpi, idx) => (
            <div key={idx} className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {kpi.title}
                </span>
                <div style={{ height: '32px', width: '32px', borderRadius: '50%', background: kpi.iconBg, color: kpi.iconColor, display: 'flex', alignItems: 'center', justifycontent: 'center', justifyContent: 'center' }}>
                  <DollarSign size={16} />
                </div>
              </div>
              <div>
                <strong style={{ fontSize: '26px', fontWeight: '850', color: 'var(--text)', display: 'block', letterSpacing: '-0.5px' }}>
                  {kpi.value}
                </strong>
                <span style={{ fontSize: '12px', fontWeight: '750', color: kpi.positive ? '#07956f' : '#d32929', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  {kpi.positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {kpi.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Rows */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* Revenue Growth Trend SVG */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Revenue Growth Trend</h2>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Daily aggregated revenue across all sectors.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', fontSize: '11px', fontWeight: '700' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text)' }}>
                  <span style={{ height: '8px', width: '8px', background: '#25108f', borderRadius: '50%' }} />
                  Revenue
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text)' }}>
                  <span style={{ height: '8px', width: '8px', background: '#fca5a5', borderRadius: '50%' }} />
                  Target
                </span>
              </div>
            </div>

            {/* Line Chart Grid Area */}
            <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'flex-end', marginTop: '20px' }}>
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                <path d="M 0 110 C 80 120, 150 90, 250 80 C 350 70, 420 20, 500 15" fill="none" stroke="#25108f" strokeWidth="3" strokeLinecap="round" />
                <path d="M 0 110 C 80 120, 150 90, 250 80 C 350 70, 420 20, 500 15 L 500 150 L 0 150 Z" fill="url(#grad)" opacity="0.1" />
                <line x1="0" y1="50" x2="500" y2="50" stroke="#f4eff8" strokeWidth="1" strokeDasharray="4" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#f4eff8" strokeWidth="1" strokeDasharray="4" />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#25108f" />
                    <stop offset="100%" stopColor="#fff" />
                  </linearGradient>
                </defs>
              </svg>

              <div style={{
                position: 'absolute',
                bottom: '-24px',
                left: 0, right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: 'var(--muted)',
                fontWeight: '750'
              }}>
                <span>01 May</span>
                <span>08 May</span>
                <span>15 May</span>
                <span>22 May</span>
                <span>30 May</span>
              </div>
            </div>
          </div>

          {/* Seller Distribution Doughnut Chart */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Seller Distribution</h2>

            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '140px', alignItems: 'center' }}>
              <div style={{
                height: '110px',
                width: '110px',
                borderRadius: '50%',
                border: '14px solid #25108f',
                borderTopColor: '#c8c0d7',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <strong style={{ fontSize: '18px', fontWeight: '850', color: '#25108f' }}>82%</strong>
                <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Top Tier</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '750' }}>
                  <span style={{ height: '8px', width: '8px', background: '#25108f', borderRadius: '50%' }} />
                  Enterprise
                </span>
                <strong style={{ color: 'var(--text)' }}>$210K</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '750' }}>
                  <span style={{ height: '8px', width: '8px', background: '#a855f7', borderRadius: '50%' }} />
                  Mid-Market
                </span>
                <strong style={{ color: 'var(--text)' }}>$94K</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '750' }}>
                  <span style={{ height: '8px', width: '8px', background: '#e9d5ff', borderRadius: '50%' }} />
                  Small Biz
                </span>
                <strong style={{ color: 'var(--text)' }}>$24K</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Comparison Lists */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px' }}>
          
          {/* Partner Performance comparison bars */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Partner Performance Comparison</h2>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#25108f', cursor: 'pointer' }}>Download Report</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
              {[
                { name: "Global Logistics Ltd.", value: "$142,000", width: "100%" },
                { name: "HomeCare Solutions", value: "$98,400", width: "69%" },
                { name: "Swift Delivery Co.", value: "$76,200", width: "54%" },
                { name: "Urban Cleaning Inc.", value: "$44,100", width: "31%" }
              ].map((item, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text)' }}>{item.name}</span>
                    <span style={{ color: 'var(--muted)' }}>{item.value}</span>
                  </div>
                  <div style={{ height: '8px', background: '#f4eff8', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: item.width, height: '100%', background: '#25108f' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Net Commissions single bar chart */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Net Commissions</h2>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Platform earnings after partner payouts.</span>

            <div style={{ height: '140px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative', marginTop: '10px' }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                const isThu = day === 'Thu';
                return (
                  <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                    <div style={{
                      width: '8px',
                      height: isThu ? '110px' : '4px',
                      background: '#25108f',
                      borderRadius: '4px 4px 0 0'
                    }} />
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '750', marginTop: '6px' }}>{day}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Transaction Breakdown Table */}
        <div className="panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Transaction Breakdown</h2>
            <button
              onClick={handleExport}
              style={{ border: '1px solid var(--line)', background: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Download size={12} />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="table-wrap">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Transaction ID</th>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Entity Name</th>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Gross Amount</th>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Commission (15%)</th>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Net Payout</th>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '10px 12px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--lavender)' }}>
                    <td style={{ padding: '12px', fontWeight: '750', color: '#25108f' }}>#{txn.id}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ height: '26px', width: '26px', borderRadius: '50%', background: '#f4eff8', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '850' }}>
                          {txn.initials}
                        </div>
                        <strong style={{ color: 'var(--text)' }}>{txn.name}</strong>
                      </div>
                    </td>
                    <td style={{ padding: '12px', fontWeight: '650' }}>${txn.gross.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    <td style={{ padding: '12px', fontWeight: '850', color: '#25108f' }}>${txn.comm.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    <td style={{ padding: '12px', fontWeight: '650' }}>${txn.payout.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: '850',
                        background: txn.status === 'Settled' ? '#ecfdf5' : txn.status === 'Pending' ? '#fffbeb' : '#fee2e2',
                        color: txn.status === 'Settled' ? '#07956f' : txn.status === 'Pending' ? '#b45309' : '#d32929',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        {txn.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right', color: 'var(--muted)' }}>{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
          
          <div style={{ marginTop: '14px', fontSize: '12px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Showing 1 to 4 of 1,240 entries</span>
          </div>
        </div>

        {/* Floating Performance Alert Bar */}
        {showInsight && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #31108f 100%)',
            color: '#fff',
            borderRadius: '8px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(37, 16, 143, 0.25)',
            zIndex: 99,
            maxWidth: '380px'
          }}>
            <div style={{ height: '28px', width: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingUp size={14} style={{ color: '#a78bfa' }} />
            </div>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#c084fc', display: 'block' }}>PERFORMANCE ALERT</strong>
              <span style={{ fontSize: '12.5px', marginTop: '2px', display: 'block' }}>Logistics is outperforming cleaning by 22% this week.</span>
            </div>
            <button onClick={() => setShowInsight(false)} style={{ border: 'none', background: 'transparent', color: '#c7d2fe', cursor: 'pointer', padding: '2px' }}>
              <X size={14} />
            </button>
          </div>
        )}

      </div>
    </AdminShell>
  );
}

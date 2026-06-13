import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, ArrowUpRight, DollarSign } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function WalletAnalytics() {
  return (
    <AdminShell
      activeTab="Wallet Management"
      brandText="HOZIFY Wallet"
      brandSubText="Global Ledger v1.2"
      headerTitle="Wallet Analytics"
      searchPlaceholder="Search analytics..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title */}
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Wallet Analytics Dashboard
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
            Advanced credit/debit ratio breakdown, growth models, and category distributions.
          </p>
        </div>

        {/* Analytics KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { title: 'Credit Ratio', value: '72%', subtext: 'Inbound vs Outbound', trend: '+4.5%', isUp: true },
            { title: 'Settlement Efficiency', value: '98.4%', subtext: 'Avg Processing: 2.1h', trend: '+0.8%', isUp: true },
            { title: 'Refund Frequency', value: '1.2%', subtext: 'Per total transactions', trend: '-0.3%', isUp: false },
            { title: 'Dispute Win Rate', value: '88.5%', subtext: 'Resolved chargebacks', trend: '+12.4%', isUp: true }
          ].map((kpi, idx) => (
            <div key={idx} className="panel" style={{ padding: '20px' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {kpi.title}
              </span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '850', color: 'var(--text)', marginTop: '8px' }}>
                {kpi.value}
              </strong>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{kpi.subtext}</span>
                <span style={{ fontSize: '11px', fontWeight: '800', color: kpi.isUp ? '#07956f' : '#d32929' }}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grids */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          {/* Revenue Distribution Chart */}
          <div className="panel" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: '0 0 16px' }}>
              Revenue & Share Distribution
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Platform Commissions (15%)', value: '₹1,84,200', share: '15%', barWidth: '15%' },
                { label: 'Partner Split Share (65%)', value: '₹7,98,200', share: '65%', barWidth: '65%' },
                { label: 'Employee Payouts (20%)', value: '₹2,45,600', share: '20%', barWidth: '20%' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text)' }}>{item.label}</span>
                    <span style={{ color: 'var(--muted)' }}>{item.value} ({item.share})</span>
                  </div>
                  <div style={{ height: '8px', background: '#f4eff8', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: item.barWidth, height: '100%', background: '#25108f' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credit/Debit Trends */}
          <div className="panel" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '850', color: 'var(--text)', margin: '0 0 16px' }}>
              Credit / Debit Ratio Trends
            </h2>

            <div style={{ height: '160px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '10px 10px 0', borderBottom: '1px solid var(--line)', position: 'relative' }}>
              {[
                { month: 'Jun', credit: 60, debit: 40 },
                { month: 'Jul', credit: 70, debit: 30 },
                { month: 'Aug', credit: 80, debit: 20 },
                { month: 'Sep', credit: 65, debit: 35 },
                { month: 'Oct', credit: 75, debit: 25 }
              ].map((bar, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div style={{ width: '40px', height: '120px', position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                    <div style={{ flex: 1, height: `${bar.credit}%`, background: '#25108f', borderRadius: '2px 2px 0 0' }} />
                    <div style={{ flex: 1, height: `${bar.debit}%`, background: '#c8c0d7', borderRadius: '2px 2px 0 0' }} />
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', marginTop: '6px' }}>{bar.month}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}

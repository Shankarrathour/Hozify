import React, { useState } from 'react';
import {
  Download,
  Zap,
  Search,
  ListFilter,
  DollarSign,
  TrendingUp,
  Tags,
  Percent,
  PlusCircle,
  Calculator,
  RefreshCcw,
  Edit2
} from 'lucide-react';

const MOCK_PRICING_CATALOG = [
  { name: 'Deep Home Sanitization', category: 'Maintenance & Care', basePrice: '$120.00', gst: '$21.60', platformFee: '$10.00', finalPrice: '$151.60', status: 'ACTIVE' },
  { name: 'AC Maintenance (Premium)', category: 'Appliances', basePrice: '$45.00', gst: '$8.10', platformFee: '$5.00', finalPrice: '$58.10', status: 'ACTIVE' },
  { name: 'Express Electrical Repair', category: 'Urgent Services', basePrice: '$200.00', gst: '$36.00', platformFee: '$20.00', finalPrice: '$256.00', status: 'ACTIVE' },
  { name: 'Plumbing Deep Inspection', category: 'Maintenance & Care', basePrice: '$75.00', gst: '$13.50', platformFee: '$7.50', finalPrice: '$96.00', status: 'PENDING' }
];

const MOCK_RULES = [
  { name: 'First Time User Discount', condition: 'Bookings = 0', adjustment: '-10%', status: 'ACTIVE' },
  { name: 'Heavy Item Surcharge', condition: 'Weight > 50kg', adjustment: '+$25.00', status: 'ACTIVE' },
  { name: 'Weekend Premium', condition: 'Day = Sat/Sun', adjustment: '+15%', status: 'INACTIVE' },
  { name: 'Bulk Order Discount', condition: 'Services >= 3', adjustment: '-5%', status: 'ACTIVE' }
];

export default function PricingStrategy() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Strategy toggles
  const [strategies, setStrategies] = useState({
    dynamic: true,
    seasonal: false,
    peakHour: true,
    regionBased: true
  });

  const toggleStrategy = (key) => {
    setStrategies(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Pricing Management</h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Control service pricing, platform fees, and dynamic pricing rules.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Download size={14} style={{ marginRight: '6px' }} /> Export Prices
          </button>
          <button className="primary-action-btn font-bold" type="button" style={{ height: '36px' }}>
            <Zap size={14} style={{ marginRight: '6px' }} fill="currentColor" /> Bulk Price Update
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Pricing Rules</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>14</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Average Service Price</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>$84.50</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f0fdf4', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Revenue Impact (Rules)</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>+$12.4K</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} />
            </div>
          </div>
        </div>

        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Price Changes (This Month)</span>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '8px' }}>32</strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RefreshCcw size={18} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left Column: Pricing Catalog */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Pricing Catalog</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div className="dash-search" style={{ margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px', width: '220px' }}>
                  <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
                  <input
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: '12px', border: 'none', background: 'transparent', outline: 'none', paddingLeft: '8px', flex: 1 }}
                  />
                </div>
                <button className="secondary-action-btn font-bold" type="button" style={{ height: '34px', width: '34px', padding: 0, justifyContent: 'center' }}>
                  <ListFilter size={14} />
                </button>
              </div>
            </div>

            <div className="table-wrap">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Name</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Base Price</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>GST</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Platform Fee</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Final Price</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PRICING_CATALOG
                    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px' }}>
                          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.name}</strong>
                          <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>{row.category}</span>
                        </td>
                        <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>{row.basePrice}</td>
                        <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>{row.gst}</td>
                        <td style={{ padding: '12px', fontSize: '12px', color: 'var(--muted)' }}>{row.platformFee}</td>
                        <td style={{ padding: '12px', fontSize: '13px', color: '#25108f', fontWeight: '800' }}>{row.finalPrice}</td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '800', color: row.status === 'ACTIVE' ? '#07956f' : '#d97706' }}>
                            ● {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table></div>
            </div>
          </div>

          {/* Pricing Analytics */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0' }}>Pricing Analytics</h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)', marginBottom: '12px', display: 'block' }}>PRICE TREND (LAST 6 MONTHS)</span>
                <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  {[40, 45, 42, 60, 55, 75].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: '#3b82f6', borderRadius: '4px 4px 0 0' }} />
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)', marginBottom: '12px', display: 'block' }}>REVENUE IMPACT</span>
                <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  {[20, 30, 40, 55, 80, 90].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: '#10b981', borderRadius: '4px 4px 0 0' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing Rules & Strategy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0' }}>Pricing Strategy Panel</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#f3e8ff', color: '#9333ea', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Percent size={14} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Dynamic Pricing</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Adjust based on demand</span>
                  </div>
                </div>
                <button type="button" onClick={() => toggleStrategy('dynamic')} style={{ width: '40px', height: '24px', borderRadius: '12px', background: strategies.dynamic ? '#25108f' : '#cbd5e1', border: 'none', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <span style={{ position: 'absolute', top: '2px', left: strategies.dynamic ? '18px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#ffffff', transition: 'left 0.2s' }} />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#fef3c7', color: '#d97706', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp size={14} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Seasonal Pricing</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Festival/Holiday surges</span>
                  </div>
                </div>
                <button type="button" onClick={() => toggleStrategy('seasonal')} style={{ width: '40px', height: '24px', borderRadius: '12px', background: strategies.seasonal ? '#25108f' : '#cbd5e1', border: 'none', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <span style={{ position: 'absolute', top: '2px', left: strategies.seasonal ? '18px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#ffffff', transition: 'left 0.2s' }} />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#fee2e2', color: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp size={14} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Peak Hour Pricing</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Time-based multipliers</span>
                  </div>
                </div>
                <button type="button" onClick={() => toggleStrategy('peakHour')} style={{ width: '40px', height: '24px', borderRadius: '12px', background: strategies.peakHour ? '#25108f' : '#cbd5e1', border: 'none', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <span style={{ position: 'absolute', top: '2px', left: strategies.peakHour ? '18px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#ffffff', transition: 'left 0.2s' }} />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tags size={14} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>Region-Based Pricing</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>City-specific base rates</span>
                  </div>
                </div>
                <button type="button" onClick={() => toggleStrategy('regionBased')} style={{ width: '40px', height: '24px', borderRadius: '12px', background: strategies.regionBased ? '#25108f' : '#cbd5e1', border: 'none', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <span style={{ position: 'absolute', top: '2px', left: strategies.regionBased ? '18px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#ffffff', transition: 'left 0.2s' }} />
                </button>
              </div>
            </div>
          </div>

          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Pricing Rules</h3>
              <button className="secondary-action-btn font-bold" type="button" style={{ height: '28px', padding: '0 10px', fontSize: '11px' }}>
                <PlusCircle size={12} style={{ marginRight: '4px' }} /> Add
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {MOCK_RULES.map((rule, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i === MOCK_RULES.length - 1 ? 'none' : '1px solid var(--line)' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{rule.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Condition: {rule.condition}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: rule.adjustment.startsWith('+') ? '#ef4444' : '#10b981' }}>{rule.adjustment}</strong>
                    <span style={{ fontSize: '9px', fontWeight: '800', color: rule.status === 'ACTIVE' ? '#10b981' : 'var(--muted)' }}>{rule.status}</span>
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

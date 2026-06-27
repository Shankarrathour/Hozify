import React, { useState } from 'react';
import {
  ArrowLeft,
  Box,
  BarChart3,
  Trash2,
  AlertTriangle,
  ChevronDown,
  BookOpen,
  Download,
  Send,
  Check,
  X,
  Layers,
  Video,
  MoreVertical
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function ConsumptionTracking() {
  const { navigate } = useApp();
  const [velocityFrame, setVelocityFrame] = useState('Last 14 Days');
  const [activeView, setActiveView] = useState('Table'); // Table or Analytics
  const [showSuccessToast, setShowSuccessToast] = useState(true);

  // Table row editable state simulation
  const [rows, setRows] = useState([
    { id: 'MAT-482-CON', name: 'Concrete Mix X-400', unit: 'kg', allocated: 5000, used: 3420, wasted: 110, status: 'IN RANGE', statusBg: '#ecfdf5', statusColor: '#059669' },
    { id: 'MAT-109-STL', name: 'Steel Rebar 12mm', unit: 'units', allocated: 1200, used: 1180, wasted: 45, status: 'CRITICAL', statusBg: '#fffbeb', statusColor: '#d97706' },
    { id: 'MAT-672-PNT', name: 'Matte White Paint', unit: 'L', allocated: 450, used: 120, wasted: 4, status: 'OPTIMAL', statusBg: '#ecfdf5', statusColor: '#059669' },
    { id: 'MAT-331-WIR', name: 'Copper Wiring 2.5mm', unit: 'm', allocated: 2500, used: 2100, wasted: 18, status: 'IN RANGE', statusBg: '#ecfdf5', statusColor: '#059669' }
  ]);

  const handleInputChange = (idx, field, value) => {
    const nextVal = parseInt(value, 10) || 0;
    setRows(prev => prev.map((r, i) => i === idx ? { ...r, [field]: nextVal } : r));
  };

  const handleAddMaterial = () => {
    alert('Search and add material vertical to this project booking...');
  };

  const handleSubmit = () => {
    setShowSuccessToast(true);
    alert('Final reconciliation log submitted successfully.');
  };

  return (
    <AdminShell
      activeTab="Material Management"
      brandText="Hozify Procurement"
      brandSubText="EXECUTIVE COMMAND"
      searchPlaceholder="Search booking or material..."
      customProfileName="Admin User"
      customProfileRole="Procurement Director"
    >
      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#7a7688' }}>
          <span>Projects</span>
          <span>&gt;</span>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.materialRequests)}>Booking #BK-8842</span>
          <span>&gt;</span>
          <span style={{ fontWeight: '700', color: '#1c2536' }}>Material Reconciliation</span>
        </div>

        {/* Title and Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
              Consumption Tracking
            </h1>
            <p style={{ fontSize: '14px', color: '#7a7688', marginTop: '4px', margin: 0 }}>
              Operations log for West Wing Renovation - Phase 2
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => alert('Exporting consumption report...')}
              style={{
                background: '#ffffff',
                color: '#565365',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                padding: '10px 16px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <Download size={16} />
              <span>Export Report</span>
            </button>
            <button
              onClick={handleSubmit}
              style={{
                background: '#25108f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(37,16,143,0.15)'
              }}
              type="button"
            >
              Submit Final Log
            </button>
          </div>
        </div>

        {/* 4 KPIs Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          
          {/* KPI 1 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Total Allocated</span>
              <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>12,480 <span style={{ fontSize: '13px', color: '#7a7688', fontWeight: '500' }}>units</span></strong>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f5f3ff', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={20} />
            </div>
          </div>

          {/* KPI 2 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Used to Date</span>
              <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>8,924 <span style={{ fontSize: '13px', color: '#7a7688', fontWeight: '500' }}>units</span></strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#059669', fontWeight: '700', marginTop: '6px' }}>71.5% of allocation consumed</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 size={20} />
            </div>
          </div>

          {/* KPI 3 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Wastage Rate</span>
              <strong style={{ display: 'block', fontSize: '24px', color: '#dc2626', fontWeight: '800', marginTop: '6px' }}>3.2%</strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#dc2626', fontWeight: '700', marginTop: '6px' }}>+0.8% vs project target</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trash2 size={20} />
            </div>
          </div>

          {/* KPI 4 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Real-Time Stock</span>
              <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>2,142 <span style={{ fontSize: '13px', color: '#7a7688', fontWeight: '500' }}>units</span></strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#d97706', fontWeight: '700', marginTop: '6px' }}>Reorder required soon</span>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={20} />
            </div>
          </div>

        </div>

        {/* Consumption Log Card */}
        <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} style={{ color: '#25108f' }} />
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
                Consumption Log
              </h2>
            </div>
            
            {/* Table / Analytics toggler */}
            <div style={{ display: 'flex', background: '#f1f5f9', padding: '3px', borderRadius: '6px' }}>
              {['Table', 'Analytics'].map(view => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  style={{
                    border: 'none',
                    background: activeView === view ? '#ffffff' : 'transparent',
                    color: activeView === view ? '#1c2536' : '#7a7688',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '11.5px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: activeView === view ? '0 1px 3px rgba(0,0,0,0.06)' : 'none'
                  }}
                  type="button"
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Material ID & Description</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase', textAlign: 'center' }}>Allocated</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase', textAlign: 'center', width: '120px' }}>Used</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase', textAlign: 'center', width: '120px' }}>Wasted</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Variance</th>
                  <th style={{ padding: '12px 8px', width: '40px' }} />
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#f5f3ff', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                          <strong>{row.id.substring(4, 7)}</strong>
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '13px', color: '#1c2536' }}>{row.name}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#7a7688', marginTop: '2px' }}>{row.id}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '14px 8px', fontSize: '13px', color: '#565365', fontWeight: '600', textAlign: 'center' }}>
                      {row.allocated.toLocaleString()} {row.unit}
                    </td>
                    <td style={{ padding: '14px 8px', textAlign: 'center' }}>
                      <input
                        type="number"
                        value={row.used}
                        onChange={(e) => handleInputChange(idx, 'used', e.target.value)}
                        style={{
                          width: '90px',
                          height: '32px',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          padding: '0 8px',
                          textAlign: 'center',
                          fontSize: '13px',
                          fontWeight: '700',
                          color: '#1c2536',
                          outline: 'none'
                        }}
                      />
                    </td>
                    <td style={{ padding: '14px 8px', textAlign: 'center' }}>
                      <input
                        type="number"
                        value={row.wasted}
                        onChange={(e) => handleInputChange(idx, 'wasted', e.target.value)}
                        style={{
                          width: '90px',
                          height: '32px',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          padding: '0 8px',
                          textAlign: 'center',
                          fontSize: '13px',
                          fontWeight: '700',
                          color: '#dc2626',
                          outline: 'none'
                        }}
                      />
                    </td>
                    <td style={{ padding: '14px 8px' }}>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: row.statusBg,
                        color: row.statusColor
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 8px', textAlign: 'center' }}>
                      <button style={{ border: 'none', background: 'transparent', color: '#7a7688', cursor: 'pointer' }} type="button">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '16px' }}>
            <span 
              onClick={handleAddMaterial}
              style={{ color: '#25108f', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'inline-block' }}
            >
              + Add Material to Booking
            </span>
          </div>

        </div>

        {/* Bottom Split: Velocity Curve & Central Warehouse Feed */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          
          {/* Consumption Velocity Chart */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
                Consumption Velocity
              </h3>
              <div style={{ position: 'relative' }}>
                <select
                  value={velocityFrame}
                  onChange={(e) => setVelocityFrame(e.target.value)}
                  style={{
                    appearance: 'none',
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 28px 6px 12px',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#565365',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label="Velocity chart timeframe"
                >
                  <option value="Last 14 Days">Last 14 Days</option>
                  <option value="Last 30 Days">Last 30 Days</option>
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#565365' }} />
              </div>
            </div>

            {/* SVG area curve */}
            <div style={{ height: '160px', width: '100%', position: 'relative', marginTop: '16px' }}>
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#25108f" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#25108f" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Dotted path and circles */}
                <path d="M 0 130 Q 80 110, 150 120 T 300 70 T 420 110 T 500 80 L 500 150 L 0 150 Z" fill="url(#area-grad)" />
                <path d="M 0 130 Q 80 110, 150 120 T 300 70 T 420 110 T 500 80" fill="none" stroke="#25108f" strokeWidth="2.5" />
                
                <circle cx="150" cy="120" r="3.5" fill="#25108f" stroke="#ffffff" strokeWidth="1" />
                <circle cx="300" cy="70" r="3.5" fill="#25108f" stroke="#ffffff" strokeWidth="1" />
                <circle cx="420" cy="110" r="3.5" fill="#25108f" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Central Warehouse Live Feed */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '140px' }}>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&h=140&q=80" 
                alt="Warehouse racks feed" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#dc2626', color: '#ffffff', fontSize: '9px', fontWeight: '800', padding: '3px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Video size={10} /> LIVE FEED
              </span>
              <span style={{ position: 'absolute', top: '12px', right: '12px', color: '#ffffff', fontSize: '9px', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                CAM-WH-04
              </span>
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: '#1c2536' }}>Central Warehouse Inventory</strong>
              <p style={{ fontSize: '12px', color: '#7a7688', margin: 0, lineHeight: '1.4' }}>
                Real-time stock monitoring for seamless reconciliation across all sites.
              </p>
              <button
                onClick={() => alert('Launching Visual Stock Reconciliation camera analyzer...')}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '8px 0',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  color: '#565365',
                  cursor: 'pointer',
                  marginTop: 'auto'
                }}
                type="button"
              >
                Open Visual Reconciliation
              </button>
            </div>
          </div>

        </div>

        {/* Footer info line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#7a7688', borderTop: '1px solid var(--line)', paddingTop: '20px', marginTop: '12px', flexWrap: 'wrap', gap: '12px' }}>
          <span>© 2024 Hozify Procurement Systems. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Compliance Guidelines</span>
            <span style={{ cursor: 'pointer' }}>Waste Mitigation Policy</span>
            <span style={{ cursor: 'pointer' }}>System Status</span>
          </div>
        </div>

        {/* Success toast notification bottom right */}
        {showSuccessToast && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#ffffff',
            borderLeft: '4px solid #10b981',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            zIndex: 130,
            animation: 'fadeInRight 0.3s ease-out'
          }}>
            <style>{`
              @keyframes fadeInRight {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
            `}</style>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Check size={16} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#1c2536' }}>Reconciliation Successful</strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#7a7688', marginTop: '2px' }}>Inventory levels have been updated across all nodes.</span>
            </div>
            <button 
              onClick={() => setShowSuccessToast(false)}
              style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '4px', marginLeft: '8px' }}
              aria-label="Dismiss toast"
              type="button"
            >
              <X size={16} />
            </button>
          </div>
        )}

      </div>
    </AdminShell>
  );
}

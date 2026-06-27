import React, { useState } from 'react';
import {
  Plus,
  Filter,
  Download,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Zap,
  Truck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileText,
  ChevronDown
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function MaterialReturns() {
  const { navigate } = useApp();

  // Return ledger list matching Screen 4
  const [returns, setReturns] = useState([
    {
      id: 'RT-9021',
      vendor: 'SteelFab Inc.',
      vendorId: 'ID: 88201',
      material: 'H-Beam G-40',
      qty: 'Qty: 24 units',
      condition: 'DAMAGED',
      conditionBg: '#fef2f2',
      conditionColor: '#dc2626',
      status: 'SHIPPED',
      statusBg: '#eff6ff',
      statusColor: '#2563eb'
    },
    {
      id: 'RT-9025',
      vendor: 'Lumber Metrics',
      vendorId: 'ID: 44092',
      material: 'Cedar Planks 2×4',
      qty: 'Qty: 110 units',
      condition: 'UNUSED',
      conditionBg: '#f1f5f9',
      conditionColor: '#475569',
      status: 'IN REVIEW',
      statusBg: '#f5f3ff',
      statusColor: '#7c3aed'
    },
    {
      id: 'RT-8992',
      vendor: 'Global Circuits',
      vendorId: 'ID: 11203',
      material: 'Control Panels v3',
      qty: 'Qty: 2 units',
      condition: 'DEFECTIVE',
      conditionBg: '#fef2f2',
      conditionColor: '#dc2626',
      status: 'REFUNDED',
      statusBg: '#ecfdf5',
      statusColor: '#059669'
    },
    {
      id: 'RT-8950',
      vendor: 'PipeMaster Ltd.',
      vendorId: 'ID: 77212',
      material: 'Copper Elbows 4"',
      qty: 'Qty: 45 units',
      condition: 'UNUSED',
      conditionBg: '#f1f5f9',
      conditionColor: '#475569',
      status: 'WAITING PICKUP',
      statusBg: '#0f172a',
      statusColor: '#ffffff'
    }
  ]);

  // Form states
  const [poRef, setPoRef] = useState('');
  const [qty, setQty] = useState(1);
  const [condition, setCondition] = useState('Unused');
  const [reason, setReason] = useState('');

  const handleProcessReturn = (e) => {
    e.preventDefault();
    if (!poRef.trim() || !reason.trim()) {
      alert('Please fill out the PO Reference Number and Return Reason.');
      return;
    }

    const newReturnId = `RT-${Math.floor(1000 + Math.random() * 9000)}`;
    const conditionUpper = condition.toUpperCase();
    
    let condBg = '#f1f5f9';
    let condCol = '#475569';
    if (conditionUpper === 'DAMAGED') {
      condBg = '#fef2f2';
      condCol = '#dc2626';
    } else if (conditionUpper === 'DEFECTIVE') {
      condBg = '#fef2f2';
      condCol = '#dc2626';
    }

    const newReturnItem = {
      id: newReturnId,
      vendor: 'Generic Vendor Corp.',
      vendorId: `ID: ${Math.floor(10000 + Math.random() * 90000)}`,
      material: `Return Material (${poRef})`,
      qty: `Qty: ${qty} units`,
      condition: conditionUpper,
      conditionBg: condBg,
      conditionColor: condCol,
      status: 'INITIATED',
      statusBg: '#fef3c7',
      statusColor: '#d97706'
    };

    setReturns((prev) => [newReturnItem, ...prev]);
    alert(`Return logic initiated successfully! Logged as Return ID: ${newReturnId}`);
    
    // Reset inputs
    setPoRef('');
    setQty(1);
    setCondition('Unused');
    setReason('');
  };

  const handleLogNewReturnButton = () => {
    alert('Opening full screen Returns flow manager...');
  };

  return (
    <AdminShell
      activeTab="Material Returns"
      brandText="Hozify Procurement"
      brandSubText="EXECUTIVE COMMAND"
      searchPlaceholder="Search returns..."
      customProfileName="Admin User"
      customProfileRole="Procurement Director"
    >
      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
              Material Returns
            </h1>
            <p style={{ fontSize: '14px', color: '#7a7688', marginTop: '4px', margin: 0 }}>
              Manage unused or damaged material workflow and track refund status.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => alert('Filtering returns ledger...')}
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
              <Filter size={15} />
              <span>Filter</span>
            </button>
            <button
              onClick={handleLogNewReturnButton}
              style={{
                background: '#25108f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(37,16,143,0.15)'
              }}
              type="button"
            >
              <Plus size={15} />
              <span>Log New Return</span>
            </button>
          </div>
        </div>

        {/* 4 KPIs Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          
          {/* KPI 1 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Pending Returns</span>
            <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>14</strong>
            <span style={{ display: 'block', fontSize: '11px', color: '#dc2626', fontWeight: '700', marginTop: '4px' }}>~12% vs last month</span>
          </div>

          {/* KPI 2 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Refunds Processed</span>
            <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>$42.8k</strong>
            <span style={{ display: 'block', fontSize: '11px', color: '#059669', fontWeight: '700', marginTop: '4px' }}>~8.4% recovery rate</span>
          </div>

          {/* KPI 3 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Replacement Rate</span>
            <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>32%</strong>
            <span style={{ display: 'block', fontSize: '11px', color: '#7a7688', marginTop: '4px' }}>vs 28% last month</span>
          </div>

          {/* KPI 4 */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
            <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Avg. Return Cycle</span>
            <strong style={{ display: 'block', fontSize: '24px', color: '#1c2536', fontWeight: '800', marginTop: '6px' }}>4.2d</strong>
            <span style={{ display: 'block', fontSize: '11px', color: '#059669', fontWeight: '700', marginTop: '4px' }}>~1.5d faster fulfillment</span>
          </div>

        </div>

        {/* Mid layout split: Return table & Quick Action widgets */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          
          {/* Left Panel: Active Returns Ledger */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
                Active Returns
              </h2>
              <button
                onClick={() => alert('Downloading active returns manifest...')}
                style={{ background: 'transparent', border: 'none', color: '#7a7688', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                aria-label="Download CSV report"
                type="button"
              >
                <Download size={16} />
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '550px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Return ID</th>
                    <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Vendor</th>
                    <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Material</th>
                    <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Condition</th>
                    <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '12px 8px', width: '30px' }} />
                  </tr>
                </thead>
                <tbody>
                  {returns.map((row) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: '#25108f' }}>
                        {row.id}
                      </td>
                      <td style={{ padding: '16px 8px' }}>
                        <div>
                          <strong style={{ display: 'block', fontSize: '13px', color: '#1c2536' }}>{row.vendor}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#7a7688', marginTop: '2px' }}>{row.vendorId}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 8px' }}>
                        <div>
                          <strong style={{ display: 'block', fontSize: '13px', color: '#1c2536' }}>{row.material}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#7a7688', marginTop: '2px' }}>{row.qty}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 8px' }}>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: '800',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: row.conditionBg,
                          color: row.conditionColor
                        }}>
                          {row.condition}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px' }}>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: '800',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: row.statusBg,
                          color: row.statusColor
                        }}>
                          {row.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px' }}>
                        <button
                          onClick={() => alert(`Launching tracking detail for return ${row.id}...`)}
                          style={{ background: 'transparent', border: 'none', color: '#7a7688', cursor: 'pointer' }}
                          aria-label="View return tracking"
                          type="button"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '13px', color: '#7a7688' }}>Showing 1-4 of 14 returns</span>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Previous Page" type="button">
                  <ChevronLeft size={16} />
                </button>
                <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Next Page" type="button">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Panel: Quick Action Form & Warehouse Sync */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Quick Action Card */}
            <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={16} />
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#1c2536', margin: 0 }}>
                  Quick Action
                </h3>
              </div>

              <form onSubmit={handleProcessReturn} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="poRef" style={{ fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>PO Reference Number</label>
                  <input
                    id="poRef"
                    type="text"
                    placeholder="e.g. PO-7782"
                    value={poRef}
                    onChange={(e) => setPoRef(e.target.value)}
                    style={{
                      height: '36px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      padding: '0 12px',
                      fontSize: '13px',
                      outline: 'none',
                      color: '#1c2536'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="qty" style={{ fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Quantity</label>
                    <input
                      id="qty"
                      type="number"
                      min="1"
                      value={qty}
                      onChange={(e) => setQty(parseInt(e.target.value, 10) || 1)}
                      style={{
                        height: '36px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '0 12px',
                        fontSize: '13px',
                        outline: 'none',
                        color: '#1c2536',
                        textAlign: 'center'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="condition" style={{ fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Condition</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        id="condition"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        style={{
                          width: '100%',
                          height: '36px',
                          appearance: 'none',
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          padding: '0 28px 0 12px',
                          fontSize: '13px',
                          outline: 'none',
                          color: '#1c2536',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Unused">Unused</option>
                        <option value="Damaged">Damaged</option>
                        <option value="Defective">Defective</option>
                      </select>
                      <ChevronDown size={14} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#565365' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="reason" style={{ fontSize: '11px', fontWeight: '800', color: '#7a7688', textTransform: 'uppercase' }}>Return Reason</label>
                  <textarea
                    id="reason"
                    placeholder="Describe the reason for return..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    style={{
                      minHeight: '60px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      fontSize: '13px',
                      outline: 'none',
                      color: '#1c2536',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#25108f',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 0',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(37,16,143,0.15)',
                    marginTop: '4px'
                  }}
                >
                  Process Return
                </button>
              </form>
            </div>

            {/* Warehouse Sync Card */}
            <div className="panel" style={{ background: '#0f172a', color: '#ffffff', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <strong style={{ display: 'block', fontSize: '14.5px' }}>Warehouse Sync</strong>
              <p style={{ fontSize: '11.5px', color: '#94a3b8', margin: 0, lineHeight: '1.4' }}>
                All return logs are synchronized in real-time with central inventory and vendor portals for faster processing.
              </p>
              <span
                onClick={() => alert('Redirecting to live warehouse stock tracking dashboard...')}
                style={{ fontSize: '11.5px', color: '#38bdf8', fontWeight: '700', cursor: 'pointer', display: 'inline-block', textDecoration: 'none', marginTop: '6px' }}
              >
                View global status →
              </span>
            </div>

          </div>

        </div>

        {/* Workflow progress line */}
        <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
          <strong style={{ display: 'block', fontSize: '14px', color: '#1c2536', marginBottom: '20px' }}>Return Workflow Tracking</strong>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', position: 'relative' }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '140px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f5f3ff', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #25108f' }}>
                <CheckCircle2 size={16} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '12.5px', color: '#1c2536' }}>Initiated</strong>
                <span style={{ display: 'block', fontSize: '10px', color: '#7a7688', marginTop: '2px' }}>Oct 12, 09:00</span>
              </div>
            </div>

            <div style={{ flex: 0.5, height: '2px', background: '#25108f', minWidth: '20px' }} />

            {/* Step 2 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '140px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f5f3ff', color: '#25108f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #25108f' }}>
                <Truck size={16} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '12.5px', color: '#1c2536' }}>Shipped</strong>
                <span style={{ display: 'block', fontSize: '10px', color: '#7a7688', marginTop: '2px' }}>Oct 14, 14:30</span>
              </div>
            </div>

            <div style={{ flex: 0.5, height: '2px', background: '#cbd5e1', minWidth: '20px' }} />

            {/* Step 3 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '160px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #2563eb' }}>
                <RefreshCw size={14} className="spin" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '12.5px', color: '#2563eb' }}>Vendor Inspection</strong>
                <span style={{ display: 'block', fontSize: '10px', color: '#7a7688', marginTop: '2px' }}>In Progress</span>
              </div>
            </div>

            <div style={{ flex: 0.5, height: '2px', background: '#e2e8f0', minWidth: '20px' }} />

            {/* Step 4 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e2e8f0' }}>
                <span>4</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '12.5px', color: '#7a7688' }}>Refund Issued</strong>
                <span style={{ display: 'block', fontSize: '10px', color: '#cbd5e1', marginTop: '2px' }}>Pending...</span>
              </div>
            </div>

            <div style={{ flex: 0.5, height: '2px', background: '#e2e8f0', minWidth: '20px' }} />

            {/* Step 5 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '110px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e2e8f0' }}>
                <span>5</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '12.5px', color: '#7a7688' }}>Completed</strong>
                <span style={{ display: 'block', fontSize: '10px', color: '#cbd5e1', marginTop: '2px' }}>--</span>
              </div>
            </div>

          </div>

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .spin {
              animation: spin 3s linear infinite;
            }
          `}</style>
        </div>

      </div>
    </AdminShell>
  );
}

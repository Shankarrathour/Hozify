import React from 'react';
import { Info, Plus, Lightbulb } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import toast from 'react-hot-toast';

export default function CommissionSettings() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div className="commission-settings-page" style={{ padding: '32px 40px 60px' }}>
        
        {/* Breadcrumb & Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8' }}>Financial</span>
              <span style={{ color: '#cbd5e1' }}>›</span>
              <span style={{ color: 'var(--text)' }}>Commission Settings</span>
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>
              Global Commission Structures
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
              Configure administrative fees, vendor splits, and regional overrides across all entities.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} type="button" style={{ padding: '0 20px', height: '40px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
              Discard Changes
            </button>
            <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} type="button" style={{ padding: '0 24px', height: '40px', background: '#1e1b4b', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
              Save Structures
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Standard Entities Base Rates */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Standard Entities Base Rates</h2>
                <Info size={20} style={{ color: '#94a3b8' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ISP Commission</label>
                  <div style={{ display: 'flex', height: '44px', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <input 
                      type="number" 
                      defaultValue="12.50"
                      style={{ flex: 1, padding: '0 16px', border: 'none', fontSize: '14px', color: 'var(--text)', fontWeight: '600', outline: 'none' }}
                    />
                    <div style={{ background: '#f8fafc', padding: '0 16px', borderLeft: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', fontSize: '14px', color: 'var(--muted)', fontWeight: '600' }}>
                      %
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>BSP Service Fee</label>
                  <div style={{ display: 'flex', height: '44px', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <input 
                      type="number" 
                      defaultValue="8.00"
                      style={{ flex: 1, padding: '0 16px', border: 'none', fontSize: '14px', color: 'var(--text)', fontWeight: '600', outline: 'none' }}
                    />
                    <div style={{ background: '#f8fafc', padding: '0 16px', borderLeft: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', fontSize: '14px', color: 'var(--muted)', fontWeight: '600' }}>
                      %
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Seller Margin</label>
                  <div style={{ display: 'flex', height: '44px', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <input 
                      type="number" 
                      defaultValue="15.00"
                      style={{ flex: 1, padding: '0 16px', border: 'none', fontSize: '14px', color: 'var(--text)', fontWeight: '600', outline: 'none' }}
                    />
                    <div style={{ background: '#f8fafc', padding: '0 16px', borderLeft: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', fontSize: '14px', color: 'var(--muted)', fontWeight: '600' }}>
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Fixed Transaction Fee</h3>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Applied per successful invoice</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: '700', color: 'var(--text)' }}>
                    <span style={{ color: 'var(--muted)' }}>$</span> 0.50
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px' }}>Settlement Buffer</h3>
                    <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0 }}>Holding period for disputes</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: '700', color: 'var(--text)' }}>
                    48 <span style={{ color: 'var(--muted)', fontSize: '13px' }}>HRS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category-Level Overrides */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Category-Level Overrides</h2>
                <button onClick={(e) => { e.preventDefault(); toast.success("Action performed successfully!"); }} type="button" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', fontSize: '13px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer', padding: 0 }}>
                  <Plus size={16} /> Add Category Rule
                </button>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category Name</th>
                      <th style={{ padding: '16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ISP Rate</th>
                      <th style={{ padding: '16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>BSP Rate</th>
                      <th style={{ padding: '16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Type</th>
                      <th style={{ padding: '16px', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Enterprise Cloud</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)' }}>14.00%</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)' }}>5.00%</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ padding: '4px 8px', background: '#eff6ff', color: '#2563eb', borderRadius: '4px', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>PERCENTAGE</span>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span> Active
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Logistics & Shipping</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)' }}>$12.00</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)' }}>$4.50</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ padding: '4px 8px', background: '#fef2f2', color: '#ef4444', borderRadius: '4px', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>FIXED FEE</span>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span> Active
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '16px', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Consumer Electronics</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)' }}>9.25%</td>
                      <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)' }}>6.00%</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ padding: '4px 8px', background: '#eff6ff', color: '#2563eb', borderRadius: '4px', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>PERCENTAGE</span>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--muted)' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#94a3b8' }}></span> Draft
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table></div>
                <div style={{ padding: '16px', textAlign: 'center', borderTop: '1px solid #e2e8f0', background: '#fafafa' }}>
                  <a href="#" style={{ fontSize: '12px', fontWeight: '700', color: 'var(--muted)', textDecoration: 'none' }}>View All 42 Categories</a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Rule Configuration Summary */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px' }}>Rule Configuration Summary</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Active Overrides</span>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#1e1b4b' }}>18</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Conflict Protocol</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#1e1b4b' }}>Most Specific</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Rounding Logic</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#1e1b4b' }}>Floor (2dp)</span>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '4px', borderLeft: '4px solid #4338ca' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>Impact Analysis</h4>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.5' }}>
                    The current configuration will result in an estimated <strong style={{ color: 'var(--text)' }}>14.2%</strong> aggregate platform fee across projected Q4 volume.
                  </p>
                </div>
              </div>
            </div>

            {/* Fee Distribution Model Image */}
            <div style={{ background: '#0f172a', borderRadius: '8px', overflow: 'hidden', position: 'relative', height: '200px' }}>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Network Data Visualization" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#fff', margin: '0 0 4px' }}>Fee Distribution Model</h4>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Real-time simulation of revenue split across stakeholders.</p>
              </div>
            </div>

            {/* Best Practice Tip */}
            <div style={{ background: '#fff', border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '20px', display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0 }}>
                <Lightbulb size={20} style={{ color: '#4338ca' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)', margin: '0 0 8px' }}>Best Practice Tip</h4>
                <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.5' }}>
                  For High-Volume sellers (&gt;$500k/mo), consider implementing a tiered percentage that scales down as volume increases to incentivize growth.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}

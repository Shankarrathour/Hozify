import React from 'react';
import { 
  ShieldCheck, ArrowUpRight, Globe,
  Laptop, Smartphone, Monitor, Shield, ArrowRight
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function SessionManagement() {
  return (
    <AdminShell
      activeTab="Settings"
      customProfileName="Alex Rivera"
      customProfileRole="Admin User"
      showGridIcon={true}
    >
      <div style={{ padding: '32px 40px 60px', maxWidth: '1200px' }}>
        
        {/* Top Section: Metrics + Banner (Left) and Policy (Right) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start', marginBottom: '24px' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Top Metrics Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {/* Metric 1 */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>ACTIVE SESSIONS</span>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: '1', letterSpacing: '-1px' }}>142</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '11px', fontWeight: '800' }}>
                  <ArrowUpRight size={14} /> +12% vs last hour
                </div>
              </div>

              {/* Metric 2 */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>UNIQUE IPS</span>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: '1', letterSpacing: '-1px' }}>89</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '11px', fontWeight: '700' }}>
                  <Globe size={14} /> Global distribution
                </div>
              </div>

              {/* Metric 3 */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>SYSTEM STATUS</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px', lineHeight: '1' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }}></span>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a', letterSpacing: '-0.5px' }}>Compliant</span>
                </div>
                <div style={{ color: '#475569', fontSize: '11px', fontWeight: '600' }}>
                  Last audit: 4 mins ago
                </div>
              </div>
            </div>

            {/* Graphic Banner */}
            <div style={{ 
              background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #312e81 100%)', 
              borderRadius: '12px', 
              padding: '32px', 
              height: '180px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
            }}>
              {/* Fake UI Overlay Background */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '30px', background: 'rgba(255,255,255,0.4)', borderRadius: '8px', filter: 'blur(1px)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(30,27,75,0.9) 0%, rgba(30,27,75,0) 100%)', pointerEvents: 'none' }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', margin: '0 0 4px', opacity: 0.8, textTransform: 'uppercase' }}>Network Topology</p>
                <h2 style={{ fontSize: '22px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Real-time Traffic Analysis</h2>
              </div>
            </div>

          </div>

          {/* Right Column: Security Policy */}
          <div>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <ShieldCheck size={20} color="#0f172a" />
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Security Policy</h2>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>Idle Timeout (minutes)</label>
                <input type="text" defaultValue="30" style={{ width: '100%', height: '40px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', fontSize: '14px', color: '#0f172a', boxSizing: 'border-box', outline: 'none' }} />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>Concurrent Login Limits</label>
                <select style={{ width: '100%', height: '40px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0 12px', fontSize: '14px', color: '#0f172a', boxSizing: 'border-box', outline: 'none', background: '#fff', cursor: 'pointer', appearance: 'none' }}>
                  <option>3 Devices</option>
                  <option>5 Devices</option>
                  <option>Unlimited</option>
                </select>
                {/* Custom dropdown arrow to simulate appearance */}
                <div style={{ position: 'relative', marginTop: '-26px', right: '-90%', pointerEvents: 'none' }}>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', marginTop: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px' }}>Enforce MFA</h4>
                  <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Mandatory for all admin sessions</p>
                </div>
                <div onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '36px', height: '20px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '2px', boxSizing: 'border-box', justifyContent: 'flex-end', cursor: 'pointer' }}>
                  <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
                </div>
              </div>

              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ width: '100%', height: '44px', background: '#0f172a', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '800', color: '#fff', cursor: 'pointer' }}>
                Update Security Policy
              </button>
            </div>
          </div>

        </div>

        {/* Live Sessions Table (Full Width) */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Live Sessions</h2>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '32px', padding: '0 16px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}>
                Export Logs
              </button>
              <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ height: '32px', padding: '0 16px', background: '#dc2626', border: 'none', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>
                Revoke All
              </button>
            </div>
          </div>

          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', width: '35%' }}>USER IDENTITY</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>IP ADDRESS</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DEVICE / OS</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LAST ACTIVE</th>
                <th style={{ padding: '12px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#dbeafe', color: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>JD</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>jane.doe@hozify.com</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Regional Manager</div>
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155', fontFamily: 'monospace' }}>192.168.1.105</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155' }}>
                    <Laptop size={14} color="#64748b" /> macOS Ventura
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155' }}>Just now</td>
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '11px', fontWeight: '800', color: '#dc2626', cursor: 'pointer', padding: 0 }}>Revoke</button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#451a03', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}></div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>a.smith@hozify.com</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Compliance Officer</div>
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155', fontFamily: 'monospace' }}>45.23.11.89</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155' }}>
                    <Smartphone size={14} color="#64748b" /> iOS 17.4
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155' }}>12 mins ago</td>
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '11px', fontWeight: '800', color: '#dc2626', cursor: 'pointer', padding: 0 }}>Revoke</button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e1b4b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>RK</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>r.kumar@hozify.com</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Lead Developer</div>
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155', fontFamily: 'monospace' }}>102.45.2.14</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155' }}>
                    <Monitor size={14} color="#64748b" /> Windows 11
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155' }}>34 mins ago</td>
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '11px', fontWeight: '800', color: '#dc2626', cursor: 'pointer', padding: 0 }}>Revoke</button>
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e2e8f0', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>ML</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>m.lee@hozify.com</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Marketing Lead</div>
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155', fontFamily: 'monospace' }}>88.2.141.5</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155' }}>
                    <Monitor size={14} color="#64748b" /> Ubuntu Linux
                  </div>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#334155' }}>1 hour ago</td>
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '11px', fontWeight: '800', color: '#dc2626', cursor: 'pointer', padding: 0 }}>Revoke</button>
                </td>
              </tr>
            </tbody>
          </table></div>
          <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} style={{ background: 'none', border: 'none', fontSize: '11px', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              View all sessions <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}

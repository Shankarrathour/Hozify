import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  Globe, BarChart2, Search, ExternalLink, Download, Settings,
  CheckCircle2
} from 'lucide-react';

export default function SeoSettings() {
  const [siteTitle, setSiteTitle] = useState('Enterprise CMS | Performance Optimized Admin');
  const [metaKeywords, setMetaKeywords] = useState('cms, enterprise, dashboard, react, tailwind, performance...');
  
  return (
    <AdminShell activeTab="CMS Management" searchPlaceholder="Search resources...">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        {/* Main Grid: Left Column (7) and Right Column (5) */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '24px' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Global Meta Configuration */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Globe size={20} color="#0f172a" />
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Global Meta Configuration</h3>
                </div>
                <button style={{ padding: '8px 16px', background: '#0f172a', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer' }}>
                  Save Changes
                </button>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>SITE TITLE</label>
                <input 
                  type="text" 
                  value={siteTitle} 
                  onChange={(e) => setSiteTitle(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', outline: 'none' }}
                />
                <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginTop: '6px' }}>Recommended length: 50-60 characters for optimal display in search results.</span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>META KEYWORDS</label>
                <textarea 
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  style={{ width: '100%', minHeight: '80px', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', outline: 'none', resize: 'vertical' }}
                />
                <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginTop: '6px' }}>Comma-separated values. Focus on high-intent industry terminology.</span>
              </div>
            </div>

            {/* Crawler & Indexing Settings */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Settings size={20} color="#0f172a" />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Crawler & Indexing Settings</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>ROBOT.TXT CONTENT</label>
                  <textarea 
                    defaultValue={`User-agent: *\nDisallow: /admin/\nDisallow: /tmp/\nAllow: /\n\nSitemap:\nhttps://domain.com/sitemap.xml`}
                    style={{ width: '100%', minHeight: '160px', padding: '12px 16px', border: 'none', borderRadius: '6px', fontSize: '12px', fontFamily: 'monospace', color: '#334155', outline: 'none', resize: 'none', background: '#f8fafc' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>SITEMAP XML URL</label>
                  <div style={{ display: 'flex', marginBottom: '16px' }}>
                    <div style={{ flex: 1, padding: '12px 16px', border: '1px solid #e2e8f0', borderRight: 'none', borderRadius: '6px 0 0 6px', fontSize: '13px', color: '#334155', background: '#fff' }}>
                      https://domain.com/sitemap.xml
                    </div>
                    <button style={{ padding: '0 16px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '0 6px 6px 0', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                  
                  <div style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '6px', background: '#f8fafc' }}>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                      Last Auto-Generated: <strong style={{ color: '#0f172a' }}>2023-10-24 04:00 AM</strong>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', textDecoration: 'underline', cursor: 'pointer' }}>
                      Trigger Manual Rebuild
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Analytics Engine */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <BarChart2 size={20} color="#0f172a" />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Analytics Engine</h3>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>GOOGLE ANALYTICS ID</label>
                <input 
                  type="text" 
                  defaultValue="G-XXXXXXXXXX"
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>SEARCH CONSOLE TOKEN</label>
                <input 
                  type="password" 
                  defaultValue="••••••••••••••"
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>Status: Connected</span>
                </div>
                <CheckCircle2 size={16} color="#64748b" />
              </div>
            </div>

            {/* SEO Health Score */}
            <div style={{ background: '#0a0a0a', border: '1px solid #171717', borderRadius: '8px', padding: '32px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
              {/* Background accent lines (approximate) */}
              <div style={{ position: 'absolute', bottom: -20, right: -20, opacity: 0.1, display: 'flex', flexDirection: 'column', gap: '10px', transform: 'rotate(-45deg)' }}>
                <div style={{ width: '100px', height: '4px', background: '#fff' }} />
                <div style={{ width: '150px', height: '4px', background: '#fff' }} />
                <div style={{ width: '200px', height: '4px', background: '#fff' }} />
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '16px' }}>SEO HEALTH SCORE</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                  <h1 style={{ margin: 0, fontSize: '48px', fontWeight: '800', color: '#fff' }}>94</h1>
                  <span style={{ fontSize: '16px', color: '#a3a3a3', fontWeight: '600' }}>/100</span>
                </div>
                <p style={{ margin: '0 0 24px 0', fontSize: '13px', color: '#d4d4d4', lineHeight: '1.6' }}>
                  Your metadata is 15% more effective than last month. 3 indexing issues were automatically resolved.
                </p>
                <button style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid #404040', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}>
                  View Detailed Audit
                </button>
              </div>
            </div>

            {/* Search Preview */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>SEARCH PREVIEW</span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '18px', color: '#1a0dab', textDecoration: 'none', cursor: 'pointer', lineHeight: '1.2' }}>
                  Enterprise CMS | Performance Optimized Admin
                </span>
                <span style={{ fontSize: '14px', color: '#006621', lineHeight: '1.4' }}>
                  https://admin.enterprise.io/seo-settings
                </span>
                <span style={{ fontSize: '14px', color: '#545454', lineHeight: '1.5' }}>
                  Manage your global SEO configuration including site titles, meta keywords, sitemap XML, and Google Analytics integration...
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Change History Table */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, fontSize: '12px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              CONFIGURATION CHANGE HISTORY
            </h3>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', fontSize: '12px', fontWeight: '700', color: '#64748b', cursor: 'pointer' }}>
              <Download size={14} /> Export Logs
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <th style={{ padding: '16px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TIMESTAMP</th>
                <th style={{ padding: '16px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ADMIN</th>
                <th style={{ padding: '16px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SETTING MODIFIED</th>
                <th style={{ padding: '16px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CHANGE CONTEXT</th>
                <th style={{ padding: '16px 24px', fontSize: '10px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: 'Oct 24, 2023 14:12', admin: 'J. Doe', setting: 'Meta Keywords', context: "Added 'scalability', 'react-framework'", status: 'Updated' },
                { time: 'Oct 23, 2023 09:45', admin: 'System', setting: 'Sitemap XML', context: 'Auto-rebuild scheduled task completed', status: 'Success' },
                { time: 'Oct 21, 2023 18:22', admin: 'A. Smith', setting: 'Google Analytics', context: 'Primary property ID updated to GA4', status: 'Updated' }
              ].map((log, idx) => (
                <tr key={idx} style={{ borderBottom: idx !== 2 ? '1px solid #e2e8f0' : 'none' }}>
                  <td style={{ padding: '16px 24px', fontSize: '13px', color: '#334155' }}>{log.time}</td>
                  <td style={{ padding: '16px 24px', fontSize: '13px', color: '#0f172a', fontWeight: '600' }}>{log.admin}</td>
                  <td style={{ padding: '16px 24px', fontSize: '13px', color: '#334155' }}>{log.setting}</td>
                  <td style={{ padding: '16px 24px', fontSize: '13px', color: '#64748b' }}>{log.context}</td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <span style={{ padding: '4px 8px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '10px', fontWeight: '700', color: '#475569' }}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </AdminShell>
  );
}

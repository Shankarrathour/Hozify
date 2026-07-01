import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  Bold, Italic, List as ListIcon, Link as LinkIcon,
  ChevronDown, ShieldCheck, Cookie, RefreshCw
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeLang, setActiveLang] = useState('English');
  const [docTitle, setDocTitle] = useState('Global Privacy & Data Governance Policy');
  const [effectiveDate, setEffectiveDate] = useState('11/24/2023');
  const [openDropdown, setOpenDropdown] = useState(null);

  const [toggles, setToggles] = useState({
    publicVisibility: true,
    versionHistory: true,
    autoArchive: false,
    analyticsCookies: true,
    marketingCookies: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    pii: true,
    financial: true,
    biometric: false,
    erasure: true,
    portability: true,
    optOut: true,
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckbox = (key) => {
    setCheckboxes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const Toggle = ({ checked, onChange }) => (
    <div 
      onClick={onChange}
      style={{
        width: '40px', height: '22px', borderRadius: '11px',
        background: checked ? '#312e81' : '#cbd5e1',
        position: 'relative', cursor: 'pointer',
        transition: 'background 0.2s'
      }}
    >
      <div style={{
        width: '18px', height: '18px', borderRadius: '50%',
        background: '#fff', position: 'absolute', top: '2px',
        left: checked ? '20px' : '2px',
        transition: 'left 0.2s',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }} />
    </div>
  );

  const CustomCheckbox = ({ checked, onChange, label }) => (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <div style={{
        width: '16px', height: '16px', borderRadius: '4px',
        background: checked ? '#0f172a' : '#fff',
        border: checked ? '1px solid #0f172a' : '1px solid #cbd5e1',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {checked && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      {label && <span style={{ fontSize: '13px', color: '#334155' }}>{label}</span>}
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
    </label>
  );

  const RightCard = ({ title, desc, checked, onChange }) => (
    <div style={{ 
      border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', 
      background: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>{title}</h4>
        <CustomCheckbox checked={checked} onChange={onChange} />
      </div>
      <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}>{desc}</p>
    </div>
  );

  return (
    <AdminShell activeTab="CMS Management" searchPlaceholder="Search resources...">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        {/* Top Row */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          
          {/* Document Metadata */}
          <div style={{ flex: 2, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Document Metadata</h2>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Global configurations for the privacy legal framework.</p>
              </div>
              <div style={{ display: 'flex', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                {['English', 'Spanish', 'French'].map(lang => (
                  <button 
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    style={{ 
                      padding: '6px 12px', fontSize: '11px', fontWeight: '600', border: 'none', cursor: 'pointer',
                      background: activeLang === lang ? '#312e81' : '#fff',
                      color: activeLang === lang ? '#fff' : '#64748b',
                      borderRight: lang !== 'French' ? '1px solid #e2e8f0' : 'none'
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', background: '#e2e8f0', marginBottom: '24px' }} />

            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flex: 2 }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Document Title</label>
                <input 
                  type="text" value={docTitle} onChange={e => setDocTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', outline: 'none' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Effective Date</label>
                <input 
                  type="text" value={effectiveDate} onChange={e => setEffectiveDate(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', outline: 'none' }}
                />
              </div>
            </div>
          </div>

          {/* Quick Toggles */}
          <div style={{ flex: 1, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
            <h2 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Quick Toggles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>Public Visibility</span>
                <Toggle checked={toggles.publicVisibility} onChange={() => handleToggle('publicVisibility')} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>Version History</span>
                <Toggle checked={toggles.versionHistory} onChange={() => handleToggle('versionHistory')} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>Auto-Archive</span>
                <Toggle checked={toggles.autoArchive} onChange={() => handleToggle('autoArchive')} />
              </div>
            </div>
          </div>

        </div>

        {/* Section 1: Data Collection Policy */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <RefreshCw size={20} color="#0f172a" />
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Data Collection Policy</h3>
            </div>
            <div style={{ position: 'relative' }}>
              <div 
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'lastEdited1' ? null : 'lastEdited1'); }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                LAST EDITED: 2 HOURS AGO <ChevronDown size={14} />
              </div>
              {openDropdown === 'lastEdited1' && (
                <div style={{ position: 'absolute', right: 0, top: '24px', width: '130px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '4px', zIndex: 10, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                  <button onClick={() => { setOpenDropdown(null); alert("View History"); }} style={{ width: '100%', padding: '6px 12px', textAlign: 'left', background: 'transparent', border: 'none', fontSize: '12px', cursor: 'pointer', color: '#0f172a' }}>View History</button>
                  <button onClick={() => { setOpenDropdown(null); alert("Restore Version"); }} style={{ width: '100%', padding: '6px 12px', textAlign: 'left', background: 'transparent', border: 'none', fontSize: '12px', cursor: 'pointer', color: '#0f172a' }}>Restore Version</button>
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
            <CustomCheckbox label="Personal Identifiable Information (PII)" checked={checkboxes.pii} onChange={() => handleCheckbox('pii')} />
            <CustomCheckbox label="Financial Data" checked={checkboxes.financial} onChange={() => handleCheckbox('financial')} />
            <CustomCheckbox label="Biometric Data" checked={checkboxes.biometric} onChange={() => handleCheckbox('biometric')} />
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '12px', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
              <Bold size={16} color="#475569" style={{ cursor: 'pointer' }} />
              <Italic size={16} color="#475569" style={{ cursor: 'pointer' }} />
              <ListIcon size={16} color="#475569" style={{ cursor: 'pointer' }} />
              <LinkIcon size={16} color="#475569" style={{ cursor: 'pointer' }} />
            </div>
            <textarea 
              style={{ width: '100%', minHeight: '120px', padding: '16px', border: 'none', outline: 'none', fontSize: '13px', color: '#334155', lineHeight: '1.6', resize: 'vertical' }}
              defaultValue="We collect data to provide better services to all our users. This includes information you provide us like your name, email address, and telephone number, as well as data we collect automatically through your interactions with our platform including IP address and browser type."
            />
          </div>
        </div>

        {/* Section 2: User Rights (GDPR/CCPA) */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={20} color="#0f172a" />
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>User Rights (GDPR/CCPA)</h3>
            </div>
            <div style={{ position: 'relative' }}>
              <div 
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'lastEdited2' ? null : 'lastEdited2'); }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                LAST EDITED: 1 DAY AGO <ChevronDown size={14} />
              </div>
              {openDropdown === 'lastEdited2' && (
                <div style={{ position: 'absolute', right: 0, top: '24px', width: '130px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '4px', zIndex: 10, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                  <button onClick={() => { setOpenDropdown(null); alert("View History"); }} style={{ width: '100%', padding: '6px 12px', textAlign: 'left', background: 'transparent', border: 'none', fontSize: '12px', cursor: 'pointer', color: '#0f172a' }}>View History</button>
                  <button onClick={() => { setOpenDropdown(null); alert("Restore Version"); }} style={{ width: '100%', padding: '6px 12px', textAlign: 'left', background: 'transparent', border: 'none', fontSize: '12px', cursor: 'pointer', color: '#0f172a' }}>Restore Version</button>
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <RightCard 
              title="Right to Erasure" 
              desc="Allows users to request total deletion of their records." 
              checked={checkboxes.erasure} onChange={() => handleCheckbox('erasure')} 
            />
            <RightCard 
              title="Right to Portability" 
              desc="Export data in machine-readable JSON format." 
              checked={checkboxes.portability} onChange={() => handleCheckbox('portability')} 
            />
            <RightCard 
              title="Opt-out Sales" 
              desc="Required for California CCPA compliance." 
              checked={checkboxes.optOut} onChange={() => handleCheckbox('optOut')} 
            />
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '12px', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
              <Bold size={16} color="#475569" style={{ cursor: 'pointer' }} />
              <Italic size={16} color="#475569" style={{ cursor: 'pointer' }} />
              <ListIcon size={16} color="#475569" style={{ cursor: 'pointer' }} />
            </div>
            <textarea 
              style={{ width: '100%', minHeight: '100px', padding: '16px', border: 'none', outline: 'none', fontSize: '13px', color: '#334155', lineHeight: '1.6', resize: 'vertical' }}
              defaultValue="Users have the right to access, rectify, or delete their personal data. Our compliance team responds to all data subject requests within 30 days. You may exercise these rights through your profile settings or by contacting our Data Protection Officer."
            />
          </div>
        </div>

        {/* Section 3: Cookie Policy & Consent */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Cookie size={20} color="#0f172a" />
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Cookie Policy & Consent</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            {/* Left Column: Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Essential Cookies</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Required for system login and security.</p>
                </div>
                <div style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '800', color: '#0f172a' }}>
                  LOCKED ON
                </div>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Analytics Cookies</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Google Analytics and internal tracking.</p>
                </div>
                <Toggle checked={toggles.analyticsCookies} onChange={() => handleToggle('analyticsCookies')} />
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Marketing Cookies</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Ad personalization and re-targeting.</p>
                </div>
                <Toggle checked={toggles.marketingCookies} onChange={() => handleToggle('marketingCookies')} />
              </div>

            </div>

            {/* Right Column: Banner Content */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Cookie Consent Banner Content</label>
              <textarea 
                style={{ width: '100%', flex: 1, padding: '16px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', color: '#334155', lineHeight: '1.6', outline: 'none', resize: 'none', background: '#f8fafc' }}
                defaultValue="We use cookies to enhance your experience. By clicking 'Accept All', you consent to our use of cookies for analytics and marketing purposes."
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Auto-resets on policy update</span>
                <span onClick={() => alert("Previewing Cookie Banner...")} style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', cursor: 'pointer', textDecoration: 'underline' }}>Preview Banner</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px' }}>
          <button onClick={() => alert('Draft discarded successfully!')} style={{ padding: '10px 24px', background: '#fff', border: '1px solid #e2e8f0', color: '#475569', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
            Discard Draft
          </button>
          <button onClick={() => alert('Privacy policy saved as draft!')} style={{ padding: '10px 24px', background: '#fff', border: '1px solid #312e81', color: '#312e81', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
            Save as Draft
          </button>
          <button onClick={() => alert('Privacy policy scheduled for release!')} style={{ padding: '10px 24px', background: '#1e1b4b', border: 'none', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
            Schedule for Release
          </button>
        </div>

      </div>
    </AdminShell>
  );
}

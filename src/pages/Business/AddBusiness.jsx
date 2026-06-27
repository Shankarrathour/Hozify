import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import {
  Shield,
  HelpCircle,
  ArrowRight,
  Info
} from 'lucide-react';

export default function AddBusiness() {
  const { navigate } = useApp();
  const [legalName, setLegalName] = useState('');
  const [primaryCategory, setPrimaryCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [entityType, setEntityType] = useState('LLC');
  const [taxId, setTaxId] = useState('');
  const [description, setDescription] = useState('');

  const steps = [
    { num: 1, title: 'Business Info', desc: 'Core identification', active: true, done: false },
    { num: 2, title: 'Owner Info', desc: 'Contact & ownership', active: false, done: false },
    { num: 3, title: 'Address', desc: 'Physical location', active: false, done: false },
    { num: 4, title: 'Documents', desc: 'Upload legal papers', active: false, done: false },
    { num: 5, title: 'Review', desc: 'Final confirmation', active: false, done: false }
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (!legalName || !taxId) {
      alert('Please fill out the Legal Name and Registration / Tax ID.');
      return;
    }
    alert('Progressing to Step 2: Owner Info...');
    navigate(ROUTES.businessApproval);
  };

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab="Compliance" />}
      searchPlaceholder="Search registry..."
    >
      <div className="add-business-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Main Content Layout (Sidebar steps indicator + form) */}
        <div className="fraud-top-grid" style={{ gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left: Step progress tracker sidebar */}
          <div className="panel" style={{ flex: 0.7, padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px' }}>Registration Progress</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {steps.map((step) => (
                <div key={step.num} style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: step.active ? 1 : 0.5 }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: step.active ? '#3b82f6' : '#e2e8f0',
                    color: step.active ? '#fff' : 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: '800'
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '12px', color: step.active ? '#3b82f6' : 'var(--text)' }}>{step.title}</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)' }}>{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Main Form Panel */}
          <div className="panel" style={{ flex: 1.8, display: 'flex', flexDirection: 'column', minHeight: '520px', overflow: 'hidden' }}>
            <form onSubmit={handleNext} style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Step 1: Business Information</h2>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>Provide the official registration details for the new business entity in the Nexus network.</p>
              </div>

              {/* Form inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Business Legal Name */}
                <div>
                  <label htmlFor="legal-name" style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>Business Legal Name</label>
                  <input
                    id="legal-name"
                    type="text"
                    style={{ width: '100%', height: '40px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '13px', outline: 'none' }}
                    placeholder="e.g. Acme Corp Int"
                    value={legalName}
                    onChange={(e) => setLegalName(e.target.value)}
                  />
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '4px' }}>Must match the name on the official incorporation certificate.</span>
                </div>

                {/* Categories Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="primary-category" style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>Primary Category</label>
                    <select
                      id="primary-category"
                      style={{ width: '100%', height: '40px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '13px', color: 'var(--text)', fontWeight: '600', outline: 'none', background: '#fff' }}
                      value={primaryCategory}
                      onChange={(e) => setPrimaryCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="Retail">Retail</option>
                      <option value="Logistics">Logistics</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="sub-category" style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>Sub Category</label>
                    <select
                      id="sub-category"
                      style={{ width: '100%', height: '40px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '13px', color: 'var(--text)', fontWeight: '600', outline: 'none', background: '#fff' }}
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                    >
                      <option value="">Select Sub Category</option>
                      <option value="Tech">Technology & AI</option>
                      <option value="Furniture">Furniture / Retail</option>
                      <option value="Transport">Transport</option>
                    </select>
                  </div>
                </div>

                {/* Entity Type & Tax ID */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>Entity Type</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <label style={{ flex: 1, height: '40px', border: '1px solid var(--line)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', fontSize: '13px', cursor: 'pointer', background: entityType === 'LLC' ? '#eff6ff' : '#fff', border: entityType === 'LLC' ? '1px solid #3b82f6' : '1px solid var(--line)' }}>
                        <input
                          type="radio"
                          name="entity-type"
                          value="LLC"
                          checked={entityType === 'LLC'}
                          onChange={() => setEntityType('LLC')}
                          style={{ accentColor: '#3b82f6' }}
                        />
                        LLC
                      </label>
                      <label style={{ flex: 1, height: '40px', border: '1px solid var(--line)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', fontSize: '13px', cursor: 'pointer', background: entityType === 'Corporation' ? '#eff6ff' : '#fff', border: entityType === 'Corporation' ? '1px solid #3b82f6' : '1px solid var(--line)' }}>
                        <input
                          type="radio"
                          name="entity-type"
                          value="Corporation"
                          checked={entityType === 'Corporation'}
                          onChange={() => setEntityType('Corporation')}
                          style={{ accentColor: '#3b82f6' }}
                        />
                        Corporation
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tax-id" style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>Registration / Tax ID</label>
                    <input
                      id="tax-id"
                      type="text"
                      style={{ width: '100%', height: '40px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '13px', outline: 'none' }}
                      placeholder="XX-XXXXXXXXX"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                    />
                  </div>
                </div>

                {/* Business Description */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label htmlFor="description" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)' }}>Business Description</label>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{description.length} / 500</span>
                  </div>
                  <textarea
                    id="description"
                    style={{ width: '100%', height: '90px', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px', fontSize: '13px', outline: 'none', resize: 'none' }}
                    placeholder="Briefly describe the business operations, core services, and mission..."
                    maxLength={500}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '4px' }}>Minimum 50 words recommended for verification.</span>
                </div>

                {/* Blue Info Box Warning */}
                <div style={{ display: 'flex', gap: '10px', background: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '12px 14px', borderRadius: '4px' }}>
                  <Info size={16} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '11px', color: '#1e40af', fontWeight: '700', lineHeight: '1.4' }}>
                    <strong>Verification Protocol:</strong> Once submitted, these details will be cross-referenced with regional regulatory databases. Ensure the "Legal Name" exactly matches government records to avoid delays.
                  </span>
                </div>

              </div>

            </form>

            {/* Bottom Form Actions (Footer) */}
            <div style={{ borderTop: '1px solid var(--line)', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <button
                style={{ border: 'none', background: 'transparent', color: 'var(--muted)', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                onClick={() => navigate(ROUTES.businessApproval)}
                type="button"
              >
                Cancel
              </button>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  style={{ border: 'none', background: '#e2e8f0', color: 'var(--muted)', fontSize: '13px', fontWeight: '700', height: '36px', padding: '0 16px', borderRadius: '6px', cursor: 'default' }}
                  disabled
                  type="button"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  style={{ border: 'none', background: '#3b82f6', color: '#fff', fontSize: '13px', fontWeight: '700', height: '36px', padding: '0 16px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                  type="button"
                >
                  Next Step <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Row Stat Cards (Image 2) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1.6fr', gap: '20px', marginTop: '10px' }}>
          
          {/* Compliance */}
          <div className="panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Shield size={18} />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Compliance</span>
              <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)', marginTop: '4px' }}>Fast-Track Status</strong>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.4' }}>
                Businesses registered in Tier 1 regions are eligible for 24-hour express verification once all documents are uploaded.
              </span>
            </div>
          </div>

          {/* Need Help */}
          <div className="panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <HelpCircle size={18} />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Need Help?</span>
              <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)', marginTop: '4px' }}>Documentation Guide</strong>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.4' }}>
                View our comprehensive list of required documents per entity type to prepare for Step 4 of the registration process.
              </span>
            </div>
          </div>

          {/* Progress Overview (Dark) */}
          <div className="panel" style={{ padding: '20px', background: '#0b1329', color: '#fff', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
            <div>
              <strong style={{ display: 'block', fontSize: '13px' }}>Progress Overview</strong>
              <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                You are 20% through the setup process. Progress is automatically saved.
              </span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
              <div style={{ width: '20%', height: '100%', background: '#3b82f6' }} />
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}

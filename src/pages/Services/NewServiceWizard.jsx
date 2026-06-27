import React, { useState } from 'react';
import {
  ArrowLeft,
  Lightbulb,
  History,
  ArrowRight
} from 'lucide-react';

export default function NewServiceWizard({ onClose }) {
  const [activeStep, setActiveStep] = useState(1);
  const [serviceName, setServiceName] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [includePortal, setIncludePortal] = useState(true);

  const steps = [
    { id: 1, label: 'BASIC DETAILS' },
    { id: 2, label: 'PRICING' },
    { id: 3, label: 'RESOURCES' },
    { id: 4, label: 'WORKFLOW' },
    { id: 5, label: 'REVIEW' }
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    } else {
      alert('New Service Catalog entry has been registered successfully!');
      onClose();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
      
      {/* Wizard Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onClose}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--text)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          type="button"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
          New Service Wizard
        </h1>
      </div>

      {/* Progress tracker checkpoint indicators */}
      <div style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Progress bar background line */}
          <div style={{ position: 'absolute', top: '16px', left: '0', right: '0', height: '2px', background: '#e2e8f0', zIndex: 0 }} />
          
          {/* Filled active progress bar line */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '0',
              width: `${((activeStep - 1) / 4) * 100}%`,
              height: '2px',
              background: '#25108f',
              transition: 'width 0.3s ease',
              zIndex: 0
            }}
          />

          {steps.map((st) => (
            <div
              key={st.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                zIndex: 1,
                cursor: st.id < activeStep ? 'pointer' : 'default'
              }}
              onClick={() => {
                if (st.id < activeStep) setActiveStep(st.id);
              }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: activeStep === st.id ? '#25108f' : st.id < activeStep ? '#e0e7ff' : '#ffffff',
                  color: activeStep === st.id ? '#ffffff' : st.id < activeStep ? '#25108f' : 'var(--muted)',
                  border: activeStep === st.id ? 'none' : '2px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: '800',
                  transition: 'all 0.3s'
                }}
              >
                {st.id}
              </span>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: '800',
                  color: activeStep === st.id ? '#25108f' : 'var(--muted)',
                  letterSpacing: '0.5px'
                }}
              >
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Step Panel */}
      <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '0', overflow: 'hidden' }}>
        
        {/* Step Intro Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid #f1f5f9' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Step {activeStep}: {steps.find((s) => s.id === activeStep)?.label}
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
            {activeStep === 1
              ? 'Define the core identity of the new service catalog entry.'
              : `Configure details for step ${activeStep} settings.`}
          </p>
        </div>

        {/* Form area */}
        <form onSubmit={handleNext} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {activeStep === 1 ? (
            <>
              {/* Service Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="wizard-service-name" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  Service Name
                </label>
                <input
                  type="text"
                  id="wizard-service-name"
                  placeholder="e.g. Premium Facility Maintenance"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  style={{
                    height: '38px',
                    border: '1px solid var(--line)',
                    padding: '0 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '700',
                    outline: 'none',
                    width: '100%',
                    maxWidth: '500px'
                  }}
                  required
                />
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                  The name visible to clients and internal dispatchers.
                </span>
              </div>

              {/* Category & Sub-Category row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '500px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="wizard-category" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    Category
                  </label>
                  <select
                    id="wizard-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      height: '38px',
                      border: '1px solid var(--line)',
                      padding: '0 10px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '700',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="facilities">Engineering & Facilities</option>
                    <option value="it">IT & Cybersecurity</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="wizard-sub-category" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    Sub-Category
                  </label>
                  <select
                    id="wizard-sub-category"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    style={{
                      height: '38px',
                      border: '1px solid var(--line)',
                      padding: '0 10px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '700',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                    required
                  >
                    <option value="">Select Sub-Category</option>
                    <option value="hvac">HVAC Systems</option>
                    <option value="electrical">Electrical Maintenance</option>
                    <option value="networking">Enterprise Infrastructure</option>
                    <option value="strategy">Operational Audit</option>
                  </select>
                </div>
              </div>

              {/* Description text area */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="wizard-desc" style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  Description
                </label>
                <textarea
                  id="wizard-desc"
                  placeholder="Provide a detailed overview of what this service entails, including standard SLAs and deliverables."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    height: '100px',
                    border: '1px solid var(--line)',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '700',
                    outline: 'none',
                    resize: 'none',
                    width: '100%',
                    maxWidth: '800px'
                  }}
                  required
                />
              </div>

              {/* Public Client Portal Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0' }}>
                <button
                  type="button"
                  onClick={() => setIncludePortal(!includePortal)}
                  style={{
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
                    background: includePortal ? '#25108f' : '#cbd5e1',
                    border: 'none',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  aria-label="Toggle include in public portal"
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: includePortal ? '22px' : '2px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      transition: 'left 0.2s'
                    }}
                  />
                </button>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                  Include in public client portal?
                </span>
              </div>
            </>
          ) : (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '800' }}>
                Step {activeStep}: {steps.find((s) => s.id === activeStep)?.label} Config
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                Configure pricing parameters, operational resource assignments, workflow approval triggers, and review settings.
              </p>
            </div>
          )}

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '20px', marginTop: '20px' }}>
            <button
              onClick={onClose}
              type="button"
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--muted)',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                letterSpacing: '0.5px'
              }}
            >
              CANCEL
            </button>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              {activeStep > 1 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  type="button"
                  style={{
                    border: '1px solid var(--line)',
                    background: '#ffffff',
                    color: 'var(--muted)',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px'
                  }}
                >
                  Back
                </button>
              )}
              
              <button
                type="submit"
                style={{
                  height: '38px',
                  padding: '0 20px',
                  background: '#25108f',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{activeStep === 5 ? 'Finish' : 'NEXT STEP'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Tip & Status cards bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', mdGridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Pro Tip Card */}
        <div style={{ display: 'flex', gap: '12px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '8px', background: '#dbeafe', color: '#1e40af' }}>
            <Lightbulb size={18} fill="currentColor" stroke="none" />
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '13px', color: '#1e3a8a' }}>Pro Tip</strong>
            <p style={{ fontSize: '11px', color: '#1e40af', marginTop: '2px', margin: 0, lineHeight: '1.4' }}>
              Using a clear, outcome-oriented name increases service adoption rate by up to 40%.
            </p>
          </div>
        </div>

        {/* Draft Saved Card */}
        <div style={{ display: 'flex', gap: '12px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '8px', background: '#dbeafe', color: '#1e40af' }}>
            <History size={18} />
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '13px', color: '#1e3a8a' }}>Draft Saved</strong>
            <p style={{ fontSize: '11px', color: '#1e40af', marginTop: '2px', margin: 0, lineHeight: '1.4' }}>
              Autosaved 2 minutes ago. You can resume this wizard at any time from the Catalog.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

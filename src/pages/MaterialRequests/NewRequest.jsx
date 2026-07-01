import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Check, 
  Clock, 
  AlertTriangle,
  ArrowRight,
  Calendar
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { useToast } from '../../components/common/ToastNotification';

export default function NewMaterialRequest() {
  const { navigate } = useApp();
  const [bookingRef, setBookingRef] = useState('');
  const [department, setDepartment] = useState('Infrastructure & Civil');
  const [currentStep, setCurrentStep] = useState(1);
  const { addToast } = useToast();

  const handleCancel = () => {
    navigate(ROUTES.materialRequests);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      addToast('Material Request Submitted Successfully!', 'success');
      setTimeout(() => {
        navigate(ROUTES.materialRequests);
      }, 1500);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  return (
    <AdminShell
      activeTab="Material Requests"
      brandText="Hozify Procurement"
      brandSubText="EXECUTIVE COMMAND"
      searchPlaceholder="Search orders, materials, or suppliers..."
      customProfileName="Admin Portal"
      customProfileRole="Procurement Lead"
      customProfileAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    >
      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Page Header */}
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            New Material Request
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
            Streamline your procurement process by creating a structured material requisition.
          </p>
        </div>

        {/* Stepper Card */}
        <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', flexWrap: 'wrap', gap: '24px' }}>
            
            {[1, 2, 3, 4].map((step, index) => {
              const labels = ['Booking Info', 'Materials', 'Budgeting', 'Review'];
              const isActive = currentStep >= step;
              return (
                <React.Fragment key={step}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isActive ? '#1d1b84' : '#e2e8f0', color: isActive ? '#ffffff' : '#7a7688', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>
                      {isActive && currentStep > step ? <Check size={16} /> : step}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: isActive ? '800' : '700', color: isActive ? '#1d1b84' : '#7a7688' }}>{labels[index]}</span>
                  </div>
                  {index < 3 && <div style={{ flex: 1, height: '2px', background: isActive && currentStep > step ? '#1d1b84' : '#eee9f6', minWidth: '40px', margin: '0 8px' }} />}
                </React.Fragment>
              );
            })}

          </div>
        </div>

        {/* Dynamic Content Area */}
        {currentStep === 1 && (
          <>
            {/* Select Associated Booking Card */}
            <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Select Associated Booking
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {/* Search Booking Reference */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                Search Booking Reference
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  value={bookingRef}
                  onChange={(e) => setBookingRef(e.target.value)}
                  placeholder="e.g. BOK-2023-0045"
                  style={{
                    width: '100%',
                    height: '38px',
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '0 38px 0 12px',
                    fontSize: '13px',
                    color: 'var(--text)',
                    outline: 'none'
                  }}
                />
                <Search size={16} style={{ position: 'absolute', right: '12px', color: '#7a7688' }} />
              </div>
            </div>

            {/* Department */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                Department
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  style={{
                    width: '100%',
                    height: '38px',
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '0 12px',
                    fontSize: '13px',
                    color: 'var(--text)',
                    appearance: 'none',
                    outline: 'none',
                    fontWeight: '600'
                  }}
                  aria-label="Select department"
                >
                  <option value="Infrastructure & Civil">Infrastructure & Civil</option>
                  <option value="Maintenance & Ops">Maintenance & Ops</option>
                  <option value="Logistics & Fleet">Logistics & Fleet</option>
                </select>
                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#7a7688' }}>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Selected Associated Booking Item */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '16px', 
              border: '2px solid #1d1b84', 
              borderRadius: '8px', 
              padding: '16px',
              position: 'relative',
              background: '#fcfaff',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {/* Checked Indicator badge top right */}
            <div style={{ 
              position: 'absolute', 
              top: '16px', 
              right: '16px', 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              background: '#1d1b84', 
              color: '#ffffff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}>
              <Check size={12} />
            </div>

            {/* Thumbnail Image */}
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80" 
              alt="Terminal Expansion Construction Site" 
              style={{ width: '80px', height: '80px', borderRadius: '6px', objectFit: 'cover' }}
            />

            {/* Info details */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <span style={{ 
                fontSize: '10px', 
                fontWeight: '800', 
                padding: '3px 8px', 
                borderRadius: '4px', 
                background: '#e0dcfc', 
                color: '#1d1b84',
                display: 'inline-block',
                marginBottom: '6px'
              }}>
                BOK-2023-089
              </span>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--text)', fontWeight: '800' }}>
                North Ridge Terminal expansion
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '4px', fontSize: '12px', color: 'var(--muted)' }}>
                <span>Location: Sector 4-B, Industrial Hub</span>
                <span>Manager: David Chen (Infrastructure Lead)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Timeline & Priority Level Card Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          {/* Project Timeline Card */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PROJECT TIMELINE
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)' }}>Start Date</span>
                  <strong style={{ display: 'block', fontWeight: '700', color: 'var(--text)', marginTop: '2px' }}>Oct 12, 2023</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)' }}>End Date</span>
                  <strong style={{ display: 'block', fontWeight: '700', color: 'var(--text)', marginTop: '2px' }}>Mar 30, 2024</strong>
                </div>
              </div>

              {/* Progress Slider representation */}
              <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', height: '4px', background: '#eee9f6', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '42%', width: '12px', height: '12px', borderRadius: '50%', background: '#1d1b84', border: '2px solid #ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
              </div>
            </div>
          </div>

          {/* Priority Level Card */}
          <div className="panel" style={{ background: '#1d1b84', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '124px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PRIORITY LEVEL
            </span>
            <div>
              <strong style={{ display: 'block', fontSize: '22px', fontWeight: '800', margin: '4px 0' }}>
                High Criticality
              </strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '6px' }}>
                <Clock size={14} />
                <span>SLA: 24h Approval</span>
              </div>
            </div>
          </div>
          </div>
          </>
        )}

        {currentStep === 2 && (
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Step 2: Material Specifications</h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Please specify the required materials, quantities, and supplier details.</p>
            <div style={{ border: '1px dashed var(--line)', padding: '40px', textAlign: 'center', borderRadius: '8px' }}>
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>[ Mock Interface for Material Entry ]</span>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Step 3: Budgeting & Approvals</h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Allocate budgets and assign respective approvers for this request.</p>
            <div style={{ border: '1px dashed var(--line)', padding: '40px', textAlign: 'center', borderRadius: '8px' }}>
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>[ Mock Interface for Budgeting Allocation ]</span>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Step 4: Final Review</h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review all details before finalizing and submitting the material request.</p>
            <div style={{ border: '1px dashed var(--line)', padding: '40px', textAlign: 'center', borderRadius: '8px' }}>
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>[ Mock Interface for Request Summary ]</span>
            </div>
          </div>
        )}

        {/* Action Buttons Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', borderBottom: '1px solid var(--line)', paddingBottom: '24px' }}>
          <button 
            onClick={handleCancel}
            style={{ background: 'transparent', border: 'none', color: '#1d1b84', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}
            type="button"
          >
            Cancel Request
          </button>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            {currentStep > 1 && (
              <button
                onClick={handlePrevStep}
                style={{
                  background: '#ffffff',
                  color: 'var(--text)',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
                type="button"
              >
                Previous Step
              </button>
            )}
            
            {currentStep < 4 && (
              <button
                onClick={() => addToast('Draft saved successfully.', 'info')}
                style={{
                  background: '#ffffff',
                  color: 'var(--text)',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
                type="button"
              >
                Save Draft
              </button>
            )}

            <button
              onClick={handleNextStep}
              style={{
                background: '#1d1b84',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 20px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <span>{currentStep === 4 ? 'Submit Request' : 'Next Step'}</span>
              {currentStep < 4 && <ArrowRight size={15} />}
              {currentStep === 4 && <Check size={15} />}
            </button>
          </div>
        </div>

        {/* Global Status Overview Section */}
        <div>
          <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
            GLOBAL STATUS OVERVIEW
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            
            {/* KPI 1 */}
            <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Total Active Requests
              </span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '800', marginTop: '6px' }}>
                42
              </strong>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#1d1b84', marginTop: '6px' }}>
                ~ 12% increase vs LY
              </span>
            </div>

            {/* KPI 2 */}
            <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px' }}>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Pending Approval
              </span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '800', marginTop: '6px' }}>
                18
              </strong>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#1d1b84', marginTop: '6px' }}>
                Avg 4.2h wait
              </span>
            </div>

            {/* KPI 3 */}
            <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Budget Utilization
                </span>
                <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '800', marginTop: '6px' }}>
                  68%
                </strong>
              </div>
              <div style={{ height: '4px', background: '#eee9f6', borderRadius: '2px', overflow: 'hidden', marginTop: '10px' }}>
                <div style={{ width: '68%', height: '100%', background: '#1d1b84', borderRadius: '2px' }} />
              </div>
            </div>

            {/* KPI 4 */}
            <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Critical Shortfalls
              </span>
              <strong style={{ display: 'block', fontSize: '28px', color: '#dc2626', fontWeight: '800' }}>
                3
              </strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#dc2626', fontWeight: '700' }}>
                <AlertTriangle size={14} />
                <span>Needs Attention</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AdminShell>
  );
}

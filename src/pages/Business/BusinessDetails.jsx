import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import { useToast } from '../../components/common/ToastNotification';
import {
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Clock,
  ExternalLink,
  Plus,
  Star,
  Users,
  Briefcase,
  CalendarCheck,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Edit2,
  Share2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export default function BusinessDetails() {
  const { navigate } = useApp();
  const { addToast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState('Overview');

  const storedBusiness = JSON.parse(localStorage.getItem('selectedBusiness')) || {
    id: 'BIZ-8829',
    name: 'Global Logistics Ltd',
    category: 'Logistics',
    location: 'Rotterdam, NL',
    status: 'Active',
    owner: 'Marcus Thorne'
  };

  const businessId = storedBusiness.id;
  const businessName = storedBusiness.name;
  const businessCategory = storedBusiness.category;
  const businessLocation = storedBusiness.location;
  const businessStatus = storedBusiness.status;
  const businessOwner = storedBusiness.owner || 'Marcus Thorne';

  const subTabs = [
    'Overview',
    'Documents',
    'Branches',
    'Services',
    'Employees',
    'Revenue',
    'Reviews',
    'Compliance'
  ];

  const handleSubTabClick = (tab) => {
    setActiveSubTab(tab);
    if (tab === 'Overview') {
      navigate(ROUTES.businessDetails);
    } else if (tab === 'Documents') {
      navigate(ROUTES.businessDocReview);
    } else if (tab === 'Branches') {
      navigate(ROUTES.businessBranches);
    } else if (tab === 'Services') {
      navigate(ROUTES.businessServices);
    } else if (tab === 'Employees') {
      navigate(ROUTES.businessEmployees);
    } else if (tab === 'Revenue') {
      navigate(ROUTES.businessRevenue);
    } else if (tab === 'Reviews') {
      navigate(ROUTES.businessReviews);
    } else if (tab === 'Compliance') {
      navigate(ROUTES.businessCompliance);
    }
  };

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab="Directory" />}
      searchPlaceholder="Search in businesses..."
    >
      <div className="business-details-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.business)}>Directory</span>
          <ChevronRight size={14} />
          <span style={{ color: '#0f172a' }}>{businessName}</span>
        </div>

        {/* Business Hero Banner Card */}
        <div className="panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '10px', background: '#dbeafe', color: '#1e40af', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: 'var(--text)' }}>{businessName}</h1>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  color: businessStatus === 'Active' ? '#10b981' : businessStatus === 'Pending' ? '#b45309' : '#ef4444',
                  background: businessStatus === 'Active' ? '#ecfdf5' : businessStatus === 'Pending' ? '#fef3c7' : '#fee2e2',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: businessStatus === 'Active' ? '#10b981' : businessStatus === 'Pending' ? '#b45309' : '#ef4444' }} />
                  {businessStatus || 'Active'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '24px', marginTop: '8px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', flexWrap: 'wrap' }}>
                <div>BUSINESS ID: <span style={{ color: 'var(--text)' }}>{businessId}</span></div>
                <div>CATEGORY: <span style={{ color: 'var(--text)' }}>{businessCategory}</span></div>
                <div>REGISTRATION DATE: <span style={{ color: 'var(--text)' }}>Oct 12, 2023</span></div>
                <div>LOCATION: <span style={{ color: 'var(--text)' }}>{businessLocation}</span></div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', border: 'none', background: '#0f172a', color: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 16px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => addToast(`Edit mode enabled for ${businessName}.`, "success")}
              type="button"
            >
              <Edit2 size={13} /> Edit Profile
            </button>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 16px', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => addToast(`Access invitation link for ${businessName} copied to clipboard!`, "success")}
              type="button"
            >
              <Share2 size={13} /> Share Access
            </button>
          </div>
        </div>

        {/* 6 KPI Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
          
          {/* Branches */}
          <div onClick={() => addToast("Viewing branch metrics...", "success")} className="panel" style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Branches</span>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '1px 5px', borderRadius: '3px' }}>+2</span>
            </div>
            <strong style={{ fontSize: '18px', color: 'var(--text)', marginTop: '4px', display: 'block' }}>12</strong>
          </div>

          {/* Employees */}
          <div onClick={() => addToast("Viewing employees stats...", "success")} className="panel" style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Employees</span>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '1px 5px', borderRadius: '3px' }}>+12%</span>
            </div>
            <strong style={{ fontSize: '18px', color: 'var(--text)', marginTop: '4px', display: 'block' }}>150</strong>
          </div>

          {/* Services */}
          <div onClick={() => addToast("Viewing active services...", "success")} className="panel" style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Services</span>
            </div>
            <strong style={{ fontSize: '18px', color: 'var(--text)', marginTop: '4px', display: 'block' }}>24</strong>
          </div>

          {/* Bookings */}
          <div onClick={() => addToast("Viewing bookings queue...", "success")} className="panel" style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Bookings</span>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '1px 5px', borderRadius: '3px' }}>+8%</span>
            </div>
            <strong style={{ fontSize: '18px', color: 'var(--text)', marginTop: '4px', display: 'block' }}>1.2k</strong>
          </div>

          {/* Revenue */}
          <div onClick={() => addToast("Viewing revenue telemetry...", "success")} className="panel" style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Revenue</span>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '1px 5px', borderRadius: '3px' }}>+15%</span>
            </div>
            <strong style={{ fontSize: '18px', color: 'var(--text)', marginTop: '4px', display: 'block' }}>$450k</strong>
          </div>

          {/* Rating */}
          <div onClick={() => addToast("Viewing customer reviews matrix...", "success")} className="panel" style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '80px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Rating</span>
              <span style={{ fontSize: '9px', color: '#f59e0b', display: 'flex', alignItems: 'center' }}><Star size={10} fill="#f59e0b" /> 4.8/5</span>
            </div>
            <strong style={{ fontSize: '18px', color: 'var(--text)', marginTop: '4px', display: 'block' }}>4.8</strong>
          </div>

        </div>

        {/* Tab Selection Row */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', gap: '24px', overflowX: 'auto', paddingBottom: '2px' }}>
          {subTabs.map((tab) => {
            const isActive = activeSubTab === 'Overview' && tab === 'Overview';
            return (
              <button
                key={tab}
                onClick={() => handleSubTabClick(tab)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #4f46e5' : '2px solid transparent',
                  padding: '8px 4px',
                  color: isActive ? '#4f46e5' : 'var(--muted)',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  outline: 'none'
                }}
                type="button"
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Layout overview Grid */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Left Column content */}
          <div style={{ flex: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Business Summary panel */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Business Summary</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', margin: 0 }}>
                {businessName} is a premier provider of integrated solutions in the {businessCategory} sector. Specializing in high-density management, compliance monitoring, and real-time tracking transparency, the company serves a growing base of enterprise clients worldwide.
              </p>

              {/* Contacts and details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                
                <div>
                  <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', margin: '0 0 12px' }}>Contact Information</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', fontWeight: '700' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <Mail size={14} style={{ color: '#4f46e5' }} />
                      <a href="mailto:ops@globallogistics.com" style={{ color: '#0f172a', textDecoration: 'none' }}>ops@globallogistics.com</a>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <Phone size={14} style={{ color: '#4f46e5' }} />
                      <span style={{ color: '#0f172a' }}>+31 10 400 5000</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <Globe size={14} style={{ color: '#4f46e5' }} />
                      <a href="https://www.globallogistics.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0f172a', textDecoration: 'none' }}>www.globallogistics.com</a>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <MapPin size={14} style={{ color: '#4f46e5', marginTop: '2px' }} />
                      <span style={{ color: '#0f172a', lineHeight: '1.4' }}>Wilhelminakade 1, 3072 AP<br />Rotterdam, Netherlands</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', margin: '0 0 12px' }}>Operational Hours</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', fontWeight: '700' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--muted)' }}>Mon - Fri</span>
                      <span style={{ color: 'var(--text)' }}>00:00 - 24:00 (24/7 Ops)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--muted)' }}>Sat - Sun</span>
                      <span style={{ color: 'var(--text)' }}>00:00 - 24:00 (24/7 Ops)</span>
                    </div>

                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '10px', display: 'flex', gap: '8px', marginTop: '8px' }}>
                      <Clock size={16} style={{ color: '#1d4ed8', flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '11px', color: '#1e3a8a' }}>Logistics Command Center</strong>
                        <span style={{ display: 'block', fontSize: '10px', color: '#1e40af', fontWeight: '500', marginTop: '2px' }}>Global operations monitored 24/7/365</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Service Coverage Areas Panel */}
            <div className="panel" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '800', margin: '0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service Coverage Areas</h2>
                <a href="#network" onClick={(e) => { e.preventDefault(); addToast("Opening logistics network coverage map...", "success"); }} style={{ color: '#4f46e5', fontWeight: '800', fontSize: '11px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  View Full Network <ExternalLink size={12} />
                </a>
              </div>

              {/* Map SVG visualization container */}
              <div style={{ height: '280px', borderRadius: '6px', background: '#1e293b', overflow: 'hidden', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 600 280" style={{ display: 'block' }}>
                  <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />

                  <path d="M50,70 Q70,60 110,65 T140,80 T170,75 T210,120 T150,160 T130,220 T100,240 Z" fill="rgba(255, 255, 255, 0.06)" />
                  <path d="M260,80 Q290,60 320,65 T350,85 T390,95 T430,90 T480,110 T460,160 T420,200 T380,250 Z" fill="rgba(255, 255, 255, 0.06)" />
                  <path d="M490,50 Q520,40 560,55 T580,90 T540,140 Z" fill="rgba(255, 255, 255, 0.06)" />
                  
                  <path d="M 160 100 Q 250 50, 420 180" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 160 100 Q 110 90, 80 120" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" />

                  <circle cx="160" cy="100" r="6" fill="#4f46e5" />
                  <circle cx="160" cy="100" r="12" fill="none" stroke="#4f46e5" strokeWidth="1.5" opacity="0.6" />
                  
                  <circle cx="420" cy="180" r="5" fill="#10b981" />
                  <circle cx="80" cy="120" r="5" fill="#10b981" />
                </svg>

                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.15)', padding: '12px', borderRadius: '6px', color: '#fff', fontSize: '11px', width: '160px' }}>
                  <strong style={{ display: 'block', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontSize: '8px', letterSpacing: '0.5px', marginBottom: '6px' }}>Active Nodes</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: '700' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#4f46e5' }} />
                      <span>Rotterdam (HQ)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#10b981' }} />
                      <span>Singapore Hub</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: '#10b981' }} />
                      <span>New Jersey Terminal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column content */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Emergency Contacts Panel */}
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', margin: '0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Emergency Contacts</h2>
              
              {/* Primary Representative */}
              <div style={{ border: '1px solid #fee2e2', background: '#fff8f8', borderRadius: '6px', padding: '12px 14px' }}>
                <span style={{ display: 'block', fontSize: '8px', fontWeight: '900', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary Representative</span>
                <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)', marginTop: '4px' }}>{businessOwner}</strong>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '6px' }}>
                  <Phone size={12} />
                  <span>+31 (0) 628-991-022</span>
                </div>
              </div>

              {/* Rapid Task Force */}
              <div style={{ border: '1px solid #dbeafe', background: '#f8fafc', borderRadius: '6px', padding: '12px 14px' }}>
                <span style={{ display: 'block', fontSize: '8px', fontWeight: '900', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Incident Response</span>
                <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)', marginTop: '4px' }}>Rapid Task Force</strong>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: 'var(--muted)', marginTop: '6px' }}>
                  <Phone size={12} />
                  <span>Ext. 9110</span>
                </div>
              </div>

              {/* Add contact button */}
              <button
                style={{ width: '100%', height: '36px', border: '1px dashed var(--line)', background: 'transparent', color: 'var(--muted)', fontSize: '11px', fontWeight: '800', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer' }}
                onClick={() => addToast("Add Contact registration popup launched.", "success")}
                type="button"
              >
                <Plus size={12} /> Add Contact
              </button>
            </div>

            {/* Compliance Status Card */}
            <div className="panel" style={{ padding: '20px', background: '#0f172a', color: '#fff', border: 'none' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 16px' }}>Compliance Status</h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="64" height="64" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="98 100" strokeDashoffset="0" strokeLinecap="round" />
                  </svg>
                  <strong style={{ position: 'absolute', fontSize: '16px', fontWeight: '800' }}>98%</strong>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '12px' }}>Regulatory Score</strong>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <ShieldCheck size={11} style={{ color: '#10b981' }} /> Document status cleared
                  </span>
                </div>
              </div>

              {/* Mini details list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '11px', fontWeight: '700', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>EU Transport Safety</span>
                    <span style={{ color: '#10b981' }}>Passed</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#10b981' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>ISO 9001 Certification</span>
                    <span style={{ color: '#10b981' }}>Active</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#10b981' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tags Panel */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quick Tags</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Enterprise', 'Sea-Freight', 'Tier-1 Partner', 'Carbon-Neutral', 'High-Volume'].map((tag) => (
                  <span
                    key={tag}
                    onClick={() => addToast(`Filtering directory by tag: "${tag}"`, "success")}
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#4f46e5',
                      background: '#eff6ff',
                      border: '1px solid #dbeafe',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}

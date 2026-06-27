import React, { useState } from 'react';
import {
  ArrowLeft,
  Mail,
  Edit2,
  CheckCircle,
  FileText,
  AlertTriangle,
  Clock,
  Eye,
  Download,
  RotateCcw,
  Upload,
  ExternalLink,
  ShieldAlert,
  User,
  ShieldCheck,
  MapPin,
  Building,
  Phone,
  Activity,
  Globe
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function PartnerDetails() {
  const { navigate } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('Overview');

  const handleBack = () => {
    navigate(ROUTES.partners);
  };

  const tabs = [
    'Overview',
    'KYC',
    'Services',
    'Branches',
    'Employees',
    'Wallet',
    'Banking',
    'Revenue',
    'Reviews'
  ];

  return (
    <AdminShell activeTab="Partners" searchPlaceholder="Search partner documents, GSTIN, or ID...">
      {/* Breadcrumb / Back button row */}
      <div className="partner-details-nav">
        <button className="back-arrow-btn" type="button" onClick={handleBack} aria-label="Go back to partners">
          <ArrowLeft size={20} />
        </button>
        <div className="partner-details-header-meta">
          <div className="header-meta-top">
            <svg className="detail-partner-logo-svg" width="40" height="40" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="6" fill="#0d1b15" />
              <circle cx="16" cy="16" r="8" fill="none" stroke="#10b981" strokeWidth="2" />
              <path d="M10 13 A 6 6 0 0 0 22 13" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <path d="M10 19 A 6 6 0 0 1 22 19" fill="none" stroke="#10b981" strokeWidth="1.5" />
            </svg>
            <div className="detail-title-block">
              <div className="detail-title-row">
                <h1>Global Logistics Solutions Ltd.</h1>
                <span className="enterprise-partner-badge">Enterprise Partner</span>
              </div>
              <div className="detail-id-row">
                <span className="check-bullet">✔</span>
                <span>Partner ID: HOZ-GLS-8829</span>
                <span className="dot-sep">•</span>
                <span>Joined Oct 2023</span>
              </div>
            </div>
            
            <div className="detail-compliance-score-wrap">
              <div className="score-label">OVERALL COMPLIANCE</div>
              <div className="score-value">80% Verified</div>
            </div>
          </div>

          <div className="header-meta-actions">
            <button className="secondary-action-btn font-bold" type="button">
              <Mail size={16} />
              <span>Contact Partner</span>
            </button>
            <button className="primary-action-btn font-bold" type="button">
              <Edit2 size={16} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="details-subtabs-wrap">
        <nav className="details-subnav">
          {tabs.map((tab) => (
            <button
              className={activeSubTab === tab ? 'active' : ''}
              onClick={() => setActiveSubTab(tab)}
              type="button"
              key={tab}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {activeSubTab === 'Overview' ? (
        <div className="overview-tab-content">
          <div className="overview-columns">
            {/* Left Column: Business & Liaison Information */}
            <div className="overview-left-col">
              <div className="panel overview-card">
                <div className="service-card-title-wrap">
                  <div className="title-icon-circle purple-bg">
                    <Building size={16} />
                  </div>
                  <div>
                    <h2>Business Information</h2>
                    <p>Core tax documentation and corporate headquarters details.</p>
                  </div>
                </div>

                <div className="overview-info-list">
                  <div className="info-item-row">
                    <span className="info-label">Headquarters</span>
                    <strong className="info-val">Suite 400, 100 Corporate Parkway, New York, NY 10001</strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Tax ID (GSTIN/EIN)</span>
                    <strong className="info-val">27AAAAA0000A1Z5</strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Incorporation Number (CIN)</span>
                    <strong className="info-val">L74999MH2021PLC353982</strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Foundation Date</span>
                    <strong className="info-val">12 January 2021</strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Entity Status</span>
                    <span className="status-badge-active-green">Active Operations</span>
                  </div>
                </div>
              </div>

              <div className="panel overview-card">
                <div className="service-card-title-wrap">
                  <div className="title-icon-circle blue-bg">
                    <User size={16} />
                  </div>
                  <div>
                    <h2>Contact & Liaison Details</h2>
                    <p>Primary communications coordinator assigned to this account.</p>
                  </div>
                </div>

                <div className="liaison-profile-section">
                  <img
                    className="liaison-avatar"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Sarah Jenkins Avatar"
                  />
                  <div className="liaison-meta-text">
                    <div className="liaison-name-status">
                      <strong>Sarah Jenkins</strong>
                      <span className="active-dot-indicator" title="Online" />
                    </div>
                    <span>Account Liaison Manager</span>
                  </div>
                </div>

                <div className="overview-info-list border-top-lavender">
                  <div className="info-item-row">
                    <span className="info-label">Direct Email</span>
                    <strong className="info-val">
                      <Mail size={12} className="inline-icon" /> sarah.jenkins@globallogistics.com
                    </strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Direct Phone</span>
                    <strong className="info-val">
                      <Phone size={12} className="inline-icon" /> +1 (555) 019-2834
                    </strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Response SLA</span>
                    <strong className="info-val">&lt; 30 Minutes</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dispatch Coverage & Activity Timeline */}
            <div className="overview-right-col">
              <div className="panel overview-card">
                <div className="service-card-title-wrap">
                  <div className="title-icon-circle orange-bg">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h2>Operational Dispatch Coverage</h2>
                    <p>Live active dispatch radar mapping zones.</p>
                  </div>
                </div>

                <div className="radar-map-container mini-map-margin">
                  <svg className="radar-map-svg" viewBox="0 0 400 200" width="100%" height="150">
                    <rect width="400" height="200" fill="#040914" />
                    <circle cx="200" cy="100" r="80" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="200" cy="100" r="50" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="200" cy="100" r="20" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    
                    <line x1="200" y1="10" x2="200" y2="190" stroke="#0f172a" strokeWidth="1.5" />
                    <line x1="50" y1="100" x2="350" y2="100" stroke="#0f172a" strokeWidth="1.5" />
                    
                    <circle className="radar-pulse-wave" cx="180" cy="80" r="25" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="180" cy="80" r="4" fill="#10b981" />
                    
                    <circle className="radar-pulse-wave" cx="230" cy="120" r="15" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="230" cy="120" r="4" fill="#10b981" />
                  </svg>
                </div>

                <div className="overview-info-list">
                  <div className="info-item-row">
                    <span className="info-label">Active dispatch hubs</span>
                    <strong className="info-val">2 (Jersey City Central, East Boston)</strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Operational Radius</span>
                    <strong className="info-val">75 km combined coverage</strong>
                  </div>
                  <div className="info-item-row">
                    <span className="info-label">Live SLA Adherence</span>
                    <strong className="info-val green-text">99.8% Uptime</strong>
                  </div>
                </div>
              </div>

              <div className="panel overview-card">
                <div className="service-card-title-wrap">
                  <div className="title-icon-circle blue-bg">
                    <Activity size={16} />
                  </div>
                  <div>
                    <h2>Recent Dispatch & Admin Events</h2>
                    <p>Timeline of the most recent activity log metrics.</p>
                  </div>
                </div>

                <div className="timeline-mini-list">
                  <div className="timeline-mini-item">
                    <div className="timeline-mini-icon check-green">✔</div>
                    <div className="timeline-mini-content">
                      <strong>SLA Threshold Met for Jersey Central</strong>
                      <span>All 42 dispatch routes successfully completed within SLA bounds.</span>
                      <small>2 Hours Ago</small>
                    </div>
                  </div>
                  <div className="timeline-mini-item">
                    <div className="timeline-mini-icon upload-blue">↑</div>
                    <div className="timeline-mini-content">
                      <strong>New Vehicle License Uploaded</strong>
                      <span>Added 5 new active delivery vans to the Boston dispatch segment list.</span>
                      <small>1 Day Ago</small>
                    </div>
                  </div>
                  <div className="timeline-mini-item">
                    <div className="timeline-mini-icon alert-orange">!</div>
                    <div className="timeline-mini-content">
                      <strong>Pending Audit Request</strong>
                      <span>A periodic random check requested on physical vehicle verification reports.</span>
                      <small>3 Days Ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : activeSubTab === 'KYC' ? (
        <div className="kyc-tab-content">
          {/* KYC Documents Verification Grid */}
          <div className="kyc-documents-grid">
            
            {/* 1. GST Registration */}
            <div className="kyc-card">
              <div className="kyc-card-header">
                <h3>GST Registration</h3>
                <span className="kyc-status-badge verified">
                  <span className="check-icon">✔</span> Verified
                </span>
              </div>
              <div className="kyc-card-meta">
                <span className="meta-label">GSTIN: 27AAAAA0000A1Z5</span>
                <div className="meta-dates">
                  <div>
                    <span>Issued Date</span>
                    <strong>12 Jan 2021</strong>
                  </div>
                  <div>
                    <span>Verification Date</span>
                    <strong>15 Oct 2023</strong>
                  </div>
                </div>
              </div>
              <div className="kyc-card-preview-area">
                <img
                  className="kyc-preview-img"
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
                  alt="GST Document"
                />
                <div className="kyc-preview-overlay">
                  <button className="overlay-action-btn" type="button">
                    <Eye size={16} />
                    <span>View</span>
                  </button>
                  <button className="overlay-action-btn" type="button">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Company PAN */}
            <div className="kyc-card">
              <div className="kyc-card-header">
                <h3>Company PAN</h3>
                <span className="kyc-status-badge approved">Approved</span>
              </div>
              <div className="kyc-card-meta">
                <span className="meta-label">Permanent Account Number: ABXXXXXXXX12</span>
              </div>
              <div className="kyc-card-preview-area">
                <img
                  className="kyc-preview-img"
                  src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=600&q=80"
                  alt="PAN Card"
                />
              </div>
              <div className="kyc-card-actions">
                <button className="kyc-btn-secondary" type="button">
                  Re-verify Details
                </button>
              </div>
            </div>

            {/* 3. COI */}
            <div className="kyc-card">
              <div className="kyc-card-header">
                <h3>COI</h3>
                <span className="kyc-status-badge pending">Pending Review</span>
              </div>
              <div className="kyc-card-meta">
                <span className="meta-label">Certificate of Incorporation</span>
              </div>
              <div className="kyc-card-preview-area placeholder-bg">
                <div className="under-verification-placeholder">
                  <Clock size={40} className="hourglass-animate" />
                  <span>Under Verification</span>
                </div>
              </div>
              <div className="kyc-card-actions two-buttons">
                <button className="kyc-btn-secondary" type="button">View</button>
                <button className="kyc-btn-secondary" type="button">Replace</button>
              </div>
            </div>

            {/* 4. Bank Proof */}
            <div className="kyc-card">
              <div className="kyc-card-header">
                <h3>Bank Proof</h3>
                <span className="kyc-status-badge approved">Approved</span>
              </div>
              <div className="kyc-card-meta">
                <span className="meta-label">Cancelled Cheque or Bank Statement</span>
              </div>
              <div className="kyc-card-preview-area">
                <img
                  className="kyc-preview-img"
                  src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80"
                  alt="Bank Proof Cheque"
                />
              </div>
              <div className="kyc-card-actions">
                <button className="kyc-btn-secondary icon-right" type="button">
                  <ExternalLink size={14} />
                  <span>View Document</span>
                </button>
              </div>
            </div>

            {/* 5. Owner ID Proof */}
            <div className="kyc-card">
              <div className="kyc-card-header">
                <h3>Owner ID Proof</h3>
                <span className="kyc-status-badge reupload">Re-upload Needed</span>
              </div>
              <div className="kyc-card-meta">
                <span className="meta-label">Aadhaar/Passport of Principal Officer</span>
              </div>
              <div className="kyc-card-preview-area placeholder-bg warning-border">
                <div className="blurry-warning-placeholder">
                  <AlertTriangle size={32} className="warning-icon-red" />
                  <strong>Blurry Image</strong>
                  <span>Please ensure all edges are visible.</span>
                </div>
              </div>
              <div className="kyc-card-actions">
                <button className="kyc-btn-danger icon-right" type="button">
                  <Upload size={14} />
                  <span>Upload New ID</span>
                </button>
              </div>
            </div>

          </div>

          {/* Compliance Activity Feed Timeline */}
          <div className="compliance-feed-section">
            <h2>Compliance Activity Feed</h2>
            <div className="feed-timeline">
              
              <div className="feed-item">
                <div className="feed-icon-circle success-bg">
                  <ShieldCheck size={18} />
                </div>
                <div className="feed-content-wrap">
                  <div className="feed-text-row">
                    <strong>System automatically verified GSTIN status with official portal.</strong>
                  </div>
                  <span className="feed-time">Today at 10:45 AM</span>
                </div>
              </div>

              <div className="feed-item">
                <div className="feed-icon-circle user-bg">
                  <User size={18} />
                </div>
                <div className="feed-content-wrap">
                  <div className="feed-text-row">
                    <strong>Ananya R. (Compliance Officer) flagged Owner ID for re-upload.</strong>
                    <p className="feed-quote">
                      "The submitted Aadhaar copy is blurry and the last four digits are not legible."
                    </p>
                  </div>
                  <span className="feed-time">Yesterday at 4:12 PM</span>
                </div>
              </div>

              <div className="feed-item">
                <div className="feed-icon-circle upload-bg">
                  <Upload size={18} />
                </div>
                <div className="feed-content-wrap">
                  <div className="feed-text-row">
                    <strong>Partner uploaded Certificate of Incorporation.</strong>
                  </div>
                  <span className="feed-time">Oct 14, 2023 at 2:30 PM</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <div className="tab-placeholder-content">
          <h2>{activeSubTab} Content</h2>
          <p>This tab's configuration is currently under review or awaiting partner integration.</p>
        </div>
      )}
    </AdminShell>
  );
}

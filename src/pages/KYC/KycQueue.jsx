import React, { useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  FileText,
  Filter,
  Gauge,
  IdCard,
  RefreshCcw,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  UploadCloud,
  Users,
  X
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

const sections = [
  'Dashboard',
  'Queue',
  'Review',
  'Aadhaar',
  'PAN',
  'GST',
  'Driving License',
  'Voter ID',
  'Selfie',
  'Face Match',
  'Video KYC',
  'Bulk Approval',
  'Reuploads',
  'Risk Center',
  'Investigation',
  'Audit Logs',
  'Reviewers',
  'Rejections'
];

const initialProfiles = [
  { id: 'KYC-92038', name: 'Johnathan Doe', type: 'User', doc: 'Aadhaar', date: '2023-10-24', city: 'Mumbai', risk: 12, status: 'Pending', reviewer: 'Meera S.', email: 'johnathan@example.com', mobile: '+91 98765 43210', avatar: 'JD' },
  { id: 'KYC-92031', name: 'Sarah Miller', type: 'Partner', doc: 'Passport', date: '2023-10-24', city: 'Bengaluru', risk: 84, status: 'Pending', reviewer: 'Alex R.', email: 'sarah@example.com', mobile: '+91 89898 42010', avatar: 'SM' },
  { id: 'KYC-92022', name: 'Vikram Kumar', type: 'Employee', doc: 'PAN', date: '2023-10-24', city: 'Delhi', risk: 45, status: 'Manual Review', reviewer: 'Sarah J.', email: 'vikram@example.com', mobile: '+91 91234 56780', avatar: 'VK' },
  { id: 'KYC-92013', name: 'Elena Rodriguez', type: 'User', doc: 'Passport', date: '2023-10-23', city: 'Pune', risk: 7, status: 'Pending', reviewer: 'David M.', email: 'elena@example.com', mobile: '+91 77654 33210', avatar: 'ER' },
  { id: 'KYC-92014', name: 'Chen Wei', type: 'Business Owner', doc: 'GST', date: '2023-10-23', city: 'Hyderabad', risk: 67, status: 'Pending', reviewer: 'Priya K.', email: 'chen@example.com', mobile: '+91 99887 66112', avatar: 'CW' },
  { id: 'KYC-92015', name: 'Marcus Vane', type: 'Partner', doc: 'Driving License', date: '2023-10-23', city: 'London', risk: 32, status: 'Approved', reviewer: 'Admin', email: 'marcus@example.com', mobile: '+44 161 908 2231', avatar: 'MV' },
  { id: 'KYC-92016', name: 'Aisha Bin-Tariq', type: 'User', doc: 'Voter ID', date: '2023-10-22', city: 'Lucknow', risk: 91, status: 'Rejected', reviewer: 'Michael C.', email: 'aisha@example.com', mobile: '+91 88990 11223', avatar: 'AB' },
  { id: 'KYC-92017', name: 'Svetlana I.', type: 'User', doc: 'Video KYC', date: '2023-10-22', city: 'Chennai', risk: 14, status: 'Pending', reviewer: 'Rohit S.', email: 'svetlana@example.com', mobile: '+91 98701 01010', avatar: 'SI' }
];

const latestSubmissions = [
  ['Liam Henderson', 'Passport', 'Review'],
  ['Sarah Chen', 'ID Card', 'Review'],
  ['Marco Silva', 'Driver Lic.', 'Review'],
  ['Elena Rodriguez', 'Passport', 'Review']
];

const reuploads = [
  ['James Davenport', 'Driving License (Front)', 'Blurry Image', '2023-11-24 14:39', 'Awaiting'],
  ['Sarah Lindholm', 'Passport (Bio Page)', 'Expired ID', '2023-11-24 11:45', 'Overdue'],
  ['Marcus Weber', 'Utility Bill', 'Name Mismatch', '2023-11-23 09:12', 'In Progress'],
  ['Elena Kostic', 'National ID', 'Corners Cropped', '2023-11-22 16:55', 'Overdue']
];

const auditRows = [
  ['2023-10-19 14:22:12', 'ID_APPROVED', 'Sarah Jenkins', '192.168.1.45', 'USR-99283-K', 'Identity verified via biometric match.'],
  ['2023-10-19 14:18:12', 'ID_REJECTED', 'Michael Chen', '10.8.4.112', 'USR-11204-O', 'Document expiration date out of range.'],
  ['2023-10-19 13:55:46', 'RISK_OVERRIDE', 'Alex Rodriguez', '192.168.1.22', 'CORP-8051-B', 'Manual override for Tier 2 VIP account registration.'],
  ['2023-10-19 13:42:15', 'DOC_UPLOAD', 'System Auto', '::1', 'USR-99283-K', 'Automated extraction from Passport Page 1.'],
  ['2023-10-19 12:10:01', 'FLAG_FOR_REVIEW', 'AI Guard', 'INT-API-3', 'USR-55122-H', 'Sanctions list partial match detected.']
];

const reviewerRows = [
  ['Elena Dragan', '482', '12', '88%', 'Critical'],
  ['Marcus Knight', '115', '82', '94%', 'Optimal'],
  ['Sarah Chen', '289', '84', '72%', 'Monitoring'],
  ['James Taylor', '42', '08', '98%', 'Under-load']
];

const rejectionRows = [
  ['Alex Lindqvist', 'Invalid ID', '2023-10-24 14:22', 'Sarah Chen', '98.4%'],
  ['Marco Rossi', 'Blurry Image', '2023-10-24 12:05', 'David Miller', '62.1%'],
  ['Jessica Wong', 'Expired ID', '2023-10-23 16:45', 'Sarah Chen', '99.9%'],
  ['Elena Murphy', 'Name Mismatch', '2023-10-23 09:12', 'Michael Scott', '87.5%'],
  ['Kevin Tuan', 'Sanctions Match', '2023-10-22 22:30', 'Compliance Lead', '92.8%']
];

const Badge = ({ children, tone = 'neutral' }) => <span className={`kyc-flow-badge ${tone}`}>{children}</span>;

const StatCard = ({ label, value, sub, tone = 'neutral', icon: Icon = Activity }) => (
  <article className={`kyc-flow-stat ${tone}`}>
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
      {sub && <small>{sub}</small>}
    </div>
    <Icon size={22} />
  </article>
);

const Panel = ({ title, action, children, className = '' }) => (
  <section className={`kyc-flow-panel ${className}`}>
    {(title || action) && (
      <header className="kyc-flow-panel-head">
        <h2>{title}</h2>
        {action}
      </header>
    )}
    {children}
  </section>
);

const Progress = ({ value, danger = false }) => (
  <span className="kyc-risk-line">
    <i style={{ width: `${value}%` }} className={danger ? 'danger' : ''} />
    <em>{value}</em>
  </span>
);

export default function KycQueue() {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedIds, setSelectedIds] = useState(['KYC-92038', 'KYC-92031', 'KYC-92022', 'KYC-92013']);
  const [toast, setToast] = useState('');
  const [query, setQuery] = useState('');
  const [note, setNote] = useState('');

  const selectedProfile = profiles[0];

  const metrics = useMemo(() => ({
    pending: profiles.filter((item) => item.status === 'Pending').length,
    approved: profiles.filter((item) => item.status === 'Approved').length,
    rejected: profiles.filter((item) => item.status === 'Rejected').length,
    highRisk: profiles.filter((item) => item.risk > 70).length
  }), [profiles]);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  };

  const updateProfileStatus = (id, status) => {
    setProfiles((items) => items.map((item) => item.id === id ? { ...item, status } : item));
    showToast(`${id} marked ${status}.`);
  };

  const bulkUpdate = (status) => {
    setProfiles((items) => items.map((item) => selectedIds.includes(item.id) ? { ...item, status } : item));
    showToast(`${selectedIds.length} profiles marked ${status}.`);
  };

  const toggleSelected = (id) => {
    setSelectedIds((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  };

  const filteredProfiles = profiles.filter((item) => {
    const text = `${item.id} ${item.name} ${item.type} ${item.doc} ${item.city}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  const renderSection = () => {
    switch (activeSection) {
      case 'Queue':
        return <QueueSection profiles={filteredProfiles} query={query} setQuery={setQuery} setActiveSection={setActiveSection} updateProfileStatus={updateProfileStatus} />;
      case 'Review':
        return <ReviewSection profile={selectedProfile} note={note} setNote={setNote} updateProfileStatus={updateProfileStatus} showToast={showToast} />;
      case 'Aadhaar':
        return <AadhaarSection showToast={showToast} />;
      case 'PAN':
        return <PanSection showToast={showToast} />;
      case 'GST':
        return <GstSection showToast={showToast} />;
      case 'Driving License':
        return <DrivingSection showToast={showToast} />;
      case 'Voter ID':
        return <VoterSection showToast={showToast} />;
      case 'Selfie':
        return <SelfieSection showToast={showToast} />;
      case 'Face Match':
        return <FaceSection showToast={showToast} />;
      case 'Video KYC':
        return <VideoSection showToast={showToast} />;
      case 'Bulk Approval':
        return <BulkSection profiles={profiles} selectedIds={selectedIds} toggleSelected={toggleSelected} bulkUpdate={bulkUpdate} />;
      case 'Reuploads':
        return <ReuploadSection showToast={showToast} />;
      case 'Risk Center':
        return <RiskSection showToast={showToast} />;
      case 'Investigation':
        return <InvestigationSection showToast={showToast} />;
      case 'Audit Logs':
        return <AuditSection />;
      case 'Reviewers':
        return <ReviewerSection showToast={showToast} />;
      case 'Rejections':
        return <RejectionSection showToast={showToast} />;
      default:
        return <DashboardSection metrics={metrics} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <AdminShell
      activeTab="KYC"
      headerTitle="KYC Management"
      searchPlaceholder="Search KYC profiles, documents, or risk flags..."
    >
      <div className="kyc-flow">
        <div className="partners-page-header kyc-flow-main-head">
          <div>
            <p className="kyc-flow-breadcrumb">KYC Management / {activeSection}</p>
            <h1 className="page-title">KYC Verification Management</h1>
            <p className="page-subtitle">Centralized verification for users, partners, employees, branches, and business owners.</p>
          </div>
          <div className="partners-header-buttons">
            <button className="secondary-action-btn font-bold" type="button" onClick={() => showToast('Reports exported successfully.')}>
              <Download size={14} />
              <span>Export Reports</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" onClick={() => setActiveSection('Bulk Approval')}>
              <Users size={14} />
              <span>Bulk Approval</span>
            </button>
            <button className="primary-action-btn font-bold" type="button" onClick={() => showToast('KYC queue refreshed.')}>
              <RefreshCcw size={14} />
              <span>Refresh Queue</span>
            </button>
          </div>
        </div>

        <nav className="kyc-flow-tabs" aria-label="KYC sections">
          {sections.map((section) => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              type="button"
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </nav>

        {toast && <div className="kyc-flow-toast"><CheckCircle2 size={16} />{toast}</div>}
        {renderSection()}
      </div>
    </AdminShell>
  );
}

function DashboardSection({ metrics, setActiveSection }) {
  return (
    <>
      <div className="kyc-flow-stats six">
        <StatCard label="Total Pending KYC" value={metrics.pending + 124} sub="+6.4%" icon={Clock} />
        <StatCard label="Approved Today" value="450" sub="At expected pace" icon={ShieldCheck} tone="success" />
        <StatCard label="Rejected Today" value={metrics.rejected + 11} sub="Needs review" icon={X} tone="danger" />
        <StatCard label="Reupload Requests" value="85" sub="42 waiting" icon={UploadCloud} />
        <StatCard label="High Risk Profiles" value={metrics.highRisk + 21} sub="Urgent" icon={ShieldAlert} tone="danger" />
        <StatCard label="Video KYC Pending" value="15" sub="Live queue" icon={Camera} />
      </div>

      <div className="kyc-flow-grid dashboard">
        <Panel title="Verification Trends">
          <div className="kyc-bar-chart">
            {[36, 52, 44, 66, 82, 58, 94, 72, 45, 61].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
          </div>
          <div className="kyc-chart-labels"><span>Submissions</span><span>Approvals</span></div>
        </Panel>
        <Panel title="Approval Rate">
          <div className="kyc-meter"><strong>94.2%</strong><span>Exceeding KPI 90%</span></div>
          <div className="kyc-mini-bars">{[30, 42, 56, 71, 85, 62].map((height, index) => <i key={index} style={{ height }} />)}</div>
        </Panel>
        <Panel title="Latest Submitted KYC">
          <table className="kyc-flow-table compact">
            <tbody>
              {latestSubmissions.map((row) => (
                <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td><button type="button" onClick={() => setActiveSection('Review')}>{row[2]}</button></td></tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel title="High Risk & Escalations" action={<Badge tone="danger">21 cases</Badge>}>
          {['Vanguard Logistics Ltd', 'Ahmed Al-Farsi', 'Cryptflow LLC'].map((item, index) => (
            <div className="kyc-alert-row" key={item}>
              <strong>{item}</strong>
              <span>{index === 0 ? 'Sanctions list partial match' : index === 1 ? 'Multiple identity mismatch' : 'Behavioral risk detected'}</span>
              <button type="button" onClick={() => setActiveSection('Investigation')}>Inspect</button>
            </div>
          ))}
        </Panel>
        <Panel title="Rejection Reasons">
          <div className="kyc-donut"><strong>12</strong><span>Total</span></div>
          <ul className="kyc-legend"><li>Doc Quality 50%</li><li>Fraud Risk 30%</li><li>Expired 15%</li></ul>
        </Panel>
        <Panel title="System Status">
          <div className="kyc-status-stack">
            <span><ShieldCheck size={15} /> OCR Engine Online</span>
            <span><Bell size={15} /> Sanctions DB Synced</span>
            <span className="danger"><AlertTriangle size={15} /> Reviewer Load High</span>
          </div>
        </Panel>
      </div>
    </>
  );
}

function QueueSection({ profiles, query, setQuery, setActiveSection, updateProfileStatus }) {
  return (
    <Panel title="Verification Queue" action={<button className="primary-action-btn" type="button"><Download size={14} />Export Report</button>}>
      <div className="kyc-flow-filters">
        {['All Types', 'Low', 'Medium', 'High', 'Critical'].map((item) => <button type="button" key={item}>{item}</button>)}
        <label><Search size={14} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by KYC ID, city, or user" /></label>
        <button type="button"><Filter size={14} />Clear Filters</button>
      </div>
      <div className="table-wrap">
        <table className="kyc-flow-table">
          <thead><tr><th>KYC ID</th><th>User Name</th><th>User Type</th><th>Submitted Date</th><th>Verification Type</th><th>Risk Score</th><th>Status</th><th>Reviewer</th><th>Actions</th></tr></thead>
          <tbody>
            {profiles.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td><span className="kyc-person"><i>{row.avatar}</i>{row.name}</span></td>
                <td>{row.type}</td>
                <td>{row.date}</td>
                <td><Badge>{row.doc}</Badge></td>
                <td><Progress value={row.risk} danger={row.risk > 70} /></td>
                <td><Badge tone={row.status === 'Approved' ? 'success' : row.status === 'Rejected' ? 'danger' : 'warning'}>{row.status}</Badge></td>
                <td>{row.reviewer}</td>
                <td>
                  <div className="kyc-row-actions">
                    <button type="button" onClick={() => setActiveSection('Review')}><Eye size={14} />View</button>
                    <button type="button" onClick={() => updateProfileStatus(row.id, 'Approved')}><Check size={14} />Verify</button>
                    <button type="button" onClick={() => updateProfileStatus(row.id, 'Rejected')}><X size={14} />Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="kyc-flow-bottom-kpis">
        <StatCard label="Average Review Time" value="4m 12s" sub="-8%" />
        <StatCard label="Queue Velocity" value="82/hr" sub="+11%" tone="success" />
        <StatCard label="AI Engine Status" value="Online" sub="Fraud Shield active" />
      </div>
    </Panel>
  );
}

function ReviewSection({ profile, note, setNote, updateProfileStatus, showToast }) {
  return (
    <div className="kyc-review-layout">
      <Panel title="User Profile">
        <div className="kyc-profile-card">
          <span>{profile.avatar}</span>
          <h2>{profile.name}</h2>
          <Badge tone="warning">{profile.status}</Badge>
        </div>
        {[
          ['User ID', profile.id],
          ['Mobile', profile.mobile],
          ['Email', profile.email],
          ['Registration Date', '12 Oct 2024'],
          ['User Type', profile.type],
          ['City', profile.city]
        ].map(([label, value]) => <div className="kyc-info-line" key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </Panel>

      <Panel title="Document Preview">
        <div className="kyc-document-stack">
          <DocumentCard title={`${profile.doc} Front`} />
          <DocumentCard title={`${profile.doc} Back`} small />
        </div>
        <div className="kyc-doc-meta">
          <span>Format: JPEG High Res</span>
          <span>Uploaded: Oct 24, 2023 14:22</span>
          <span>Checksum: Verified</span>
        </div>
      </Panel>

      <Panel title="Verification Engine">
        {[
          ['OCR Confidence', '98.4%', 'success'],
          ['Name Match', '100%', 'success'],
          ['Face Match', '94.2%', 'success'],
          ['Duplicate Check', 'Passed', 'success'],
          ['Risk Score', `${profile.risk}/100`, profile.risk > 70 ? 'danger' : 'success']
        ].map(([label, value, tone]) => <div className="kyc-check-line" key={label}><span>{label}</span><Badge tone={tone}>{value}</Badge></div>)}
        <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Reviewer notes..." />
        <div className="kyc-flow-actions">
          <button type="button" onClick={() => showToast('Reupload requested.')}>Request Reupload</button>
          <button type="button" className="danger" onClick={() => updateProfileStatus(profile.id, 'Rejected')}>Reject</button>
          <button type="button" className="primary" onClick={() => updateProfileStatus(profile.id, 'Approved')}>Approve</button>
        </div>
      </Panel>
    </div>
  );
}

function AadhaarSection({ showToast }) {
  return <DocumentVerification title="Aadhaar Verification" docLabel="AADHAAR_FRONT.JPG" fields={[['Aadhaar Number', 'XXXX 3201 8234'], ['Name', 'Arjun Vardhan'], ['DOB', '15/08/1982'], ['Address', 'Mumbai, Maharashtra']]} checks={['Name Match 100%', 'DOB Match 100%', 'Address Match 84%', 'OCR Confidence 98.4%']} showToast={showToast} />;
}

function PanSection({ showToast }) {
  return <DocumentVerification title="PAN Verification" docLabel="PAN_CARD.JPG" fields={[['PAN Number', 'ABCDE1234F'], ['Full Name', 'Aditya Sharma'], ['Date of Birth', '12/05/1992']]} checks={['Format Check Passed', 'Duplicate Case Check Low Risk', 'PAN Database Mapping Matched']} showToast={showToast} />;
}

function GstSection({ showToast }) {
  return <DocumentVerification title="GST Verification & Analytics" docLabel="GST_CERTIFICATE.PDF" business fields={[['GST Number', '27AACCP3912B1ZS'], ['Business Name', 'Chronos Logistics Private Limited'], ['Registration Type', 'Regular'], ['Status', 'Active']]} checks={['GST Match Validated', 'Registration Match 98%', 'Aggregated Risk Score 24']} showToast={showToast} />;
}

function DrivingSection({ showToast }) {
  return <DocumentVerification title="Driving License Verification" docLabel="LICENSE_FRONT.JPG" fields={[['License No.', 'L-1984-893-281'], ['Expiry Date', '24 Oct 2028'], ['Full Name', 'Jonathan W. Caldwell'], ['OCR Status', 'Character mismatch detected']]} checks={['Validity Check Active', 'Document Match 99%', 'Face Match 98.4%', 'Security Watermark Visible']} showToast={showToast} />;
}

function VoterSection({ showToast }) {
  return <DocumentVerification title="Voter ID Identity Match" docLabel="VOTER_ID.JPG" fields={[['EPIC Number', 'WJD1290384'], ['Full Name', 'Arjun S. Deshmukh'], ['Relation Name', 'Shivaji Deshmukh'], ['DOB', '12/05/1988']]} checks={['NVSP Database Match', 'De-duplication Check Passed', 'Address History Cross-ref Pending']} showToast={showToast} />;
}

function SelfieSection({ showToast }) {
  return (
    <div className="kyc-doc-review">
      <Panel title="Selfie Verification">
        <div className="kyc-selfie-stage"><Camera size={52} /><strong>Live Selfie Preview</strong><span>Face visible, lighting optimal, no mask detected.</span></div>
      </Panel>
      <Panel title="Verification Engine">
        {['Face Detection Passed', 'Face Clarity Excellent', 'Liveness Check Passed', 'Mask Detection None', 'Duplicate Face Detection Clear'].map((item) => <div className="kyc-check-line" key={item}><span>{item}</span><CheckCircle2 size={16} /></div>)}
        <StatCard label="Face Confidence" value="98.4%" sub="Risk score 12/100" icon={Gauge} />
        <div className="kyc-flow-actions"><button type="button" className="danger" onClick={() => showToast('Selfie rejected.')}>Reject</button><button type="button" className="primary" onClick={() => showToast('Selfie approved.')}>Approve</button></div>
      </Panel>
    </div>
  );
}

function FaceSection({ showToast }) {
  return (
    <div className="kyc-doc-review face">
      <Panel title="Biometric Face Comparison">
        <div className="kyc-face-split"><DocumentCard title="Document Source" /><DocumentCard title="Live Selfie Verification" /></div>
      </Panel>
      <Panel title="AI Results">
        <div className="kyc-circle-score"><strong>94.2%</strong><span>Match Probability</span></div>
        <div className="kyc-check-line"><span>Confidence Score</span><Badge tone="success">High</Badge></div>
        <div className="kyc-check-line"><span>Similarity Index</span><strong>0.9423</strong></div>
        <div className="kyc-check-line"><span>Status</span><Badge tone="success">Matched</Badge></div>
        <div className="kyc-flow-actions"><button type="button" onClick={() => showToast('Case escalated.')}>Escalate</button><button type="button" className="danger" onClick={() => showToast('Face match rejected.')}>Reject</button><button type="button" className="primary" onClick={() => showToast('Face match approved.')}>Approve</button></div>
      </Panel>
    </div>
  );
}

function VideoSection({ showToast }) {
  return (
    <div className="kyc-video-layout">
      <Panel title="Live Video KYC Review">
        <div className="kyc-video-screen">
          <span className="kyc-video-pill">AI Match 98.4%</span>
          <div><Camera size={54} /><strong>Marcus Vane holding ID card</strong></div>
          <div className="kyc-video-controls"><button type="button">Play</button><button type="button">Pause</button><button type="button">1.0x Speed</button></div>
        </div>
        <div className="kyc-video-subgrid">
          <DocumentCard title="Extracted Identity Card" small />
          <div className="kyc-status-stack"><span>Name Match Passed</span><span>DOB Match Passed</span><span>Face Liveness Verifying...</span></div>
        </div>
        <div className="kyc-flow-actions"><button type="button" onClick={() => showToast('New video requested.')}>Request New Video</button><button type="button" className="danger" onClick={() => showToast('Video KYC rejected.')}>Reject Application</button><button type="button" className="primary" onClick={() => showToast('Video KYC approved.')}>Approve Identity</button></div>
      </Panel>
      <Panel title="Reviewer Notes">
        <div className="kyc-profile-card small"><span>MV</span><h2>Marcus Vane</h2><Badge tone="success">Risk 12/100</Badge></div>
        <textarea defaultValue="Automatic liveness detection confirmed. No spoofing detected in 00:15 - 00:45 segment." />
        <textarea placeholder="Add a new observation..." />
        <div className="kyc-info-line"><span>Device</span><strong>iPhone 14 Pro</strong></div>
        <div className="kyc-info-line"><span>IP Address</span><strong>192.168.1.146</strong></div>
      </Panel>
    </div>
  );
}

function BulkSection({ profiles, selectedIds, toggleSelected, bulkUpdate }) {
  return (
    <Panel title="KYC Approval Center" action={<Badge>{selectedIds.length} Profiles Selected</Badge>}>
      <div className="kyc-flow-filters"><button type="button">Risk Level: Low</button><button type="button">Doc Type: All</button><button type="button">Batch Size: 25 Profiles</button><button type="button"><Filter size={14} />Advanced Filters</button></div>
      <div className="kyc-bulk-bar"><span>{selectedIds.length} Profiles Selected</span><button type="button" onClick={() => bulkUpdate('Approved')}>Approve Selected</button><button type="button" className="danger" onClick={() => bulkUpdate('Rejected')}>Reject Selected</button><button type="button">Assign Reviewer</button></div>
      <table className="kyc-flow-table"><thead><tr><th></th><th>Profile</th><th>Risk Score</th><th>Documents</th><th>AI Confidence</th><th>Last Updated</th><th>Actions</th></tr></thead><tbody>
        {profiles.slice(0, 5).map((row, index) => <tr key={row.id}><td><input type="checkbox" checked={selectedIds.includes(row.id)} onChange={() => toggleSelected(row.id)} /></td><td><span className="kyc-person"><i>{row.avatar}</i>{row.name}</span></td><td><Progress value={row.risk} danger={row.risk > 70} /></td><td><FileText size={18} /></td><td><Badge tone="success">{98 - index}%</Badge></td><td>{20 + index * 8} mins ago</td><td><button type="button">Review</button></td></tr>)}
      </tbody></table>
    </Panel>
  );
}

function ReuploadSection({ showToast }) {
  return (
    <Panel title="Reupload Requests" action={<button className="primary-action-btn" type="button" onClick={() => showToast('Bulk notification sent via email and SMS.')}><Send size={14} />Bulk Notify</button>}>
      <div className="kyc-flow-stats four"><StatCard label="Pending Reuploads" value="42" sub="+12%" /><StatCard label="Avg Response Time" value="4.2h" /><StatCard label="Blurry Image Rate" value="18%" /><StatCard label="Successful Re-submits" value="94%" tone="success" /></div>
      <table className="kyc-flow-table"><thead><tr><th>User</th><th>Rejected Document</th><th>Reason</th><th>Request Date</th><th>Status</th><th>Actions</th></tr></thead><tbody>
        {reuploads.map((row) => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td><Badge tone="danger">{row[2]}</Badge></td><td>{row[3]}</td><td>{row[4]}</td><td><button type="button" onClick={() => showToast(`${row[0]} notified successfully.`)}>Re-notify</button></td></tr>)}
      </tbody></table>
    </Panel>
  );
}

function RiskSection({ showToast }) {
  return (
    <>
      <div className="kyc-flow-stats six"><StatCard label="Duplicate Aadhaar" value="3" tone="danger" /><StatCard label="Duplicate PAN" value="2" tone="danger" /><StatCard label="Multiple Accounts" value="8" /><StatCard label="Device Mismatch" value="New IMEI" tone="danger" /><StatCard label="Geo Mismatch" value="Flagged" /><StatCard label="AI Confidence" value="98.4%" /></div>
      <div className="kyc-flow-grid risk">
        <Panel title="Global Risk Score"><div className="kyc-risk-gauge"><strong>75</strong><span>High Risk</span></div><Badge tone="danger">Fraudulent patterns detected</Badge></Panel>
        <Panel title="Linked Account Network Visualization"><div className="kyc-network-map"><i /><i /><i /><strong>Target Subject</strong></div></Panel>
        <Panel title="Recent Suspicious Events">{['Rapid Sequential Logins', 'Aadhaar Data Match', 'VPN Detection'].map((item) => <div className="kyc-alert-row" key={item}><strong>{item}</strong><span>Risk engine raised a critical signal.</span><button type="button" onClick={() => showToast('Event added to investigation case.')}>Trace</button></div>)}</Panel>
      </div>
    </>
  );
}

function InvestigationSection({ showToast }) {
  return (
    <div className="kyc-investigation">
      <Panel title="Investigation: Alex Rivera">
        <div className="kyc-flow-actions top"><button type="button" className="danger" onClick={() => showToast('Account frozen.')}>Freeze Account</button><button type="button" onClick={() => showToast('User suspended.')}>Suspend User</button><button type="button" className="primary" onClick={() => showToast('Case escalated.')}>Escalate</button><button type="button" onClick={() => showToast('Case marked safe.')}>Mark Safe</button></div>
        <div className="kyc-flow-stats four"><StatCard label="Composite Risk" value="78/100" tone="danger" /><StatCard label="Identity Status" value="L2 Verified" /><StatCard label="Account Longevity" value="14 Days" /><StatCard label="Avg Transaction" value="$1,200" /></div>
        <div className="kyc-doc-review"><DocumentCard title="KYC Comparison Viewer" /><div className="kyc-status-stack"><span>Full Name: Alex Rodriguez Rivera</span><span>DOB: 1988-04-12</span><span>ID Number: G-2009384-B2</span><span>Address: TX</span></div></div>
      </Panel>
      <Panel title="Evidence Panel"><div className="kyc-network-map small"><i /><i /><strong>Entity relationship graph</strong></div><textarea placeholder="Add investigation findings..." /></Panel>
    </div>
  );
}

function AuditSection() {
  return (
    <>
      <Panel title="Audit Logs">
        <div className="kyc-flow-filters"><button type="button">Oct 12, 2023 - Oct 19, 2023</button><button type="button">All Reviewers</button><button type="button">All Actions</button><button type="button" className="primary"><Filter size={14} />Apply Filters</button><button type="button"><Download size={14} />Export CSV</button></div>
        <table className="kyc-flow-table"><thead><tr><th>Timestamp</th><th>Action</th><th>Performed By</th><th>IP Address</th><th>Entity ID</th><th>Remarks</th></tr></thead><tbody>{auditRows.map((row) => <tr key={row.join('-')}>{row.map((cell, index) => <td key={index}>{index === 1 ? <Badge tone={cell.includes('REJECTED') || cell.includes('FLAG') ? 'danger' : 'neutral'}>{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table>
        <div className="kyc-pagination"><button type="button">‹</button><button className="active" type="button">1</button><button type="button">2</button><button type="button">3</button><span>...</span><button type="button">50</button><button type="button">›</button></div>
      </Panel>
      <div className="kyc-flow-stats three"><StatCard label="Audit Integrity" value="SHA-256 verified" /><StatCard label="Average Daily Logs" value="4,812" /><StatCard label="Critical Warnings" value="0 Issues" tone="success" /></div>
    </>
  );
}

function ReviewerSection({ showToast }) {
  return (
    <Panel title="Reviewer Assignment" action={<button className="primary-action-btn" type="button" onClick={() => showToast('Load distributed across available reviewers.')}>Smart Distribute Load</button>}>
      <div className="kyc-flow-stats three"><StatCard label="Total Reviewers" value="24" tone="success" /><StatCard label="Unassigned Cases" value="142" tone="danger" /><StatCard label="Average Throughput" value="89.4 Cases / Day" /></div>
      <table className="kyc-flow-table"><thead><tr><th>Reviewer Name</th><th>Assigned Cases</th><th>Pending</th><th>Approval/Rejection</th><th>Capacity Status</th><th>Action</th></tr></thead><tbody>{reviewerRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>{index === 4 ? <Badge tone={cell === 'Critical' ? 'danger' : 'neutral'}>{cell}</Badge> : cell}</td>)}<td><button type="button" onClick={() => showToast(`${row[0]} assigned to new queue.`)}>Assign</button></td></tr>)}</tbody></table>
      <div className="kyc-load-card"><BarChart3 size={34} /><div><strong>Automated Load Balancer</strong><span>AI suggested optimal redistribution of 14 cases from overloaded reviewers.</span></div><button type="button" onClick={() => showToast('Optimization applied.')}>Apply Optimization</button></div>
    </Panel>
  );
}

function RejectionSection({ showToast }) {
  return (
    <Panel title="Rejection Management">
      <div className="kyc-flow-stats four"><StatCard label="Total Rejections" value="1,284" tone="danger" /><StatCard label="Restore Rate" value="4.2%" /><StatCard label="Avg Review Time" value="18m" /><StatCard label="Top Category" value="ID Expiry" /></div>
      <table className="kyc-flow-table"><thead><tr><th>User</th><th>Reason Category</th><th>Rejection Date</th><th>Reviewer Name</th><th>AI Confidence</th><th>Actions</th></tr></thead><tbody>{rejectionRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>{index === 1 ? <Badge tone="danger">{cell}</Badge> : cell}</td>)}<td><button type="button" onClick={() => showToast(`Reupload requested for ${row[0]}.`)}>Request Reupload</button></td></tr>)}</tbody></table>
    </Panel>
  );
}

function DocumentVerification({ title, docLabel, fields, checks, showToast, business = false }) {
  return (
    <div className="kyc-doc-review">
      <Panel title={title}>
        <div className={`kyc-doc-stage ${business ? 'business' : ''}`}>
          <DocumentCard title={docLabel} />
        </div>
      </Panel>
      <Panel title={business ? 'Entity Data Extraction' : 'Extracted OCR Data'}>
        <div className="kyc-ocr-grid">
          {fields.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
        <h3 className="kyc-mini-heading">Validation Engine</h3>
        {checks.map((item, index) => <div className="kyc-check-line" key={item}><span>{item}</span>{index === checks.length - 1 ? <Badge>Review</Badge> : <CheckCircle2 size={16} />}</div>)}
        <textarea placeholder="Optional: Add notes for the audit trail..." />
        <div className="kyc-flow-actions"><button type="button" className="danger" onClick={() => showToast(`${title} rejected.`)}>Reject</button><button type="button" className="primary" onClick={() => showToast(`${title} approved.`)}>Approve Verification</button></div>
      </Panel>
    </div>
  );
}

function DocumentCard({ title, small = false }) {
  return (
    <div className={`kyc-document-card ${small ? 'small' : ''}`}>
      <div className="kyc-doc-toolbar"><Search size={13} /><RefreshCcw size={13} /><Download size={13} /></div>
      <div className="kyc-id-card">
        <IdCard size={34} />
        <strong>{title}</strong>
        <span>HOZIFY SECURE</span>
        <small>ABCDE1234F</small>
      </div>
    </div>
  );
}

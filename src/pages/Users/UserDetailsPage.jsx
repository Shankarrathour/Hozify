import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  CalendarCheck,
  CheckCircle2,
  Download,
  Edit2,
  FileText,
  KeyRound,
  MessageSquare,
  ReceiptText,
  RefreshCcw,
  RotateCcw,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Star,
  ThumbsDown,
  ThumbsUp,
  User,
  Users,
  Wallet
} from 'lucide-react';

const tabs = ['Overview', 'Bookings', 'Wallet', 'Referrals', 'Documents', 'Reviews', 'Complaints', 'Timeline', 'Audit Logs'];
const bookingFilters = ['Active', 'Completed', 'Cancelled', 'Refunded'];

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);

const formatDate = (value) =>
  new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(value));

const getCity = (user) => {
  const address = user.addresses?.[0] || '';
  const parts = address.split(',').map((part) => part.trim()).filter(Boolean);
  return parts.length > 1 ? parts[parts.length - 1].replace(/\s-\s\d+$/, '') : 'Mumbai';
};

const getTotalSpend = (user) =>
  user.bookingHistory.reduce((total, booking) => total + booking.amount, 0);

const getReviews = (user) => [
  {
    booking: user.bookingHistory[0]?.id || 'BK-90021',
    partner: 'SwiftFix Plumbing',
    rating: 5,
    review: 'Excellent service and timely updates throughout the booking.',
    date: user.bookingHistory[0]?.date || user.registrationDate
  },
  {
    booking: user.bookingHistory[1]?.id || 'BK-88452',
    partner: 'Elite Cleaning Co.',
    rating: 4,
    review: 'Good quality work, but arrival was a few minutes late.',
    date: user.bookingHistory[1]?.date || user.registrationDate
  }
];

const getComplaints = (user) => [
  {
    ticketId: `TCK-${user.id.slice(-4)}-01`,
    issueType: 'Service Delay',
    priority: 'Medium',
    status: 'Resolved',
    assignedAgent: 'Ananya R.'
  },
  {
    ticketId: `TCK-${user.id.slice(-4)}-02`,
    issueType: 'Refund Follow-up',
    priority: 'High',
    status: user.status === 'Blocked' ? 'Escalated' : 'Open',
    assignedAgent: 'Marcus D.'
  }
];

const getTimeline = (user) => [
  { type: 'Registration', date: user.registrationDate, detail: `${user.name} registered on Hozify.` },
  { type: 'Login', date: '2026-06-12', detail: 'Successful login from Android app.' },
  { type: 'Booking Created', date: user.bookingHistory[0]?.date || user.registrationDate, detail: `${user.bookingHistory[0]?.id || 'BK-90021'} created.` },
  { type: 'Booking Cancelled', date: user.bookingHistory.find((booking) => booking.status === 'Cancelled')?.date || '2026-05-01', detail: 'Cancellation request recorded.' },
  { type: 'Wallet Credit', date: user.registrationDate, detail: `${formatCurrency(user.referrals.earnedAmount)} referral credit added.` },
  { type: 'Wallet Debit', date: user.bookingHistory[0]?.date || user.registrationDate, detail: `${formatCurrency(user.bookingHistory[0]?.amount || 0)} debited for service payment.` },
  { type: 'Referral Earned', date: user.registrationDate, detail: `${user.referrals.totalReferrals} referral records linked.` },
  { type: 'Document Uploaded', date: user.documents[0]?.uploadedDate || user.registrationDate, detail: `${user.documents[0]?.name || 'Aadhaar'} uploaded.` },
  { type: 'Complaint Raised', date: '2026-05-30', detail: 'Support ticket opened for review.' },
  { type: 'Review Submitted', date: user.bookingHistory[0]?.date || user.registrationDate, detail: 'Customer submitted a service review.' }
];

const getAuditLogs = (user) => [
  {
    action: 'Password Change',
    performedBy: 'Admin (Sarah J.)',
    date: '2024-10-24 14:22:10',
    ipAddress: '192.168.1.1',
    device: 'Chrome / MacOS',
    remarks: 'Forced reset due to policy update.',
    severity: 'normal',
    icon: 'key'
  },
  {
    action: 'Profile Update',
    performedBy: 'User (Self)',
    date: '2024-10-23 09:15:44',
    ipAddress: '192.168.1.45',
    device: 'Mobile App / iOS',
    remarks: 'Name change',
    severity: 'normal',
    icon: 'user'
  },
  {
    action: 'Failed Login',
    performedBy: 'System',
    date: '2024-10-23 08:12:01',
    ipAddress: '103.45.2.199',
    device: 'Unrecognized Browser',
    remarks: '3 incorrect attempts from China',
    severity: 'danger',
    icon: 'alert'
  },
  {
    action: 'Wallet Withdrawal',
    performedBy: 'User (Self)',
    date: '2024-10-21 13:45:30',
    ipAddress: '192.168.1.45',
    device: 'Mobile App / iOS',
    remarks: `Withdrawal of ${formatCurrency(user.wallet.balance)}.`,
    severity: 'normal',
    icon: 'wallet'
  },
  {
    action: 'KYC Approved',
    performedBy: 'System (Auto)',
    date: '2024-10-20 11:30:12',
    ipAddress: 'Internal Server',
    device: 'Engine v2.4',
    remarks: 'Identity verified via DigiLocker',
    severity: 'success',
    icon: 'check'
  },
  {
    action: 'Successful Login',
    performedBy: 'User (Self)',
    date: '2024-10-20 11:28:05',
    ipAddress: '192.168.1.45',
    device: 'Mobile App / iOS',
    remarks: 'Session started (30m duration)',
    severity: 'success',
    icon: 'login'
  },
  ...Array.from({ length: 8 }, (_, index) => ({
    action: 'Notification Setting',
    performedBy: 'User (Self)',
    date: `2024-10-${19 - Math.floor(index / 2)} 10:45:00`,
    ipAddress: '192.168.1.45',
    device: 'iOS App',
    remarks: 'Email notifications disabled',
    severity: 'normal',
    icon: 'settings'
  }))
];

function MetricCard({ title, value, icon: Icon, tone = 'neutral', helper }) {
  return (
    <div className={`user-detail-metric ${tone}`}>
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
        {helper && <small>{helper}</small>}
      </div>
      {Icon && <Icon size={18} />}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-item-row">
      <span className="info-label">{label}</span>
      <strong className="info-val">{value}</strong>
    </div>
  );
}

function ActionLink({ children, onClick }) {
  return <button className="user-detail-link-action" type="button" onClick={onClick}>{children}</button>;
}

function OverviewCard({ icon: Icon, title, subtitle, children, tone = 'purple-bg' }) {
  return (
    <div className="panel overview-card">
      <div className="service-card-title-wrap">
        <div className={`title-icon-circle ${tone}`}>
          <Icon size={16} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function OverviewTab({ user }) {
  const reviews = getReviews(user);
  const city = getCity(user);

  return (
    <div className="user-detail-overview-grid">
      <OverviewCard icon={User} title="Personal Information" subtitle="Core identity and customer account data.">
        <div className="overview-info-list">
          <InfoRow label="Name" value={user.name} />
          <InfoRow label="Mobile" value={user.mobile} />
          <InfoRow label="Email" value={user.email} />
          {user.dob && <InfoRow label="DOB" value={formatDate(user.dob)} />}
          {user.gender && <InfoRow label="Gender" value={user.gender} />}
          <InfoRow label="Membership Type" value={user.membershipType} />
        </div>
      </OverviewCard>

      <OverviewCard icon={MessageSquare} title="Address Information" subtitle="Saved customer service locations." tone="blue-bg">
        <div className="user-detail-address-stack">
          {user.addresses.map((address) => (
            <div className="user-detail-address" key={address}>{address}</div>
          ))}
        </div>
      </OverviewCard>

      <OverviewCard icon={ShieldCheck} title="Emergency Contact" subtitle="Fallback contact information for escalations." tone="orange-bg">
        <div className="overview-info-list">
          <InfoRow label="Contact Name" value="Riya Mehta" />
          <InfoRow label="Relationship" value="Family" />
          <InfoRow label="Mobile" value="+91 90000 11223" />
        </div>
      </OverviewCard>

      <OverviewCard icon={Smartphone} title="Device Information" subtitle="Last known customer device details." tone="blue-bg">
        <div className="overview-info-list">
          <InfoRow label="Device" value="Android 14" />
          <InfoRow label="IP Address" value="103.48.12.91" />
          <InfoRow label="City" value={city} />
        </div>
      </OverviewCard>

      <OverviewCard icon={FileText} title="App Information" subtitle="Installed app and account verification state.">
        <div className="overview-info-list">
          <InfoRow label="App Version" value="2.4.0" />
          <InfoRow label="Mobile Verification" value={user.verification?.mobile || 'Verified'} />
          <InfoRow label="Email Verification" value={user.verification?.email || 'Verified'} />
        </div>
      </OverviewCard>

      <OverviewCard icon={CalendarCheck} title="Recent Activity" subtitle="Latest customer activity in the platform." tone="orange-bg">
        <div className="timeline-mini-list">
          {getTimeline(user).slice(0, 3).map((event) => (
            <div className="timeline-mini-item" key={`${event.type}-${event.date}`}>
              <div className="timeline-mini-icon check-green">OK</div>
              <div className="timeline-mini-content">
                <strong>{event.type}</strong>
                <span>{event.detail}</span>
                <small>{formatDate(event.date)}</small>
              </div>
            </div>
          ))}
        </div>
      </OverviewCard>

      <OverviewCard icon={Wallet} title="Recent Login History" subtitle="Latest known account sessions." tone="blue-bg">
        <div className="overview-info-list">
          <InfoRow label="Last Login" value="12 Jun 2026, 10:24 AM" />
          <InfoRow label="Login City" value={city} />
          <InfoRow label="Login Device" value="Android App" />
        </div>
      </OverviewCard>

      <OverviewCard icon={AlertTriangle} title="Risk Score" subtitle="Current account risk posture." tone="orange-bg">
        <div className="overview-info-list">
          <InfoRow label="Risk Level" value={user.status === 'Blocked' ? 'High' : user.status === 'Suspended' ? 'Medium' : 'Low'} />
          <InfoRow label="Reviews Given" value={reviews.length} />
          <InfoRow label="Open Complaints" value={getComplaints(user).filter((item) => item.status === 'Open').length} />
        </div>
      </OverviewCard>
    </div>
  );
}

function BookingsTab({ user }) {
  const [filter, setFilter] = useState('Completed');
  const rows = useMemo(() => {
    const enriched = user.bookingHistory.map((booking, index) => ({
      ...booking,
      partner: index % 2 === 0 ? 'SwiftFix Plumbing' : 'Elite Cleaning Co.'
    }));

    if (filter === 'Active') return enriched.filter((booking) => ['Scheduled', 'In Progress', 'Active'].includes(booking.status));
    return enriched.filter((booking) => booking.status === filter);
  }, [filter, user.bookingHistory]);

  return (
    <div className="panel user-detail-table-panel">
      <div className="directory-panel-header user-detail-table-header">
        <h2>Booking History</h2>
        <div className="segmented-tab-filter">
          {bookingFilters.map((item) => (
            <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} type="button" key={item}>{item}</button>
          ))}
        </div>
      </div>
      <div className="table-wrap">
        <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="user-management-inner-table user-detail-wide-table">
          <thead>
            <tr>
              <th>BOOKING ID</th>
              <th>SERVICE</th>
              <th>PARTNER</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? rows.map((booking) => (
              <tr key={booking.id}>
                <td><strong>{booking.id}</strong></td>
                <td>{booking.serviceName}</td>
                <td>{booking.partner}</td>
                <td>{formatCurrency(booking.amount)}</td>
                <td>{booking.status}</td>
                <td>{formatDate(booking.date)}</td>
                <td>
                  <div className="user-detail-row-actions">
                    <ActionLink>View Booking</ActionLink>
                    <ActionLink>Download Invoice</ActionLink>
                    <ActionLink>Raise Investigation</ActionLink>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="7" className="user-management-empty-state">No {filter.toLowerCase()} bookings found.</td>
              </tr>
            )}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

function WalletTab({ user }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [receiptFeedback, setReceiptFeedback] = useState('');
  const totalSpent = getTotalSpend(user);
  const refundAmount = user.bookingHistory
    .filter((booking) => booking.status === 'Refunded')
    .reduce((total, booking) => total + booking.amount, 0);
  const handleReceiptAction = (message) => {
    setReceiptFeedback(message);
    window.setTimeout(() => setReceiptFeedback(''), 1800);
  };

  return (
    <>
      <div className="user-detail-card-grid">
        <MetricCard title="Current Balance" value={formatCurrency(user.wallet.balance)} icon={Wallet} />
        <MetricCard title="Total Spent" value={formatCurrency(totalSpent)} icon={ReceiptText} />
        <MetricCard title="Refund Amount" value={formatCurrency(refundAmount)} icon={ThumbsDown} tone="negative" />
        <MetricCard title="Referral Earnings" value={formatCurrency(user.referrals.earnedAmount)} icon={ThumbsUp} tone="positive" />
      </div>
      <div className="panel user-detail-table-panel">
        <div className="directory-panel-header">
          <h2>Wallet Transactions</h2>
          <span className="footer-results-text">{user.wallet.transactions.length} transactions</span>
        </div>
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="user-management-inner-table user-detail-wide-table">
            <thead>
              <tr>
                <th>TRANSACTION ID</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>REFERENCE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {user.wallet.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td><strong>{transaction.id}</strong></td>
                  <td>{transaction.type}</td>
                  <td>{formatCurrency(transaction.amount)}</td>
                  <td>{formatDate(transaction.date)}</td>
                  <td>Success</td>
                  <td>{transaction.remarks}</td>
                  <td><ActionLink onClick={() => setSelectedTransaction(transaction)}>View Details</ActionLink></td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </div>
      {selectedTransaction && (
        <TransactionDetailsOverlay
          transaction={selectedTransaction}
          onClose={() => {
            setSelectedTransaction(null);
            setReceiptFeedback('');
          }}
          onDownload={() => handleReceiptAction('Receipt downloaded successfully.')}
          onShare={() => handleReceiptAction('Receipt link copied successfully.')}
          feedback={receiptFeedback}
        />
      )}
    </>
  );
}

function TransactionDetailsOverlay({ transaction, onClose, onDownload, onShare, feedback }) {
  const subtotal = Math.max(transaction.amount - 50, 0);
  const platformFee = Math.round(subtotal * 0.025);
  const tax = Math.max(transaction.amount - subtotal - platformFee, 0);

  return (
    <div className="user-wallet-overlay-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="user-wallet-transaction-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallet-transaction-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="user-wallet-modal-header">
          <div>
            <h2 id="wallet-transaction-title">Transaction Detail <span>#{transaction.id}</span></h2>
            <p>Processed on {formatDate(transaction.date)} at 14:22 PM</p>
          </div>
          <button className="user-wallet-close-btn" type="button" onClick={onClose} aria-label="Close transaction detail">×</button>
        </header>

        <div className="user-wallet-modal-body">
          <section className="user-wallet-success-card">
            <div className="user-wallet-success-icon">✓</div>
            <span>SUCCESS</span>
            <strong>{formatCurrency(transaction.amount)}</strong>
            <p>{transaction.remarks}</p>
          </section>

          <section className="user-wallet-info-section">
            <h3>Payment Information</h3>
            <div className="user-wallet-info-row">
              <span>Payment Method</span>
              <strong className="user-wallet-card-chip">Visa ****4242</strong>
            </div>
            <div className="user-wallet-info-row">
              <span>Reference ID</span>
              <strong>REF_{transaction.id.slice(-6)}_XZ_88</strong>
            </div>
            <div className="user-wallet-info-row">
              <span>Payout Partner</span>
              <strong>Stripe Connect <i /></strong>
            </div>
          </section>

          <section className="user-wallet-info-section">
            <h3>Transaction Breakdown</h3>
            <div className="user-wallet-breakdown-row">
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <div className="user-wallet-breakdown-row">
              <span>Platform Fee (2.5%)</span>
              <strong>{formatCurrency(platformFee)}</strong>
            </div>
            <div className="user-wallet-breakdown-row">
              <span>VAT / Sales Tax (1.07%)</span>
              <strong>{formatCurrency(tax)}</strong>
            </div>
            <div className="user-wallet-total-row">
              <span>Total Payout</span>
              <strong>{formatCurrency(transaction.amount)}</strong>
            </div>
          </section>

          {feedback && (
            <div className="user-wallet-receipt-feedback" role="status">{feedback}</div>
          )}
        </div>

        <footer className="user-wallet-modal-footer">
          <button className="primary-action-btn user-wallet-download-btn" type="button" onClick={onDownload}>
            <Download size={16} />
            <span>Download Receipt</span>
          </button>
          <button className="secondary-action-btn user-wallet-share-btn" type="button" onClick={onShare} aria-label="Share transaction">
            <Share2 size={16} />
          </button>
        </footer>
      </div>
    </div>
  );
}

function ReferralsTab({ user }) {
  const [selectedReferral, setSelectedReferral] = useState(null);
  const referredRows = user.referrals.referredUsers.map((name, index) => ({
    name,
    dateJoined: user.registrationDate,
    reward: Math.max(150, Math.round(user.referrals.earnedAmount / Math.max(user.referrals.referredUsers.length, 1))),
    status: index % 2 === 0 ? 'Successful' : 'Pending',
    referralCode: user.referrals.referralCode
  }));

  return (
    <>
      <div className="user-detail-card-grid">
        <MetricCard title="Referral Count" value={user.referrals.totalReferrals} icon={Users} />
        <MetricCard title="Successful Referrals" value={referredRows.filter((row) => row.status === 'Successful').length} icon={ThumbsUp} tone="positive" />
        <MetricCard title="Pending Rewards" value={referredRows.filter((row) => row.status === 'Pending').length} icon={CalendarCheck} />
        <MetricCard title="Total Earnings" value={formatCurrency(user.referrals.earnedAmount)} icon={Wallet} tone="positive" />
      </div>
      <div className="panel user-detail-table-panel">
        <div className="directory-panel-header">
          <h2>Referral Users</h2>
          <span className="footer-results-text">Code {user.referrals.referralCode}</span>
        </div>
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="user-management-inner-table user-detail-wide-table">
            <thead>
              <tr>
                <th>REFERRAL USER</th>
                <th>DATE JOINED</th>
                <th>REWARD</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {referredRows.length > 0 ? referredRows.map((row) => (
                <tr key={row.name}>
                  <td><strong>{row.name}</strong></td>
                  <td>{formatDate(row.dateJoined)}</td>
                  <td>{formatCurrency(row.reward)}</td>
                  <td>{row.status}</td>
                  <td><ActionLink onClick={() => setSelectedReferral(row)}>View Details</ActionLink></td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="user-management-empty-state">No referred users yet.</td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>
      </div>
      {selectedReferral && (
        <ReferralDetailOverlay
          referral={selectedReferral}
          user={user}
          onClose={() => setSelectedReferral(null)}
        />
      )}
    </>
  );
}

function ReferralDetailOverlay({ referral, user, onClose }) {
  return (
    <div className="user-wallet-overlay-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="user-referral-detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="referral-detail-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="user-wallet-modal-header">
          <div>
            <h2 id="referral-detail-title">Referral Detail <span>#{referral.referralCode}</span></h2>
            <p>Referral joined on {formatDate(referral.dateJoined)}</p>
          </div>
          <button className="user-wallet-close-btn" type="button" onClick={onClose} aria-label="Close referral detail">x</button>
        </header>

        <div className="user-referral-modal-body">
          <section className="user-referral-hero-card">
            <div className="user-wallet-success-icon">✓</div>
            <span>{referral.status}</span>
            <strong>{referral.name}</strong>
            <p>Invited by {user.name}</p>
          </section>

          <section className="user-wallet-info-section">
            <h3>Referral Information</h3>
            <div className="user-wallet-info-row">
              <span>Referral Code</span>
              <strong>{referral.referralCode}</strong>
            </div>
            <div className="user-wallet-info-row">
              <span>Referred User</span>
              <strong>{referral.name}</strong>
            </div>
            <div className="user-wallet-info-row">
              <span>Date Joined</span>
              <strong>{formatDate(referral.dateJoined)}</strong>
            </div>
            <div className="user-wallet-info-row">
              <span>Referral Status</span>
              <strong>{referral.status}</strong>
            </div>
          </section>

          <section className="user-wallet-info-section">
            <h3>Reward Summary</h3>
            <div className="user-wallet-breakdown-row">
              <span>Reward Amount</span>
              <strong>{formatCurrency(referral.reward)}</strong>
            </div>
            <div className="user-wallet-breakdown-row">
              <span>Total Referrals</span>
              <strong>{user.referrals.totalReferrals}</strong>
            </div>
            <div className="user-wallet-total-row">
              <span>Total Earnings</span>
              <strong>{formatCurrency(user.referrals.earnedAmount)}</strong>
            </div>
          </section>
        </div>

        <footer className="user-referral-modal-footer">
          <button className="primary-action-btn" type="button" onClick={onClose}>
            <span>Done</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

function DocumentsTab({ user }) {
  const documentNames = ['Aadhaar', 'PAN', 'Driving License', 'Voter ID', 'Selfie', 'Video KYC'];
  const documents = documentNames.map((name, index) => {
    const existing = user.documents[index % user.documents.length];
    return {
      name,
      type: name === 'Selfie' || name === 'Video KYC' ? 'KYC' : 'Identity',
      status: existing?.verificationStatus === 'Verified' ? 'Approved' : existing?.verificationStatus || (index % 2 === 0 ? 'Pending' : 'Rejected'),
      uploadedDate: existing?.uploadedDate || user.registrationDate
    };
  });

  return (
    <div className="user-detail-doc-grid">
      {documents.map((document) => (
        <div className="user-detail-doc-card" key={document.name}>
          <div>
            <FileText size={18} />
            <h3>{document.name}</h3>
            <span>{document.type}</span>
          </div>
          <span className={`user-management-doc-status ${document.status.toLowerCase()}`}>
            {document.status}
          </span>
          <small>Uploaded {formatDate(document.uploadedDate)}</small>
          <div className="user-detail-row-actions">
            <ActionLink>View</ActionLink>
            <ActionLink>Download</ActionLink>
            <ActionLink>Reverify</ActionLink>
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewsTab({ user }) {
  const reviews = getReviews(user);
  const positive = reviews.filter((review) => review.rating >= 4).length;

  return (
    <>
      <div className="user-detail-card-grid">
        <MetricCard title="Average Rating" value={(reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)} icon={Star} />
        <MetricCard title="Total Reviews" value={reviews.length} icon={MessageSquare} />
        <MetricCard title="Positive Reviews" value={positive} icon={ThumbsUp} tone="positive" />
        <MetricCard title="Negative Reviews" value={reviews.length - positive} icon={ThumbsDown} tone="negative" />
      </div>
      <div className="panel user-detail-table-panel">
        <div className="directory-panel-header">
          <h2>Reviews</h2>
          <span className="footer-results-text">{reviews.length} reviews</span>
        </div>
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="user-management-inner-table user-detail-wide-table">
            <thead>
              <tr>
                <th>BOOKING</th>
                <th>PARTNER</th>
                <th>RATING</th>
                <th>REVIEW</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.booking}>
                  <td><strong>{review.booking}</strong></td>
                  <td>{review.partner}</td>
                  <td className="user-detail-stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</td>
                  <td>{review.review}</td>
                  <td>{formatDate(review.date)}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </div>
    </>
  );
}

function ComplaintsTab({ user }) {
  const complaints = getComplaints(user);

  return (
    <>
      <div className="user-detail-card-grid">
        <MetricCard title="Open Complaints" value={complaints.filter((item) => item.status === 'Open').length} icon={MessageSquare} />
        <MetricCard title="Resolved" value={complaints.filter((item) => item.status === 'Resolved').length} icon={CheckCircle2} tone="positive" />
        <MetricCard title="Escalated" value={complaints.filter((item) => item.status === 'Escalated').length} icon={ShieldAlert} tone="negative" />
      </div>
      <div className="panel user-detail-table-panel">
        <div className="directory-panel-header">
          <h2>Complaints</h2>
          <span className="footer-results-text">{complaints.length} tickets</span>
        </div>
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="user-management-inner-table user-detail-wide-table">
            <thead>
              <tr>
                <th>TICKET ID</th>
                <th>ISSUE TYPE</th>
                <th>PRIORITY</th>
                <th>STATUS</th>
                <th>ASSIGNED AGENT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((ticket) => (
                <tr key={ticket.ticketId}>
                  <td><strong>{ticket.ticketId}</strong></td>
                  <td>{ticket.issueType}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.assignedAgent}</td>
                  <td><ActionLink>View Ticket</ActionLink></td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </div>
    </>
  );
}

function TimelineTab({ user }) {
  return (
    <div className="panel overview-card user-detail-timeline-card">
      <div className="service-card-title-wrap">
        <div className="title-icon-circle purple-bg">
          <CalendarCheck size={16} />
        </div>
        <div>
          <h2>Vertical Activity Timeline</h2>
          <p>Registration, login, booking, wallet, referral, document, complaint, and review events.</p>
        </div>
      </div>
      <div className="user-detail-vertical-timeline">
        {getTimeline(user).map((event) => (
          <div className="user-detail-timeline-item" key={`${event.type}-${event.date}`}>
            <span />
            <div>
              <strong>{event.type}</strong>
              <p>{event.detail}</p>
              <small>{formatDate(event.date)}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditLogsTab({ user }) {
  const auditLogs = getAuditLogs(user);
  const securityEvents = auditLogs.filter((log) => log.severity === 'danger').length;
  const lastActiveIp = auditLogs[1]?.ipAddress || '192.168.1.45';

  return (
    <div className="user-audit-tab">
      <div className="user-audit-summary-grid">
        <div className="user-audit-summary-card">
          <span>Total Activities (30d)</span>
          <strong>142</strong>
          <small className="red-text">+8%</small>
        </div>
        <div className="user-audit-summary-card">
          <span>Security Events</span>
          <strong className="red-text">{securityEvents}</strong>
          <small className="user-audit-alert-tag">Alert</small>
        </div>
        <div className="user-audit-summary-card">
          <span>Last Active IP</span>
          <strong>{lastActiveIp}</strong>
        </div>
        <div className="user-audit-summary-card">
          <span>Primary Device</span>
          <strong><Smartphone size={14} /> iPhone 14 Pro</strong>
        </div>
      </div>

      <div className="panel user-detail-table-panel user-audit-table-panel">
        <div className="directory-panel-header user-audit-table-header">
          <h2>System Audit Trail</h2>
          <span className="footer-results-text">Showing 1-15 of 244 entries</span>
        </div>
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="user-management-inner-table user-detail-wide-table user-audit-table">
          <thead>
            <tr>
              <th>ACTION</th>
              <th>PERFORMED BY</th>
              <th>DATE/TIME</th>
              <th>IP ADDRESS</th>
              <th>DEVICE</th>
              <th>REMARKS</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr className={log.severity === 'danger' ? 'user-audit-danger-row' : ''} key={`${log.action}-${log.date}`}>
                <td>
                  <div className="user-audit-action-cell">
                    <span className={`user-audit-icon ${log.severity}`}>
                      {log.icon === 'key' ? <KeyRound size={13} /> : log.icon === 'alert' ? <AlertTriangle size={13} /> : log.icon === 'wallet' ? <Wallet size={13} /> : log.icon === 'check' ? <ShieldCheck size={13} /> : <User size={13} />}
                    </span>
                    <strong>{log.action}</strong>
                  </div>
                </td>
                <td>{log.performedBy}</td>
                <td>{log.date.replace(' ', ' · ')}</td>
                <td className={log.severity === 'danger' ? 'red-text font-bold' : ''}>{log.ipAddress}</td>
                <td>{log.device}</td>
                <td>
                  <span className={log.severity === 'danger' ? 'red-text font-bold' : ''}>{log.remarks}</span>
                  {log.remarks === 'Name change' && <span className="user-audit-name-chip">Name Change</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
        </div>
        <div className="user-audit-footer">
          <span>15 rows per page</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>Previous</button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <span className="pag-ellipsis">...</span>
            <button className="pag-num-btn" type="button">17</button>
            <button className="pag-nav-btn" type="button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserDetailsPage({ user, onBack, onEdit, onStatusChange }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const [detailFeedback, setDetailFeedback] = useState('');
  const completedBookings = user.bookingHistory.filter((booking) => booking.status === 'Completed').length;
  const totalSpend = getTotalSpend(user);
  const reviews = getReviews(user);
  const city = getCity(user);

  const renderTab = () => {
    if (activeTab === 'Overview') return <OverviewTab user={user} />;
    if (activeTab === 'Bookings') return <BookingsTab user={user} />;
    if (activeTab === 'Wallet') return <WalletTab user={user} />;
    if (activeTab === 'Referrals') return <ReferralsTab user={user} />;
    if (activeTab === 'Documents') return <DocumentsTab user={user} />;
    if (activeTab === 'Reviews') return <ReviewsTab user={user} />;
    if (activeTab === 'Complaints') return <ComplaintsTab user={user} />;
    if (activeTab === 'Timeline') return <TimelineTab user={user} />;
    return <AuditLogsTab user={user} />;
  };

  const showDetailFeedback = (message) => {
    setDetailFeedback(message);
    window.setTimeout(() => setDetailFeedback(''), 2200);
  };

  return (
    <div className="user-detail-page">
      {detailFeedback && (
        <div className="user-management-feedback" role="status">
          <CheckCircle2 size={16} />
          <span>{detailFeedback}</span>
        </div>
      )}
      <div className="partner-details-nav user-detail-nav">
        <button className="back-arrow-btn" type="button" onClick={onBack} aria-label="Go back to users">
          <ArrowLeft size={20} />
        </button>
        <div className="partner-details-header-meta">
          <div className="header-meta-top">
            <span className="user-management-avatar user-detail-header-avatar">
              {user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
            </span>
            <div className="detail-title-block">
              <div className="detail-title-row">
                <h1>{user.name}</h1>
                <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
              </div>
              <div className="detail-id-row">
                <span className="check-bullet">✔</span>
                <span>User ID: {user.id}</span>
                <span className="dot-sep">•</span>
                <span>Joined {formatDate(user.registrationDate)}</span>
              </div>
            </div>
            <div className="detail-compliance-score-wrap user-detail-score">
              <div className="score-label">360 USER PROFILE</div>
              <div className="score-value">{formatCurrency(totalSpend)}</div>
            </div>
          </div>

          <div className="header-meta-actions user-detail-actions-top">
            <button className="secondary-action-btn font-bold" type="button" onClick={onEdit}>
              <Edit2 size={16} />
              <span>Edit Profile</span>
            </button>
            <button className="user-management-action-btn warning" type="button" onClick={() => onStatusChange(user, 'Suspended')}>
              <ShieldAlert size={15} />
              <span>Suspend</span>
            </button>
            <button className="user-management-action-btn danger" type="button" onClick={() => onStatusChange(user, 'Blocked')}>
              <Ban size={15} />
              <span>Block</span>
            </button>
            <button className="user-management-action-btn success" type="button" onClick={() => onStatusChange(user, 'Active')}>
              <CheckCircle2 size={15} />
              <span>Activate</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" onClick={() => setNotificationOpen(true)}>
              <MessageSquare size={16} />
              <span>Send Notification</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" onClick={() => setKycOpen(true)}>
              <ShieldCheck size={16} />
              <span>KYC Verification</span>
            </button>
          </div>
        </div>
      </div>

      <div className="user-detail-main-layout">
        <aside className="user-detail-summary-card">
          <div className="user-detail-photo">
            <img src={user.avatar} alt={user.name} />
          </div>
          <h2>{user.name}</h2>
          <span>{user.id}</span>
          <div className="user-detail-profile-lines">
            <span>{user.mobile}</span>
            <span>{user.email}</span>
            <span>{city}</span>
            <span>Registered {formatDate(user.registrationDate)}</span>
          </div>
          <span className={`user-detail-status-pill ${user.status.toLowerCase()}`}>{user.status}</span>
          <strong>{user.membershipType}</strong>
        </aside>

        <section className="user-detail-content-panel">
          <div className="user-detail-top-metrics">
            <MetricCard title="Total Bookings" value={user.bookingHistory.length} icon={CalendarCheck} />
            <MetricCard title="Completed Bookings" value={completedBookings} icon={CheckCircle2} tone="positive" />
            <MetricCard title="Wallet Balance" value={formatCurrency(user.wallet.balance)} icon={Wallet} />
            <MetricCard title="Referral Earnings" value={formatCurrency(user.referrals.earnedAmount)} icon={ThumbsUp} tone="positive" />
            <MetricCard title="Reviews Given" value={reviews.length} icon={Star} />
          </div>

          <div className="details-subtabs-wrap user-detail-tabs-wrap">
            <nav className="details-subnav user-detail-tabs">
              {tabs.map((tab) => (
                <button
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                  key={tab}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {renderTab()}
        </section>
      </div>
      {notificationOpen && (
        <SendNotificationOverlay
          onClose={() => setNotificationOpen(false)}
          onSend={() => {
            setNotificationOpen(false);
            showDetailFeedback('Notification sent successfully.');
          }}
        />
      )}
      {kycOpen && (
        <KycVerificationOverlay
          user={user}
          onClose={() => setKycOpen(false)}
          onUpdate={(message) => {
            setKycOpen(false);
            showDetailFeedback(message);
          }}
        />
      )}
    </div>
  );
}

function SendNotificationOverlay({ onClose, onSend }) {
  const [channel, setChannel] = useState('Push');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [actionUrl, setActionUrl] = useState('hozify.app/dashboard');
  const [errors, setErrors] = useState({});

  const submit = () => {
    const nextErrors = {};
    if (!title.trim()) nextErrors.title = 'Title is required.';
    if (!message.trim()) nextErrors.message = 'Message is required.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) onSend();
  };

  return (
    <div className="user-wallet-overlay-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="user-notification-modal" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}>
        <header className="user-notification-header">
          <div>
            <h2>Send Notification</h2>
            <p>Broadcast a message across different channels to specific users or segments.</p>
          </div>
          <button className="user-wallet-close-btn" type="button" onClick={onClose} aria-label="Close send notification">×</button>
        </header>

        <div className="user-notification-body">
          <label className="user-notification-label">Channel</label>
          <div className="user-notification-channel-grid">
            {['Push', 'Email', 'SMS'].map((item) => (
              <button className={channel === item ? 'active' : ''} type="button" onClick={() => setChannel(item)} key={item}>
                {item === 'Push' ? <MessageSquare size={16} /> : item === 'Email' ? <FileText size={16} /> : <Smartphone size={16} />}
                <span>{item}</span>
              </button>
            ))}
          </div>

          <label className="user-notification-field">
            <span>Notification Title</span>
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g. System Maintenance Update" />
            {errors.title && <small>{errors.title}</small>}
          </label>

          <label className="user-notification-field">
            <span>Message Body</span>
            <textarea maxLength={240} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your detailed message here..." />
            <em>{message.length} / 240 characters</em>
            {errors.message && <small>{errors.message}</small>}
          </label>

          <label className="user-notification-field">
            <span>Action URL (Optional)</span>
            <div className="user-notification-url-row">
              <strong>https://</strong>
              <input value={actionUrl} onChange={(event) => setActionUrl(event.target.value)} />
            </div>
          </label>
        </div>

        <footer className="user-notification-footer">
          <button className="secondary-action-btn" type="button">
            <CalendarCheck size={16} />
            <span>Schedule</span>
          </button>
          <button className="primary-action-btn" type="button" onClick={submit}>
            <span>Send Now</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

function KycVerificationOverlay({ user, onClose, onUpdate }) {
  const approve = () => onUpdate('KYC Approved Successfully.');
  const reject = () => onUpdate('KYC Updated Successfully.');
  const request = () => onUpdate('KYC reupload requested successfully.');

  return (
    <div className="user-wallet-overlay-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="user-kyc-modal" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}>
        <header className="user-kyc-header">
          <div>
            <h2><ShieldCheck size={18} /> KYC Document Verification</h2>
            <p>PAN Card Preview • Request ID: #8829-KYC</p>
          </div>
          <button className="user-wallet-close-btn" type="button" onClick={onClose} aria-label="Close KYC verification">×</button>
        </header>

        <div className="user-kyc-content">
          <aside className="user-kyc-side">
            <h3>Extracted OCR Data</h3>
            <div className="user-kyc-ocr-card">
              <span>Full Name</span>
              <strong>{user.name.toUpperCase()}</strong>
            </div>
            <div className="user-kyc-ocr-card">
              <span>Father's Name</span>
              <strong>SUNIL PRASAD VERMA</strong>
            </div>
            <div className="user-kyc-ocr-two">
              <div className="user-kyc-ocr-card">
                <span>PAN Number</span>
                <strong>ABCDE1234F</strong>
              </div>
              <div className="user-kyc-ocr-card">
                <span>Date of Birth</span>
                <strong>{user.dob ? formatDate(user.dob) : '12/04/1992'}</strong>
              </div>
            </div>
            <p className="user-kyc-confidence">OCR Confidence: 98.4%</p>

            <h3>Document Properties</h3>
            <div className="user-kyc-info-row"><span>Format</span><strong>JPEG (High Res)</strong></div>
            <div className="user-kyc-info-row"><span>File Size</span><strong>4.2 MB</strong></div>
            <div className="user-kyc-info-row"><span>Uploaded On</span><strong>Oct 24, 2023</strong></div>
            <div className="user-kyc-info-row"><span>Security Flag</span><strong>Authentic</strong></div>

            <div className="user-kyc-profile-card">
              <img src={user.avatar} alt={user.name} />
              <div>
                <span>User Profile</span>
                <strong>{user.name}</strong>
              </div>
            </div>
          </aside>

          <main className="user-kyc-preview">
            <span className="user-kyc-watermark">HOZIFY SECURE</span>
            <div className="user-kyc-document-stage">
              <div className="user-kyc-pan-card">
                <div />
                <strong>PAN CARD</strong>
                <span>INCOME TAX DEPARTMENT</span>
                <p>ABCDE1234F</p>
              </div>
            </div>
          </main>
        </div>

        <footer className="user-kyc-footer">
          <span>Assigned to Admin Review Team • 2 other verifications pending.</span>
          <i className="user-kyc-footer-dot" aria-hidden="true" />
          <div>
            <button className="secondary-action-btn" type="button" onClick={request}>
              <RefreshCcw size={16} />
              <span>Re-request</span>
            </button>
            <button className="secondary-action-btn user-kyc-reject" type="button" onClick={reject}>
              <Ban size={16} />
              <span>Reject</span>
            </button>
            <button className="primary-action-btn" type="button" onClick={approve}>
              <CheckCircle2 size={16} />
              <span>Approve</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
